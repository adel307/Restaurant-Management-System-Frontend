export function Footer() {
  return (
    <footer className="bg-ink text-cream/70 px-6 sm:px-10 py-10 mt-8">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-3 font-body text-sm">
        <div>
          <h3 className="font-display text-lg text-cream mb-2">Nile Grill House</h3>
          <p>14 Corniche El Nil, Maadi, Cairo</p>
          <p>Open daily, 12:00 — 00:00</p>
        </div>
        <div>
          <h3 className="font-display text-lg text-cream mb-2">Contact</h3>
          <p>+20 100 111 2233</p>
          <p>hello@nilegrillhouse.example</p>
        </div>
        <div>
          <h3 className="font-display text-lg text-cream mb-2">Follow</h3>
          <p>Instagram · Facebook · TikTok</p>
        </div>
      </div>
      <p className="font-mono text-[11px] text-cream/30 mt-8 max-w-6xl mx-auto">
        © 2026 Nile Grill House — powered by RMS
      </p>
    </footer>
  );
}
