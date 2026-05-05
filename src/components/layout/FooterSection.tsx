export default function FooterSection() {
  return (
    <footer className="bg-obsidian border-t border-white/5 py-16 px-8">
      <div className="section-inner">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-display text-xl text-white font-light mb-3">
              <em className="text-gold not-italic">Migi</em>James
            </div>
            <p className="font-body text-[10px] tracking-[0.3em] text-white/30 uppercase mb-4">
              Jewelry Story Telling
            </p>
            <p className="font-body text-[12px] text-white/30 leading-relaxed">
              ไม่ใช่แค่ขายเครื่องประดับ<br />
              เราออกแบบพลังงานเฉพาะบุคคล
            </p>
          </div>

          <div>
            <div className="font-body text-[9px] tracking-[0.3em] uppercase text-gold/60 mb-5">
              Navigation
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Collections', href: '#collections' },
                { label: 'Bespoke',     href: '#bespoke' },
                { label: 'Astro Match', href: '#astro' },
                { label: 'Our Story',   href: '#story' },
                { label: 'Booking',     href: '#booking' },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-[11px] tracking-[0.2em] text-white/30
                               hover:text-gold transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-body text-[9px] tracking-[0.3em] uppercase text-gold/60 mb-5">
              ติดต่อ
            </div>
            <div className="space-y-3 font-body text-[12px] text-white/30">
              <p>Line: @migijames</p>
              <p>Instagram: @migijames</p>
              <p>migijames.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-white/20">
            © 2024 MigiJames. All rights reserved.
          </p>
          <p className="font-body text-[10px] text-white/15">
            Designed with love — Jewelry Story Telling Since 2018
          </p>
        </div>
      </div>
    </footer>
  )
}
