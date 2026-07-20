import { NextResponse } from 'next/server';

export function POST() {
  return NextResponse.json(
    {
      ok: false,
      message: 'Private gallery downloads are not enabled for this deployment.',
    },
    { status: 501 },
  );
}
