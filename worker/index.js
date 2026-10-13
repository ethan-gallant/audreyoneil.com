// Serves the site, and sends contact-form messages to Audrey's inbox.
const TO = 'me@audreyoneil.com';
const FROM = { email: 'contact@mail.audreyoneil.com', name: "audreyoneil.com contact form" };

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact' && request.method === 'POST') return contact(request, env);
    return env.ASSETS.fetch(request);
  },
};

async function contact(request, env) {
  const back = (status) => Response.redirect(new URL(`/contact?status=${status}`, request.url), 303);
  const form = await request.formData();
  const field = (k, max) => String(form.get(k) ?? '').trim().slice(0, max);
  const name = field('name', 200);
  const email = field('email', 200);
  const message = field('message', 5000);

  // Bots fill in the hidden "website" field; pretend it worked.
  if (field('website', 200)) return back('sent');
  if (!(await humanCheck(form.get('cf-turnstile-response'), request, env))) return back('failed');
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return back('failed');

  const escape = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  try {
    await env.EMAIL.send({
      to: TO,
      from: FROM,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `${name} <${email}> wrote:\n\n${message}`,
      html: `<p><strong>${escape(name)}</strong> &lt;${escape(email)}&gt; wrote:</p><p style="white-space:pre-wrap">${escape(message)}</p>`,
    });
    return back('sent');
  } catch (err) {
    console.error('contact form send failed', err);
    return back('failed');
  }
}

// Cloudflare Turnstile: confirms the form was filled in by a person, not a spam bot.
async function humanCheck(token, request, env) {
  if (!token) return false;
  const body = new FormData();
  body.append('secret', env.TURNSTILE_SECRET);
  body.append('response', token);
  body.append('remoteip', request.headers.get('CF-Connecting-IP') ?? '');
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const outcome = await res.json();
  return outcome.success === true;
}
