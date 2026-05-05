'use client'
import { useState } from 'react'
import { buildAstroMatchResult } from '@/lib/astro'
import type { AstroMatchResult } from '@/types'

type Purpose = 'money' | 'love' | 'health' | 'power'

const PURPOSES: { value: Purpose; label: string; icon: string }[] = [
  { value: 'money',  label: 'เสริมการเงิน',  icon: '✦' },
  { value: 'love',   label: 'เสริมความรัก',  icon: '♡' },
  { value: 'health', label: 'เสริมสุขภาพ',   icon: '◈' },
  { value: 'power',  label: 'เสริมอำนาจ',    icon: '◆' },
]

export default function AstroMatchSection() {
  const [birthdate, setBirthdate] = useState('')
  const [purpose, setPurpose] = useState<Purpose>('money')
  const [result, setResult] = useState<AstroMatchResult | null>(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = () => {
    if (!birthdate) return
    setLoading(true)
    setTimeout(() => {
      const date = new Date(birthdate)
      const res = buildAstroMatchResult(date, purpose)
      setResult(res)
      setLoading(false)
    }, 800)
  }

  return (
    <section id="astro" className="bg-obsidian py-24 md:py-32 px-8 relative">
      <div className="section-inner relative z-10">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="animate-fade-up">
            <div className="text-eyebrow flex items-center gap-3 mb-6 text-gold/60">
              <span className="w-8 h-px bg-gold/40" />
              Special Feature · Astro Matching
            </div>
            <h2 className="font-display text-display-md text-white font-light leading-tight mb-8">
              อัญมณีที่ <em className="text-gold not-italic">ถูกดวง</em> กับคุณ
            </h2>
            <p className="font-body text-[14px] text-white/40 leading-[2] font-light max-w-sm">
              ทุกชิ้นงานของ MigiJames เริ่มต้นด้วยความเข้าใจในพลังงานดวงชะตา 
              ระบบจะวิเคราะห์ราศี ธาตุ และแนะนำอัญมณีที่ช่วยส่งเสริมพลังชีวิตคุณ
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 animate-fade-up-delay-1">
            {[
              { n: '12', label: 'ราศี', sub: 'ครบถ้วนตามโหราศาสตร์' },
              { n: '4',  label: 'ธาตุ', sub: 'ดิน น้ำ ลม ไฟ' },
              { n: '30+', label: 'อัญมณี', sub: 'อัญมณีหายากทั่วโลก' },
              { n: '1:1',  label: 'Bespoke', sub: 'ออกแบบเฉพาะบุคคล' },
            ].map(s => (
              <div key={s.label} className="p-6 border border-white/5 bg-white/[0.01] text-center hover:border-gold/20 transition-all duration-500">
                <div className="font-display text-3xl text-gold font-light mb-1">{s.n}</div>
                <div className="font-body text-[10px] tracking-[0.2em] text-white/60 uppercase mt-1">
                  {s.label}
                </div>
                <div className="font-body text-[9px] text-white/20 mt-2">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive analyzer */}
        <div className="border border-white/5 bg-white/[0.01] relative overflow-hidden animate-fade-up-delay-2">
          {/* Subtle light effect */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-gold/5 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gold/5 blur-[80px] rounded-full" />

          <div className="p-8 md:p-16 relative z-10">
            <div className="text-center mb-12">
              <span className="font-body text-[11px] tracking-[0.4em] uppercase text-gold/50">
                ✦ &nbsp; Discover Your Gem &nbsp; ✦
              </span>
            </div>

            {/* Form */}
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
              <div className="space-y-3">
                <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-white/40">
                  วันเกิดของคุณ
                </label>
                <input
                  type="date"
                  value={birthdate}
                  onChange={e => setBirthdate(e.target.value)}
                  className="w-full bg-white/[0.02] border border-white/10 px-4 py-4 text-white font-body text-sm
                             focus:outline-none focus:border-gold/30 transition-colors"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-white/40">
                  พลังงานที่ต้องการเสริม
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PURPOSES.map(p => (
                    <button
                      key={p.value}
                      onClick={() => setPurpose(p.value)}
                      className={`
                        font-body text-[10px] tracking-[0.1em]
                        py-3.5 px-3 border transition-all duration-500
                        ${purpose === p.value
                          ? 'border-gold bg-gold/5 text-gold'
                          : 'border-white/5 text-white/30 hover:border-white/20'
                        }
                      `}
                    >
                      <span className="mr-2 text-xs">{p.icon}</span>
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <button
                onClick={handleAnalyze}
                disabled={!birthdate || loading}
                className={`
                  btn-gold min-w-[280px]
                  disabled:opacity-20 disabled:cursor-not-allowed
                  ${loading ? 'animate-pulse' : ''}
                `}
              >
                {loading ? 'วิเคราะห์พลังงาน...' : 'ค้นหาอัญมณีประจำตัว'}
              </button>
            </div>

            {/* Result */}
            {result && (
              <div className="border-t border-white/5 pt-16 animate-fade-in">
                {/* Zodiac header */}
                <div className="text-center mb-12">
                  <div className="font-display text-4xl text-white font-light mb-4 tracking-wider">
                    {result.zodiac.sign}
                  </div>
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <span className="font-body text-[11px] tracking-[0.3em] uppercase text-gold">
                      ธาตุ{result.zodiac.element}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                    <span className="font-body text-[11px] tracking-[0.3em] uppercase text-white/40">
                      ดาวครอง: {result.zodiac.ruling_planet}
                    </span>
                  </div>
                  <p className="font-body text-[14px] text-white/30 leading-relaxed italic max-w-md mx-auto">
                    "{result.zodiac.personality}"
                  </p>
                </div>

                {/* Recommended stones */}
                <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
                  {result.recommended_stones.map((stone, i) => (
                    <div
                      key={stone.name}
                      className="p-8 border border-white/5 bg-white/[0.01] text-center"
                    >
                      <div className="text-4xl mb-6">{stone.emoji}</div>
                      <div className="font-display text-lg text-white font-light mb-2 tracking-wide">
                        {stone.name}
                      </div>
                      <div className="font-body text-[12px] text-white/20 leading-relaxed mb-4">
                        {stone.benefit}
                      </div>
                      <div className="flex justify-center gap-1.5">
                        {Array.from({ length: 3 }).map((_, j) => (
                          <span
                            key={j}
                            className={`w-1 h-1 rounded-full
                              ${j < stone.power_level ? 'bg-gold' : 'bg-white/10'}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Personal message */}
                <div className="text-center max-w-xl mx-auto py-8 px-6 bg-gold/[0.02] border border-gold/10">
                  <p className="font-display text-lg text-gold/80 italic leading-relaxed mb-8">
                    "{result.personal_message}"
                  </p>
                  <a href="#booking" className="btn-gold group">
                    <span className="relative z-10">พูดคุยรายละเอียดเพิ่มเติม</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
