interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL?: string;
}

interface Payload {
  name?: string;
  email?: string;
  company?: string;
  engagement?: string;
  message?: string;
  company_website?: string;
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    return json(500, { error: 'Mail not configured' });
  }

  let p: Payload;
  try {
    p = (await request.json()) as Payload;
  } catch {
    return json(400, { error: 'Bad JSON' });
  }

  if (p.company_website && p.company_website.length > 0) {
    return json(200, { ok: true });
  }

  const name = (p.name || '').trim();
  const email = (p.email || '').trim();
  const company = (p.company || '').trim();
  const engagement = (p.engagement || '').trim();
  const message = (p.message || '').trim();

  if (!name || !email || !message) {
    return json(400, { error: 'Missing required fields' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'Invalid email' });
  }
  if (message.length > 5000 || name.length > 200 || company.length > 200) {
    return json(400, { error: 'Field too long' });
  }

  const subject = `New engagement enquiry — ${name}${company ? ' · ' + company : ''}`;
  const lines = [
    `From: ${name} <${email}>`,
    company ? `Company: ${company}` : null,
    engagement ? `Interested in: ${engagement}` : null,
    '',
    message,
    '',
    '— sent via datashop.ai contact form',
  ].filter((l): l is string => l !== null);
  const text = lines.join('\n');
  const html = `<pre style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;white-space:pre-wrap">${escapeHtml(text)}</pre>`;

  const from = env.CONTACT_FROM_EMAIL || 'Datashop Contact <onboarding@resend.dev>';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('Resend send failed', res.status, detail);
    return json(502, { error: 'Send failed' });
  }

  return json(200, { ok: true });
};
