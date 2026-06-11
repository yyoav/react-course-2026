import { useState } from 'react'
import { meta } from './constants'
import Preview from './Preview'
import RemoteControl from './RemoteControl'
import Screen from './Screen'

export { meta }

export default function RemoteAndScreenSolution() {
  const [status, setStatus] = useState<'ON' | 'OFF'>('OFF')

  const handleToggle = () => {
    setStatus((currentStatus) => (currentStatus === 'OFF' ? 'ON' : 'OFF'))
  }

  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>The Remote and the Screen</h3>
        <div className="exercise-preview-shell">
          <div style={{ width: '300px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            <Screen status={status} />
            <RemoteControl onToggle={handleToggle} />
          </div>
        </div>
      </section>
    </div>
  )
}
