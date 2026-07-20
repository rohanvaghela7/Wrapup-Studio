const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const SITE_NAME = 'Wrap UP';
export const SITE_URL = configuredSiteUrl.replace(/\/+$/, '');
export const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919725892807'
).replace(/\D/g, '');
export const WHATSAPP_DISPLAY = '+91 97258 92807';
export const PHONE_NUMBER = '919725892807';
export const PHONE_DISPLAY = '+91 97258 92807';

export function createWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function createPhoneUrl() {
  return `tel:+${PHONE_NUMBER}`;
}
