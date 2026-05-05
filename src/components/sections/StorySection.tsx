export default function StorySection() {
  return (
    <section id="story" className="bg-obsidian py-24 md:py-32 px-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/[0.02] -skew-x-12 translate-x-1/2" />
      
      <div className="section-inner relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
            <div className="text-eyebrow flex items-center gap-3 mb-6 text-gold/60">
              <span className="w-8 h-px bg-gold/40" />
              Phase 1 · Brand Presence
            </div>
            <h2 className="font-display text-display-md text-white font-light leading-tight mb-8">
              ทำไม MigiJames<br />
              ถึง <em className="text-gold not-italic">ต่างจากทุกที่</em>
            </h2>
            <div className="space-y-6 font-body text-[14px] text-white/40 leading-[2] font-light">
              <p>
                ร้านเพชรทั่วไปขายสินค้า MigiJames ขายประสบการณ์และพลังงาน 
                ทุกชิ้นงานเริ่มจากการทำความเข้าใจตัวตนและดวงชะตาของคุณอย่างลึกซึ้ง
              </p>
              <blockquote className="border-l border-gold/30 pl-6 py-2 my-8 italic text-white/60 text-base font-display">
                "เมื่อคุณสวมอัญมณีที่ <span className="text-gold">ถูกดวง</span><br />
                มันไม่ใช่แค่เครื่องประดับ แต่มันคือพลังงานที่เสริมตัวตนของคุณ"
              </blockquote>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-up-delay-1">
            {[
              { icon: '🔮', title: 'วิเคราะห์พื้นดวง', desc: 'ทุกชิ้นเริ่มจากการวิเคราะห์ดวงชะตาเชิงลึก' },
              { icon: '✦', title: 'ออกแบบเฉพาะตัว', desc: 'ไม่มีชิ้นไหนเหมือนกันในโลก' },
              { icon: '💎', title: 'คัดสรรอัญมณี', desc: 'เลือกอัญมณีตรงกับธาตุและราศีของคุณ' },
              { icon: '♾️', title: 'พลังงานยั่งยืน', desc: 'ไม่ใช่แค่ความสวย แต่คือพลังงานที่คงอยู่' },
            ].map((item, i) => (
              <div key={item.title} className="group p-8 border border-white/5 bg-white/[0.02] hover:border-gold/20 transition-all duration-500">
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-500 inline-block">{item.icon}</div>
                <h3 className="font-display text-lg text-white font-light mb-2">{item.title}</h3>
                <p className="font-body text-[11px] text-white/20 leading-relaxed uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
