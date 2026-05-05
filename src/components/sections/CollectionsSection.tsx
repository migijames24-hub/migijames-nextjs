const COLLECTIONS = [
  {
    id: 1,
    slug: 'eclipse',
    title: 'ECLIPSE',
    category: 'Black Diamond Collection',
    stone: 'Black Diamond · 18K White Gold · Platinum Setting',
    price: 'เริ่มต้น ฿ 285,000',
    description: 'ความมืดที่มีพลัง เพชรดำหายากจากแหล่งที่ลึกที่สุดของโลก ออกแบบสำหรับผู้ที่มีพลังงานเงียบแต่ทรงพลัง เหมาะกับราศีมกร พิจิก และกุมภ์',
    icon: '💎',
  },
  {
    id: 2,
    slug: 'aurora',
    title: 'AURORA',
    category: 'Sapphire & Diamond Collection',
    stone: 'Ceylon Sapphire · Diamond · Platinum',
    price: 'เริ่มต้น ฿ 420,000',
    description: 'แสงแรกของรุ่งอรุณ ไพลินศรีลังกาที่หายากผสานกับเพชรขาวบริสุทธิ์ เหมาะกับราศีกรกฎ กุมภ์ และมีน ที่มีธาตุน้ำเป็นพลังหลัก',
    icon: '💙',
  },
  {
    id: 3,
    slug: 'soleil',
    title: 'SOLEIL',
    category: 'Fancy Yellow Diamond',
    stone: 'Fancy Yellow Diamond · 22K Gold',
    price: 'เริ่มต้น ฿ 680,000',
    description: 'พลังแห่งดวงอาทิตย์ Fancy Vivid Yellow Diamond ระดับ GIA ที่หาได้ยากยิ่ง เหมาะกับราศีสิงห์ เมษ และธนู ที่มีธาตุไฟเป็นพลังหลัก',
    icon: '💛',
  },
  {
    id: 4,
    slug: 'vert',
    title: 'VERT',
    category: 'Colombian Emerald',
    stone: 'Colombian Emerald · Diamond · 18K Gold',
    price: 'เริ่มต้น ฿ 195,000',
    description: 'สีเขียวลึกที่สุดของโลก มรกตโคลอมเบียเกรด AAA เหมาะกับราศีพฤษภ กันย์ และมกร ที่มีธาตุดินเป็นพลังหลัก',
    icon: '💚',
  },
]

export default function CollectionsSection() {
  return (
    <section id="collections" className="bg-obsidian py-24 md:py-32 px-8">
      <div className="section-inner">
        <div className="text-center mb-16">
          <div className="text-eyebrow flex items-center justify-center gap-4 mb-5">
            <span className="w-8 h-px bg-gold/50" />
            Selected Works
            <span className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-display text-display-md text-white font-light">
            ผลงาน <em className="text-gold not-italic">สั่งทำ</em> พิเศษ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map(item => (
            <div key={item.id} className="card-luxury group cursor-pointer animate-fade-up">
              {/* Image placeholder */}
              <div className="aspect-square bg-white/[0.02] flex items-center justify-center
                              border-b border-white/5 group-hover:border-gold/20 transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gem-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-center relative z-10 transform group-hover:scale-110 transition-transform duration-700">
                  <div className="text-5xl mb-4 drop-shadow-[0_0_15px_rgba(201,169,110,0.3)]">{item.icon}</div>
                  <div className="font-body text-[9px] tracking-[0.4em] uppercase text-white/30">
                    {item.category}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-display text-xl text-white font-light mb-3 tracking-wider">
                  {item.title}
                </h3>
                <div className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-4 min-h-[2.5em]">
                  {item.stone}
                </div>
                <p className="font-body text-[12px] text-white/40 leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
                <div className="font-display text-sm text-gold-light tracking-widest pt-4 border-t border-white/5">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#booking" className="btn-outline-light">
            ดูผลงานทั้งหมด & สั่งทำ Bespoke
          </a>
        </div>
      </div>
    </section>
  )
}
