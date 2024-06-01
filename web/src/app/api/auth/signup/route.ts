import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const requestData = await req.json();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Signup successful' }, { status: response.status });
    } else {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
