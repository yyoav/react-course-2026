import { meta } from './constants'
import Preview from './Preview'

export { meta }

type ScreenProps = {
  status: string
}

type RemoteControlProps = {
  onToggle: () => void
}

function Screen(_props: ScreenProps) {
  return (
    <div style={{ border: '2px solid black', padding: '20px', marginBottom: '10px', textAlign: 'center' }}>
      <h2>TV Screen</h2>
      <h1>TODO</h1>
    </div>
  )
}

function RemoteControl(_props: RemoteControlProps) {
  return (
    <div style={{ border: '2px dashed gray', padding: '20px', textAlign: 'center' }}>
      <h3>Remote Control</h3>
      <button type="button">Power Toggle</button>
    </div>
  )
}

export default function RemoteAndScreenStarter() {
  const status = 'OFF'

  const handleToggle = () => {
    // TODO: Replace this placeholder with a real state update in App.
  }

  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>The Remote and the Screen</h3>
        <div className="exercise-preview-shell">
          <div style={{ width: '300px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            {/* TODO: Render Screen with the current status. */}
            <Screen status={status} />

            {/* TODO: Render RemoteControl with the toggle callback. */}
            <RemoteControl onToggle={handleToggle} />
          </div>
        </div>
      </section>
    </div>
  )
}
