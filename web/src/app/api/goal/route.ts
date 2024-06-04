import { NextRequest, NextResponse } from 'next/server';

type GetGoalResponse = {
  goalId: number,
  actionBeforeReading: string,
  readingTime: string,
  action: string,
  date: Date,
  completed: boolean
};

export async function GET(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value;
  if(!accessToken) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  

  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date');

  if (!date) {
    return NextResponse.json({ error: 'missing date' }, { status: 400 });
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/goal?date=${date}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    });

    if (res.ok) {
      if(res.status == 200) {
        const goal : GetGoalResponse = await res.json();
        return NextResponse.json(goal, { status: 200 });
      } else {
        return NextResponse.json({goal: null}, { status: 200 });
      }
    } else {
      return NextResponse.json({ error: 'response error' }, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
