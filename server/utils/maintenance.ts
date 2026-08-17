const passthroughPaths = new Set([
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon.ico',
  '/robots.txt',
  '/site.webmanifest',
])

export const MAINTENANCE_HEADERS = Object.freeze({
  'Cache-Control': 'no-store, max-age=0',
  'Content-Security-Policy': "default-src 'none'; base-uri 'none'; connect-src 'none'; font-src 'none'; form-action 'none'; frame-ancestors 'none'; img-src 'self' data:; object-src 'none'; script-src 'none'; style-src 'unsafe-inline'",
  'Content-Type': 'text/html; charset=utf-8',
  'Permissions-Policy': 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
  'Referrer-Policy': 'no-referrer',
  'Retry-After': '3600',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
})

export const shouldServeMaintenance = (method: string, requestPath: string): boolean => {
  if (method !== 'GET' && method !== 'HEAD') return true

  const pathname = requestPath.split('?', 1)[0] || '/'
  if (pathname.startsWith('/_nuxt/')) return false

  return !passthroughPaths.has(pathname)
}

export const MAINTENANCE_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0d130a">
  <meta name="robots" content="noindex, nofollow, noarchive">
  <title>Documentation under construction | Yieldra</title>
  <style>
    :root {
      color-scheme: dark;
      --background: #0d130a;
      --surface: #121a0f;
      --surface-raised: #172114;
      --border: rgba(206, 243, 192, 0.16);
      --text: #edf5e9;
      --muted: #9baa94;
      --accent: #83d86b;
      --accent-ink: #10200c;
      --radius: 1.5rem;
    }

    * { box-sizing: border-box; }

    html { min-width: 320px; background: var(--background); }

    body {
      min-height: 100dvh;
      margin: 0;
      background:
        radial-gradient(circle at 82% 18%, rgba(91, 150, 72, 0.13), transparent 28rem),
        var(--background);
      color: var(--text);
      font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    a { color: inherit; }

    .page {
      width: min(100%, 78rem);
      min-height: 100dvh;
      margin: 0 auto;
      padding: clamp(1rem, 3vw, 2rem);
      display: flex;
      align-items: center;
    }

    .shell {
      width: 100%;
      min-width: 0;
      min-height: min(45rem, calc(100dvh - clamp(2rem, 6vw, 4rem)));
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: rgba(18, 26, 15, 0.88);
      box-shadow: 0 2rem 7rem rgba(3, 8, 2, 0.3);
      overflow: hidden;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }

    .header,
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.25rem clamp(1.25rem, 4vw, 3rem);
    }

    .header { border-bottom: 1px solid var(--border); }
    .footer { border-top: 1px solid var(--border); color: var(--muted); font-size: 0.875rem; }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--text);
      font-weight: 720;
      letter-spacing: -0.02em;
      text-decoration: none;
    }

    .brand img { width: 2rem; height: 2rem; border-radius: 0.6rem; }

    .status {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      color: #cde9c4;
      font-size: 0.8125rem;
      font-weight: 650;
    }

    .status::before {
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 0.25rem rgba(131, 216, 107, 0.12);
    }

    .content {
      display: grid;
      grid-template-columns: minmax(0, 1.55fr) minmax(16rem, 0.65fr);
      gap: clamp(3rem, 8vw, 8rem);
      align-items: end;
      padding: clamp(3rem, 9vw, 7rem) clamp(1.25rem, 6vw, 5.5rem);
    }

    .content > * { min-width: 0; }

    .eyebrow {
      margin: 0 0 1.25rem;
      color: var(--accent);
      font-size: 0.75rem;
      font-weight: 750;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    h1 {
      max-width: 13ch;
      margin: 0;
      font-size: clamp(2.8rem, 8vw, 6.75rem);
      font-weight: 650;
      letter-spacing: -0.065em;
      line-height: 0.93;
      text-wrap: balance;
    }

    .lede {
      max-width: 34rem;
      margin: 2rem 0 0;
      color: var(--muted);
      font-size: clamp(1rem, 2vw, 1.2rem);
      line-height: 1.65;
    }

    .action {
      display: inline-flex;
      width: fit-content;
      margin-top: 2rem;
      padding: 0.85rem 1.1rem;
      border-radius: 0.8rem;
      background: var(--accent);
      color: var(--accent-ink);
      font-weight: 760;
      text-decoration: none;
      transition: transform 160ms ease, background-color 160ms ease;
    }

    .action:hover { background: #9be985; transform: translateY(-1px); }
    .action:active { transform: translateY(1px); }
    .action:focus-visible { outline: 3px solid #d5f7ca; outline-offset: 4px; }

    .details {
      margin: 0;
      padding: 1.4rem;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface-raised);
    }

    .details div + div { margin-top: 1.4rem; padding-top: 1.4rem; border-top: 1px solid var(--border); }
    .details dt { color: var(--muted); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
    .details dd { margin: 0.45rem 0 0; font-size: 1rem; line-height: 1.5; }

    .footer a { text-underline-offset: 0.25rem; }
    .footer a:hover { color: var(--text); }

    @media (max-width: 48rem) {
      .page { align-items: stretch; }
      .shell { min-height: calc(100dvh - 2rem); }
      .status { display: none; }
      .content { grid-template-columns: minmax(0, 1fr); align-items: center; gap: 2.5rem; padding-block: 3.5rem; }
      h1 { font-size: clamp(2.4rem, 10vw, 3rem); letter-spacing: -0.05em; }
      .footer { align-items: flex-start; flex-direction: column; }
    }

    @media (prefers-reduced-motion: reduce) {
      .action { transition: none; }
    }
  </style>
</head>
<body>
  <main class="page">
    <section class="shell" aria-labelledby="maintenance-title">
      <header class="header">
        <a class="brand" href="https://yieldra.io" aria-label="Yieldra home">
          <img src="/android-chrome-192x192.png" width="32" height="32" alt="">
          <span>Yieldra Protocol</span>
        </a>
        <span class="status">Maintenance in progress</span>
      </header>

      <div class="content">
        <div>
          <p class="eyebrow">Yieldra documentation</p>
          <h1 id="maintenance-title">Documentation under construction.</h1>
          <p class="lede">We are reviewing and updating every guide. The documentation will return soon.</p>
          <a class="action" href="https://yieldra.io">Return to Yieldra</a>
        </div>

        <dl class="details" aria-label="Maintenance details">
          <div>
            <dt>Status</dt>
            <dd>Content review in progress</dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>Documentation is temporarily unavailable</dd>
          </div>
        </dl>
      </div>

      <footer class="footer">
        <span>Yieldra Protocol</span>
        <a href="https://x.com/YieldraProtocol">Follow updates on X</a>
      </footer>
    </section>
  </main>
</body>
</html>`
