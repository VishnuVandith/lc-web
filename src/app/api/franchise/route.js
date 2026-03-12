import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Log the franchise submission (in production, save to DB)
    console.log('📋 Franchise Form Submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      city: body.city,
      budget: body.budget,
      model: body.model,
      state: body.state,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Thank you for your interest!' });
  } catch {
    return NextResponse.json({ success: false, message: 'Something went wrong.' }, { status: 500 });
  }
}
