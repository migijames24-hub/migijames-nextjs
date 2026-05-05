export default function StorySection() {
  return (
    <section id="story" className="bg-cream py-24 md:py-32 px-8">
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-eyebrow flex items-center gap-3 mb-5 text-charcoal/60">
              <span className="w-8 h-px bg-gold" />
              เรื่องราวของเรา
            </div>
            <h2 className="font-display text-display-md text-charcoal font-light leading-tight mb-8">
              ทำไม MigiJames<br />
              ถึง<em className="text-gold not-italic">แตกต่าง</em><br />
              จากร้านเพชรทั่วไป
            </h2>
            <div className="space-y-5 font-body text-[13px] text-stone leading-relaxed">
              <p>
                MigiJames เกิดจากความเชื่อว่าเครื่องประดับที่ดีที่สุดไม่ใช่แค่สวยงาม
                แต่ต้องสื่อสารตัวตนและพลังงานของผู้สวมใส่
              </p>
              <p>
                เราผสมผสานศาสตร์อัญมณีโบราณกับการออกแบบร่วมสมัย
                โดยวิเคราะห์พื้นดวงชะตาของแต่ละบุคคลเพื่อเลือกอัญมณีที่ถูกต้องกับพลังงานชีวิต
              </p>
              <p>
                ทุกชิ้นงานคือการเดินทางร่วมกัน — จากการปรึกษาจนถึงวันที่คุณได้รับมือ
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '500+', label: 'ชิ้นงาน Bespoke', sub: 'ออกแบบเฉพาะบุคคล' },
              { n: '7+',   label: 'ปีประสบการณ์',   sub: 'ด้านอัญมณีมงคล' },
              { n: '100%', label: 'Handcrafted',     sub: 'ทำด้วยมือทุกชิ้น' },
              { n: '∞',    label: 'ความเป็นไปได้',  sub: 'ไม่มีขีดจำกัด' },
            ].map(item => (
              <div key={item.label} className="card-cream p-6 text-center border border-stone/10">
                <div className="font-display text-2xl text-gold font-light mb-1">{item.n}</div>
                <div className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal/60 mb-1">
                  {item.label}
                </div>
                <div className="font-body text-[10px] text-mist">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
