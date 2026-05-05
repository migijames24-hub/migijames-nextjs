const STEPS = [
  {
    n: '01',
    icon: '🔮',
    title: 'วิเคราะห์พื้นดวง',
    desc: 'นัดปรึกษาส่วนตัว วิเคราะห์ดวงชะตา ธาตุ และพลังงานที่คุณต้องการเสริม',
  },
  {
    n: '02',
    icon: '✦',
    title: 'เลือกอัญมณี',
    desc: 'เลือกอัญมณีที่เหมาะกับดวงของคุณด้วยตัวเอง พร้อมคำอธิบายพลังงานแต่ละเม็ด',
  },
  {
    n: '03',
    icon: '✏️',
    title: 'ออกแบบ',
    desc: 'ร่วมออกแบบชิ้นงานกับช่างฝีมือ ติดตามความคืบหน้าผ่านระบบ Online',
  },
  {
    n: '04',
    icon: '💎',
    title: 'ส่งมอบ',
    desc: 'รับชิ้นงานพร้อมใบรับรอง GIA และบันทึกพลังงานเฉพาะของชิ้นงานนั้น',
  },
]

export default function BespokeSection() {
  return (
    <section id="bespoke" className="bg-obsidian py-24 md:py-32 px-8 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#c9a96e 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      <div className="section-inner relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div className="animate-fade-up">
            <div className="text-eyebrow flex items-center gap-3 mb-6 text-gold/60">
              <span className="w-8 h-px bg-gold/40" />
              Phase 2 · Bespoke Journey
            </div>
            <h2 className="font-display text-display-md text-white font-light leading-tight">
              กระบวนการ <em className="text-gold not-italic">สั่งทำ</em>
            </h2>
          </div>
          <div className="animate-fade-up-delay-1">
            <p className="font-body text-[14px] text-white/40 leading-[2] font-light max-w-md">
              ทุกชิ้นงาน Bespoke เริ่มจากการทำความเข้าใจตัวตนของคุณอย่างลึกซึ้ง 
              ผ่าน 4 ขั้นตอนที่ออกแบบมาเพื่อสร้างชิ้นงานที่สมบูรณ์แบบที่สุด
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.n} className={`relative group animate-fade-up-delay-${i}`}>
              <div className="relative z-10 p-8 border border-white/5 bg-white/[0.01] group-hover:border-gold/20 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div className="font-display text-4xl text-gold/10 font-light group-hover:text-gold/20 transition-colors duration-500">{step.n}</div>
                  <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">{step.icon}</div>
                </div>
                <h3 className="font-display text-lg text-white font-light mb-4 tracking-wide group-hover:text-gold transition-colors duration-500">{step.title}</h3>
                <p className="font-body text-[12px] text-white/20 leading-[1.8] group-hover:text-white/40 transition-colors duration-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 animate-fade-up-delay-3">
          <a href="#booking" className="btn-gold group">
            <span className="relative z-10">นัดปรึกษาส่วนตัว</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </div>
      </div>
    </section>
  )
}
