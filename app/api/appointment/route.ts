import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '7784482645:AAFAesDUpOLE1U2BpI2VoLXkNR9Qrw3nCw4';
const TELEGRAM_CHAT_ID = '6106205006';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, date, time, service, notes } = data;

    // Format the message for Telegram in Uzbek
    const message = `
🦷 Yangi tish shifokori qabuliga yozilish!

Xizmat: ${service}
Bemor: ${name}
Telefon: ${phone}
Sana: ${date}
Vaqt: ${time}
${notes ? `\nIzoh: ${notes}` : ''}
`;

    // Send to Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending appointment to Telegram:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send appointment' },
      { status: 500 }
    );
  }
}
