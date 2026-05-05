'use client'
import { useState } from 'react'

export default function BookingSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    birthday: '',
    type: 'online' as 'online' | 'onsite' | 'workshop',
    date: '',
    time: '',
    topic: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          birthday: form.birthday,
          inquiry_type: 'ปรึกษาดวง',
          message: `ประเภท: ${form.type} | วัน: ${form.date} เวลา: ${form.time} | เรื่อง: ${form.topic}`,
        }),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="bg-obsidian py-24 md:py-32 px-8">
      <div className="section-inner max-w-2xl">
        <div className="text-center mb-12">
          <div className="text-eyebrow flex items-center justify-center gap-4 mb-5">
            <span className="w-8 h-px bg-gold/50" />
            จองนัดปรึกษา
            <span className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-display text-display-md text-white font-light mb-4">
            เริ่มต้น<em className="text-gold not-italic">การเดินทาง</em>ของคุณ
          </h2>
          <p className="font-body text-[13px] text-white/30">
            ฟรีไม่มีค่าใช้จ่าย · ตอบกลับภายใน 24 ชั่วโมง
          </p>
        </div>

        {status === 'sent' ? (
          <div className="border border-gold/20 bg-gold/5 p-10 text-center">
            <div className="text-4xl mb-4">✦</div>
            <h3 className="font-display text-xl text-gold font-light mb-3">ได้รับข้อความแล้ว</h3>
            <p className="font-body text-[13px] text-white/40">
              เราจะติดต่อกลับภายใน 24 ชั่วโมงทาง Line หรือ Phone
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">
                  ชื่อ *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="input-luxury"
                  placeholder="ชื่อ-นามสกุล"
                />
              </div>
              <div>
                <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">
                  โทรศัพท์ *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="input-luxury"
                  placeholder="08x-xxx-xxxx"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">
                  อีเมล
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="input-luxury"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">
                  วันเกิด (สำหรับวิเคราะห์ดวง)
                </label>
                <input
                  type="date"
                  value={form.birthday}
                  onChange={e => setForm(f => ({ ...f, birthday: e.target.value }))}
                  className="input-luxury"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">
                ประเภทการปรึกษา
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'online', label: 'Online' },
                  { value: 'onsite', label: 'On-site' },
                  { value: 'workshop', label: 'Workshop' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, type: opt.value as typeof form.type }))}
                    className={`
                      font-body text-[9px] tracking-[0.15em] uppercase
                      py-3 border transition-all duration-300
                      ${form.type === opt.value
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-white/10 text-white/30 hover:border-white/30'
                      }
                    `}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-body text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">
                เรื่องที่ต้องการปรึกษา
              </label>
              <textarea
                rows={3}
                value={form.topic}
                onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
                className="input-luxury resize-none"
                placeholder="เช่น ต้องการสั่งทำแหวนหมั้น / ต้องการอัญมณีเสริมดวงการเงิน"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gold w-full disabled:opacity-50"
              >
                {status === 'sending' ? 'กำลังส่ง...' : 'ส่งคำขอนัด'}
              </button>
              {status === 'error' && (
                <p className="font-body text-[11px] text-red-400 text-center mt-3">
                  เกิดข้อผิดพลาด กรุณาลองใหม่หรือติดต่อทาง Line
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
