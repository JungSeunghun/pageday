import { NextRequest, NextResponse } from 'next/server';


type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    
    if (response.ok) {
      const data : LoginResponse = await response.json();

      const res = NextResponse.json({ message: 'Login successful' },{ status: 200 });

      res.cookies.set('accessToken', data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // 1 hour
        path: '/',
      });

      res.cookies.set('refreshToken', data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      return res;
    } else {
      return NextResponse.json({ message: '로그인에 실패했습니다.' }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ message: '서버오류가 발생했습니다.' }, { status: 500 });
  }
}
