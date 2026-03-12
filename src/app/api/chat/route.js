import { NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = 'gpt-4o-mini';

const knowledgeBase = `
La Caféine is a premium healthy tea and coffee brand.
We specialize in Single Drop Tea Technology, nutri-infused beverages, and affordable luxury cafés.
Investment range: ₹8–20 Lakhs.
Outlet size: 150–1200 sq ft.
High ROI and scalable model.
`;

// In-memory session store (for demo; in production use a DB or Redis)
const sessions = new Map();

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, mode, city, investment, name, phone, sessionId } = body;
    const lowerMessage = (message || '').toLowerCase();

    // Get or create session
    const sid = sessionId || Math.random().toString(36).substring(7);
    if (!sessions.has(sid)) {
      sessions.set(sid, { step: 0, data: {} });
    }
    const session = sessions.get(sid);

    // Check for franchise intent
    if (
      lowerMessage.includes('franchise') ||
      lowerMessage.includes('invest') ||
      lowerMessage.includes('open cafe')
    ) {
      session.step = 1;
      return NextResponse.json({
        reply: 'Wonderful decision. May I have your full name?',
        next_mode: 'franchise_name',
        sessionId: sid,
      });
    }

    // Franchise lead capture flow
    if (session.step === 1 || mode === 'franchise_name') {
      session.data.name = message;
      session.step = 2;
      return NextResponse.json({
        reply: 'Thank you. Please share your email address.',
        next_mode: 'franchise_email',
        sessionId: sid,
      });
    }

    if (session.step === 2 || mode === 'franchise_email') {
      session.data.email = message;
      session.step = 3;
      return NextResponse.json({
        reply: 'Kindly share your contact number.',
        next_mode: 'franchise_phone',
        sessionId: sid,
      });
    }

    if (session.step === 3 || mode === 'franchise_phone') {
      session.data.phone = message;
      session.step = 4;
      return NextResponse.json({
        reply: 'Which city are you planning to open La Caféine in?',
        next_mode: 'franchise_city',
        sessionId: sid,
      });
    }

    if (session.step === 4 || mode === 'franchise_city') {
      session.data.city = message;
      session.step = 5;
      return NextResponse.json({
        reply: 'What is your investment capacity? (₹8–12L / ₹12–15L / ₹15–20L / ₹20L+)',
        next_mode: 'franchise_investment',
        sessionId: sid,
      });
    }

    if (session.step === 5 || mode === 'franchise_investment') {
      session.data.budget = message;
      
      // Log the lead (in production, save to DB)
      console.log('📋 Franchise Lead Captured:', session.data);
      
      sessions.delete(sid);
      return NextResponse.json({
        reply: 'Thank you for your interest in La Caféine. Our investment advisory team will contact you shortly.',
        next_mode: 'normal',
        sessionId: sid,
      });
    }

    // OpenAI call for general queries
    if (OPENAI_API_KEY) {
      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: OPENAI_MODEL,
            messages: [
              { role: 'system', content: 'You are La Caféine Concierge. Answer in premium executive tone.' },
              { role: 'system', content: knowledgeBase },
              { role: 'user', content: message },
            ],
          }),
        });
        const data = await res.json();
        const aiReply = data.choices?.[0]?.message?.content || 'How may I assist you with our curated menu or franchise opportunity?';
        return NextResponse.json({ reply: aiReply, next_mode: 'normal' });
      } catch {
        return NextResponse.json({
          reply: 'How may I assist you with our curated menu or franchise opportunity?',
          next_mode: 'normal',
        });
      }
    }

    return NextResponse.json({
      reply: 'Thank you for your interest! How may I assist you with our curated menu or franchise opportunity?',
      next_mode: 'normal',
    });
  } catch {
    return NextResponse.json({ reply: 'Something went wrong. Please try again.', next_mode: 'normal' }, { status: 500 });
  }
}
