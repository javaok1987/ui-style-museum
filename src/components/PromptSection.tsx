import { useState } from 'react'
import type { StyleData } from '../types/style'

interface PromptSectionProps {
  style: StyleData
}

export default function PromptSection({ style }: PromptSectionProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(style.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = style.prompt
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className={`${style.card} p-5 style-transition`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs font-semibold opacity-60 mb-2 tracking-wide uppercase">
            ✨ AI PROMPT / 詠唱文
          </p>
          <p className="text-sm leading-relaxed opacity-90" style={{ fontFamily: 'monospace' }}>
            {style.prompt}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className={`${style.buttonSec} px-4 py-2 text-sm flex items-center gap-2 shrink-0 style-transition`}
        >
          {copied ? '✓ Copied!' : '📋 Copy Prompt'}
        </button>
      </div>
    </div>
  )
}
