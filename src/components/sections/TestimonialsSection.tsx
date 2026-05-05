const TESTIMONIALS = [
  {
    name: 'คุณอรอนงค์ ว.',
    zodiac: 'ราศีสิงห์ · ธาตุไฟ',
    stone: 'บุษราคัม',
    quote: 'ตั้งแต่ใส่แหวนบุษราคัมที่ MigiJames ออกแบบให้ตามดวง รู้สึกได้เลยว่าชีวิตงานดีขึ้นมาก ลูกค้าให้ความไว้วางใจมากขึ้น',
    type: 'เสริมการเงิน · แหวน Bespoke',
  },
  {
    name: 'คุณวิชัย ส.',
    zodiac: 'ราศีกรกฎ · ธาตุน้ำ',
    stone: 'มุก & มูนสโตน',
    quote: 'ซื้อสร้อยมุกให้ภรรยาตามคำแนะนำจากพื้นดวง เธอรักมากและบอกว่ารู้สึกได้ถึงพลังงานที่ดีตลอดเวลาที่ใส่',
    type: 'เสริมความรัก · สร้อยคอ',
  },
  {
    name: 'คุณมาลี ท.',
    zodiac: 'ราศีมกร · ธาตุดิน',
    stone: 'เพชร',
    quote: 'MigiJames ไม่ได้แค่ขายเครื่องประดับ แต่เล่าเรื่องราวของเราผ่านทุกชิ้น ประทับใจมากจนแนะนำทุกคนในครอบครัว',
    type: 'เสริมอำนาจ · ต่างหูเพชร',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-24 md:py-32 px-8">
      <div className="section-inner">
        <div className="text-center mb-16">
          <div className="text-eyebrow flex items-center justify-center gap-4 mb-5 text-charcoal/60">
            <span className="w-8 h-px bg-gold/50" />
            Client Stories
            <span className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-display text-display-md text-charcoal font-light">
            เรื่องเล่าจาก<em className="text-gold not-italic">ลูกค้า</em>จริง
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="card-cream border border-stone/10 p-8">
              <div className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-4">
                {t.stone}
              </div>
              <blockquote className="font-display text-[14px] text-charcoal/80 italic leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-stone/10 pt-4">
                <div className="font-body text-[11px] text-charcoal/70 font-medium">{t.name}</div>
                <div className="font-body text-[10px] text-mist mt-1">{t.zodiac}</div>
                <div className="font-body text-[10px] tracking-[0.15em] uppercase text-gold/50 mt-1">
                  {t.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
