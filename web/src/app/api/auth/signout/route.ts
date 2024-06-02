import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const response = NextResponse.json(
    { message: 'Logout successful' },
    {status: 200}
  );
  
  response.cookies.set('accessToken', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0,
  });

  response.cookies.set('refreshToken', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0,
  });

  return response;
}
