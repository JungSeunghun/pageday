import { NextRequest, NextResponse } from 'next/server';

type GetTriggerResponse = {
  contents: string;
};

export async function POST(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value;
  if(!accessToken) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { contents } = await req.json();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/trigger/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ contents }),
    });

    if (response.ok) {
      const data: GetTriggerResponse = await response.json();
      return NextResponse.json({ contents: data.contents }, {status: 200});
    } else {
      return NextResponse.json({message: "response error"}, {status: response.status});
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' },{status: 500});
  }
}