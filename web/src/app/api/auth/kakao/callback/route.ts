import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  const clientId = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const redirectUri= process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
 
  try {
    const tokenResponse = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: clientId!,
        redirect_uri: redirectUri!,
        code: code!,
      }),
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    const refreshToken = tokenData.refresh_token;

    const userResponse = await fetch('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const user = await userResponse.json();
    
    // 필요한 사용자 정보를 추출
    const userInfo = {
      id: user.id,
    };

    return NextResponse.redirect(`/signup?userId=${user.id}`);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error(error);
    // return NextResponse.redirect('/error');
    return NextResponse.json({ status: 500 });
  }
}
