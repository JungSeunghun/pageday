import { NextRequest, NextResponse } from 'next/server';

export async function GET() {

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`;
  return NextResponse.redirect(KAKAO_AUTH_URL);
}
