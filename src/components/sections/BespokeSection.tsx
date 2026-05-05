const STEPS = [
  {
    n: '01',
    title: 'วิเคราะห์พื้นดวง',
    desc: 'กรอกวันเกิดและเป้าหมาย เราจะวิเคราะห์ราศีและธาตุเพื่อเลือกอัญมณีที่ถูกต้อง',
  },
  {
    n: '02',
    title: 'ปรึกษาและออกแบบ',
    desc: 'นัดพบเพื่อหารือเรื่อง Design แนวคิด และงบประมาณ พร้อม Sketch แนวทางเบื้องต้น',
  },
  {
    n: '03',
    title: 'สร้างสรรค์ผลงาน',
    desc: 'ช่างฝีมือของเราสร้างชิ้นงานด้วยมือ ใช้เวลา 4-8 สัปดาห์ พร้อมอัปเดตความคืบหน้า',
  },
  {
    n: '04',
    title: 'ส่งมอบความทรงจำ',
    desc: 'รับชิ้นงานพร้อม Certificate และเรื่องราวเบื้องหลัง — ความทรงจำที่จะอยู่ตลอดไป',
  },
]

export default function BespokeSection() {
  return (
    <section id="bespoke" className="bg-charcoal py-24 md:py-32 px-8">
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <div className="text-eyebrow flex items-center gap-3 mb-5">
              <span className="divider-gold" />
              Bespoke Journey
            </div>
            <h2 className="font-display text-display-md text-white font-light leading-tight">
              กระบวนการ<br />
              <em className="text-gold not-italic">สั่งทำพิเศษ</em>
            </h2>
          </div>
          <div>
            <p className="font-body text-[13px] text-white/40 leading-relaxed font-light">
              ทุกชิ้นงาน Bespoke ของ MigiJames ผ่านกระบวนการที่พิถีพิถัน
              ตั้งแต่การวิเคราะห์พื้นดวงจนถึงการส่งมอบ —
              เพื่อให้คุณได้รับเครื่องประดับที่สมบูรณ์แบบที่สุดในชีวิต
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gold/10 z-0" />
              )}
              <div className="relative z-10">
                <div className="font-display text-3xl text-gold/20 font-light mb-4">{step.n}</div>
                <div className="w-8 h-px bg-gold/40 mb-4" />
                <h3 className="font-display text-base text-white font-light mb-3">{step.title}</h3>
                <p className="font-body text-[12px] text-white/30 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#booking" className="btn-gold">
            เริ่มต้นการเดินทาง Bespoke
          </a>
        </div>
      </div>
    </section>
  )
}
