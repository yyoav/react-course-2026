import { memo, useState } from 'react'
import './TeachingSwitchesOverlay.css'

export interface LessonStage {
  id: string
  badge: string
  title: string
  summary: string
  filePath?: string
}

interface TeachingSwitchesOverlayProps {
  stages: LessonStage[]
  selectedStageId: string
  onStageSelect: (stageId: string) => void
}

export const TeachingSwitchesOverlay = memo(function TeachingSwitchesOverlay(props: TeachingSwitchesOverlayProps) {
  const { stages, selectedStageId, onStageSelect } = props
  const [visible, setVisible] = useState(true)

  const selectedStage = stages.find((s) => s.id === selectedStageId) ?? stages[0]

  return (
    <div className="arena-overlay-wrapper">
      <button
        className="arena-toggle-overlay-button"
        type="button"
        onClick={() => setVisible((v) => !v)}
        title={visible ? 'Hide Teaching Switches' : 'Show Teaching Switches'}
      >
        {visible ? '✕' : '☰'}
      </button>

      {visible && (
        <aside className="arena-stage-dock">
          <div className="arena-stage-dock-header">
            <p className="arena-kicker">Teaching switches</p>
            <h3>Problem vs Solution</h3>
            <p>{selectedStage.summary}</p>
            {selectedStage.filePath && (
              <p className="arena-stage-file-path"><code>{selectedStage.filePath}</code></p>
            )}
          </div>

          <div className="arena-stage-switcher" role="tablist" aria-label="Toggle between problem and solution">
            {stages.map((stage) => (
              <button
                key={stage.id}
                className={stage.id === selectedStageId ? 'arena-stage-button arena-stage-button-active' : 'arena-stage-button'}
                type="button"
                onClick={() => onStageSelect(stage.id)}
              >
                <span>{stage.badge}</span>
                <strong>{stage.title}</strong>
              </button>
            ))}
          </div>
        </aside>
      )}
    </div>
  )
})
