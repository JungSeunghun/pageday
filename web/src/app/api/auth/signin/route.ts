import { NextRequest, NextResponse } from 'next/server';

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
      const data = await response.json();
      return NextResponse.json({ token: data.token }, { status: 200 });
    } else {
      return NextResponse.json({ message: '로그인에 실패했습니다.' }, { status: response.status });
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: '서버오류가 발생했습니다.' }, { status: 500 });
  }
}
