const COLLECTIONS = [
  {
    id: 1,
    title: 'The Eternal Bond',
    category: 'แหวนหมั้น Bespoke',
    stone: 'เพชร 1.2 กะรัต · แพลทินัม',
    zodiac: 'เหมาะกับราศีมกร & ราศีพฤษภ',
    story: 'ออกแบบจากพื้นดวงคู่รัก สะท้อนความมั่นคงและความรักอันยั่งยืน',
  },
  {
    id: 2,
    title: 'Fire Goddess',
    category: 'สร้อยคอ',
    stone: 'ทับทิม 2.4 กะรัต · ทอง 18K',
    zodiac: 'เหมาะกับราศีเมษ & ราศีสิงห์',
    story: 'พลังงานไฟที่เผาไหม้อย่างสง่างาม เสริมอำนาจและความมั่นใจ',
  },
  {
    id: 3,
    title: 'Ocean Whisper',
    category: 'ต่างหู',
    stone: 'อความารีน · ทอง 18K',
    zodiac: 'เหมาะกับราศีมีน & ราศีกรกฎ',
    story: 'ความอ่อนโยนของน้ำที่ลึกซึ้ง เสริมสัญชาตญาณและจิตวิญญาณ',
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
            ผลงาน<em className="text-gold not-italic"> Bespoke </em>ที่โดดเด่น
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {COLLECTIONS.map(item => (
            <div key={item.id} className="card-luxury group cursor-pointer">
              {/* Image placeholder */}
              <div className="aspect-square bg-charcoal flex items-center justify-center
                              border-b border-white/5 group-hover:border-gold/20 transition-colors duration-500">
                <div className="text-center">
                  <div className="text-4xl mb-3">💎</div>
                  <div className="font-body text-[9px] tracking-[0.3em] uppercase text-white/20">
                    {item.category}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg text-white font-light mb-2">
                  {item.title}
                </h3>
                <div className="font-body text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                  {item.stone}
                </div>
                <p className="font-body text-[12px] text-white/30 leading-relaxed mb-4">
                  {item.story}
                </p>
                <div className="font-body text-[10px] text-white/20 italic">
                  {item.zodiac}
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
