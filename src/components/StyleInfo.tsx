import type { StyleData } from '../types/style'

interface StyleInfoProps {
  style: StyleData
}

export default function StyleInfo({ style }: StyleInfoProps) {
  const keywords = style.keywords.split(',').map((k) => k.trim())

  return (
    <div className={`${style.card} p-6 style-transition`}>
      <h2 className="text-lg font-bold mb-1">Style Info</h2>
      <div className={`w-10 h-1 ${style.highlight.includes('bg-') ? style.highlight : 'bg-current'} mb-5 rounded-full opacity-80`} />

      <div className="space-y-4">
        {/* NAME */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">NAME</p>
          <p className="text-base font-semibold">{style.name}</p>
        </div>

        {/* CHARACTERISTICS */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">CHARACTERISTICS</p>
          <p className="text-sm opacity-80">{style.desc}</p>
        </div>

        {/* PROMPT KEYWORDS */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-2">PROMPT KEYWORDS</p>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw) => (
              <span
                key={kw}
                className={`${style.badge} px-3 py-1 text-xs style-transition`}
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
