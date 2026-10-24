import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    // Field validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Project description is required' },
        { status: 400 }
      );
    }

    // Optional webhook or email service integration
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            projectType,
            budget,
            message,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error('Failed to forward contact webhook:', err);
      }
    }

    // Server-side received confirmation
    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully. Kaushal will reply within 24 hours.',
        inquirySummary: {
          name,
          email,
          projectType,
          budget,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Server error processing inquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
