import { NextRequest, NextResponse } from 'next/server';

type GoalRequest =  {
  goalId: number;
  actionBeforeReading: string;
  readingTime: string;
  action: string;
  date: string;
}

export async function POST(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value;
  if(!accessToken) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const goal : GoalRequest = await req.json();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/goal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(goal)
    });

    if (res.ok) {
      return NextResponse.json({message: "ok"}, { status: 200 });
    } else {
      return NextResponse.json({ error: 'response error' }, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
