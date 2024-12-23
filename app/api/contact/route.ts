import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '7784482645:AAFAesDUpOLE1U2BpI2VoLXkNR9Qrw3nCw4';
const TELEGRAM_CHAT_ID = '6106205006';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, message } = data;

    // Format the message for Telegram in Uzbek
    const telegramMessage = `
📨 Yangi xabar!

Yuboruvchi: ${name}
Telefon: ${phone}
Xabar: ${message}
`;

    // Send to Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
