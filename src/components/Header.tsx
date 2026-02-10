import type { StyleData, StylesMap } from '../types/style'

interface HeaderProps {
  styleKeys: string[]
  styles: StylesMap
  selectedKey: string
  onSelect: (key: string) => void
  style: StyleData
}

export default function Header({ styleKeys, styles, selectedKey, onSelect, style }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-[960px] mx-auto">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl ${style.button} flex items-center justify-center style-transition`}>
          <span className="text-lg">🎨</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight">UI Style Museum</h1>
      </div>

      {/* Style Selector */}
      <div className="flex items-center gap-3">
        <span className="text-sm opacity-70">Select Style:</span>
        <select
          value={selectedKey}
          onChange={(e) => onSelect(e.target.value)}
          className={`${style.input} px-4 py-2 text-sm min-w-[200px] cursor-pointer style-transition`}
        >
          {styleKeys.map((key) => (
            <option key={key} value={key}>
              {styles[key].name}
            </option>
          ))}
        </select>
      </div>
    </header>
  )
}
