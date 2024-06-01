import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { nickname } = await req.json();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/signup/check-nickname`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname }),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
