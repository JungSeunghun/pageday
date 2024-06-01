import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const response = NextResponse.json(
    { message: 'Logout successful' },
    {status: 200}
  );
  response.headers.set('Set-Cookie', 'authToken=; HttpOnly; Path=/; Max-Age=0');
  return response;
}
