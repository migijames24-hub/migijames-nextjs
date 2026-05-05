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
    <section id="booking" className="bg-obsidian py-24 md:py-32 px-8 relative">
      <div className="section-inner max-w-2xl relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="text-eyebrow flex items-center justify-center gap-4 mb-6 text-gold/60">
            <span className="w-8 h-px bg-gold/40" />
            Reservation · Contact
            <span className="w-8 h-px bg-gold/40" />
          </div>
          <h2 className="font-display text-display-md text-white font-light mb-6 tracking-wide">
            เริ่มต้น <em className="text-gold not-italic">การเดินทาง</em> ของคุณ
          </h2>
          <p className="font-body text-[14px] text-white/30 leading-relaxed font-light">
            นัดปรึกษาส่วนตัวโดยไม่มีค่าใช้จ่าย 
            ทีมงานผู้เชี่ยวชาญจะติดต่อกลับเพื่อยืนยันเวลาภายใน 24 ชั่วโมง
          </p>
        </div>

        {status === 'sent' ? (
          <div className="border border-white/5 bg-white/[0.01] p-16 text-center animate-fade-in">
            <div className="text-4xl mb-8">✦</div>
            <h3 className="font-display text-2xl text-gold font-light mb-4">เราได้รับข้อมูลของคุณแล้ว</h3>
            <p className="font-body text-[14px] text-white/40 leading-relaxed max-w-xs mx-auto">
              ทีมงาน MigiJames จะติดต่อกลับผ่านช่องทางที่คุณให้ไว้โดยเร็วที่สุด
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-up-delay-1">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-white/40">
                  ชื่อ-นามสกุล *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-white/[0.02] border border-white/10 px-4 py-4 text-white font-body text-sm
                             focus:outline-none focus:border-gold/30 transition-colors"
                  placeholder="กรุณาระบุชื่อของคุณ"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-white/40">
                  เบอร์โทรศัพท์ติดต่อ *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full bg-white/[0.02] border border-white/10 px-4 py-4 text-white font-body text-sm
                             focus:outline-none focus:border-gold/30 transition-colors"
                  placeholder="08x-xxx-xxxx"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-white/40">
                  อีเมล (ไม่บังคับ)
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white/[0.02] border border-white/10 px-4 py-4 text-white font-body text-sm
                             focus:outline-none focus:border-gold/30 transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-white/40">
                  วัน/เดือน/ปี เกิด (เพื่อวิเคราะห์ดวง)
                </label>
                <input
                  type="date"
                  value={form.birthday}
                  onChange={e => setForm(f => ({ ...f, birthday: e.target.value }))}
                  className="w-full bg-white/[0.02] border border-white/10 px-4 py-4 text-white font-body text-sm
                             focus:outline-none focus:border-gold/30 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-white/40">
                ช่องทางการปรึกษาที่สะดวก
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
                      font-body text-[10px] tracking-[0.1em] uppercase
                      py-4 border transition-all duration-500
                      ${form.type === opt.value
                        ? 'border-gold bg-gold/5 text-gold'
                        : 'border-white/5 text-white/30 hover:border-white/20'
                      }
                    `}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-white/40">
                เรื่องที่คุณสนใจ หรือ อัญมณีที่ต้องการ
              </label>
              <textarea
                rows={4}
                value={form.topic}
                onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
                className="w-full bg-white/[0.02] border border-white/10 px-4 py-4 text-white font-body text-sm
                           focus:outline-none focus:border-gold/30 transition-colors resize-none"
                placeholder="เช่น สนใจสั่งทำแหวนหมั้น, ต้องการปรึกษาเรื่องอัญมณีเสริมดวงการงาน"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gold w-full disabled:opacity-20 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <span className="relative z-10">
                  {status === 'sending' ? 'กำลังส่งข้อมูล...' : 'ส่งคำขอนัดหมาย'}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              {status === 'error' && (
                <p className="font-body text-[12px] text-red-400/80 text-center mt-6">
                  เกิดข้อผิดพลาดชั่วคราว กรุณาลองใหม่อีกครั้ง หรือติดต่อทาง Line
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
