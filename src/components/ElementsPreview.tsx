import type { StyleData } from '../types/style'

interface ElementsPreviewProps {
  style: StyleData
}

export default function ElementsPreview({ style }: ElementsPreviewProps) {
  return (
    <div className={`${style.card} p-6 style-transition`}>
      <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-4">Elements</h3>

      {/* Buttons */}
      <div className="space-y-3">
        <button className={`${style.button} w-full px-4 py-2.5 text-sm style-transition`}>
          ⏎ Primary Action
        </button>
        <button className={`${style.buttonSec} w-full px-4 py-2.5 text-sm text-center style-transition`}>
          Secondary Action
        </button>
      </div>

      {/* Badges */}
      <div className="flex gap-2 mt-4">
        <span className={`${style.badge} px-3 py-1 text-xs style-transition`}>
          Active
        </span>
        <span className="px-3 py-1 text-xs opacity-40 border border-current/20 rounded">
          Inactive
        </span>
      </div>
    </div>
  )
}
