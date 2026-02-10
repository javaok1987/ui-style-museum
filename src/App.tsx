import { useState } from 'react'
import stylesData from '../styles.json'
import type { StyleData, StylesMap } from './types/style'
import Header from './components/Header'
import PromptSection from './components/PromptSection'
import StyleInfo from './components/StyleInfo'
import StatCards from './components/StatCards'
import ElementsPreview from './components/ElementsPreview'
import ProjectDashboard from './components/ProjectDashboard'

const styles = stylesData as StylesMap
const styleKeys = Object.keys(styles)

function App() {
  const [selectedKey, setSelectedKey] = useState<string>(styleKeys[0])
  const style: StyleData = styles[selectedKey]

  return (
    <div className={`min-h-screen ${style.bg} ${style.text} ${style.font} style-transition`}>
      {/* Header */}
      <Header
        styleKeys={styleKeys}
        styles={styles}
        selectedKey={selectedKey}
        onSelect={setSelectedKey}
        style={style}
      />

      {/* Main Content */}
      <main className="max-w-[960px] mx-auto px-6 pb-12">
        {/* AI Prompt */}
        <PromptSection style={style} />

        {/* Grid: Left = StyleInfo + Elements, Right = Stats + Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 mt-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <StyleInfo style={style} />
            <ElementsPreview style={style} />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <StatCards style={style} />
            <ProjectDashboard style={style} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
