import { NextResponse } from 'next/server';

export function POST() {
  return NextResponse.json(
    {
      ok: false,
      message: 'Online API bookings are not enabled. Please use the WhatsApp enquiry form.',
    },
    { status: 501 },
  );
}
