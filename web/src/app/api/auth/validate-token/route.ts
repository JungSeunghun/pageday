import { NextRequest, NextResponse } from 'next/server';

type ValidateResponse = {
  username: string;
}

export async function GET(req: NextRequest) {
  try {
    const accessToken = req.cookies.get('accessToken')?.value;
    if(!accessToken) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }


    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/jwt/validate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    });

    if (response.ok) {
      const data : ValidateResponse = await response.json();
      return NextResponse.json({ username: data.username }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Invalid token' }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}