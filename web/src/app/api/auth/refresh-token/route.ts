import { NextRequest, NextResponse } from 'next/server';


type RefreshTokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export async function POST(req: NextRequest) {

  const { refreshToken } = await req.json();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/jwt/refresh-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (response.ok) {
      const data: RefreshTokenResponse = await response.json();
      const res = NextResponse.json({ message: 'Login successful' });

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
      const message = await response.json();
      return NextResponse.json({message}, {status: response.status});
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' },{status: 500});
  }
}
