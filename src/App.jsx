import { useState } from 'react'
import UnitConverter from './components/UnitConverter'
import IngredientSubstitutions from './components/IngredientSubstitutions'
import TemperatureConverter from './components/TemperatureConverter'
import './App.css'

const sections = [
  { id: 'unit-converter', label: 'Conversor de Unidades', icon: '🥣' },
  { id: 'substitutions', label: 'Sustituciones', icon: '🔄' },
  { id: 'temperature', label: 'Temperatura', icon: '🌡️' }
]

function App() {
  const [activeTab, setActiveTab] = useState('unit-converter')

  const renderContent = () => {
    switch (activeTab) {
      case 'unit-converter':
        return <UnitConverter />
      case 'substitutions':
        return <IngredientSubstitutions />
      case 'temperature':
        return <TemperatureConverter />
      default:
        return <UnitConverter />
    }
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>Natadulce</h1>
        <p>Te amo, cosa</p>
      </header>

      <nav className="app__sidebar">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`app__nav-item ${activeTab === section.id ? 'app__nav-item--active' : ''}`}
            onClick={() => setActiveTab(section.id)}
            aria-current={activeTab === section.id ? 'page' : undefined}
          >
            <span className="app__nav-icon">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </nav>

      <main className="app__content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
