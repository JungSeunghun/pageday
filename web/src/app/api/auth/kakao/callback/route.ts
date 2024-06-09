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
    const expiresIn = tokenData.expires_in;
    const refreshToken = tokenData.refresh_token;
    const refreshTokenExpiresIn = tokenData.refresh_token_expires_in;

    const userResponse = await fetch('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const user = await userResponse.json();

    const redirect = new URL("/join", req.url)

    const res = NextResponse.redirect(redirect);
    
    res.cookies.set("puid", user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60*60,
      path: '/',
    });

    res.cookies.set("patk", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: expiresIn,
      path: '/',
    });
    
    res.cookies.set('prtk', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: refreshTokenExpiresIn,
      path: '/',
    });

    return res;
  } catch (error) {
    return NextResponse.json({error: error},{ status: 500 });
  }
}
