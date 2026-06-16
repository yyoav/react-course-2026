import { useCallback, useEffect, useState } from 'react'
import { AgentCard, MemoizedAgentCard } from './AgentCard'
import { createInitialAgents, lessonStages } from './AgentArena.constants'
import { TeachingSwitchesOverlay } from '../shared/TeachingSwitchesOverlay'
import './AgentArena.css'

export default function AgentArena() {
  const [selectedStageId, setSelectedStageId] = useState(lessonStages[0].id)
  const [totalTokens, setTotalTokens] = useState(182400)
  const [agents] = useState(() => createInitialAgents())

  const selectedStage = lessonStages.find((s) => s.id === selectedStageId) ?? lessonStages[0]

  // Token ticker: forces parent to rerender every 80ms
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTotalTokens((current) => current + 320 + Math.floor(Math.random() * 880))
    }, 80)
    return () => window.clearInterval(intervalId)
  }, [])

  const handleStageSelect = useCallback((stageId: string) => {
    setSelectedStageId(stageId)
  }, [])

  // Toggle between normal AgentCard and memoized version
  const AgentCardComponent = selectedStage.useMemoCard ? MemoizedAgentCard : AgentCard

  return (
    <div className="arena-shell">
      <section className="arena-hero-card">
        <div className="arena-hero-layout">
          <div className="arena-hero-copy-block">
            <h2>React.memo</h2>
            <p className="arena-token-counter">Tokens: <strong>{totalTokens.toLocaleString()}</strong></p>
          </div>

          <TeachingSwitchesOverlay
            stages={lessonStages}
            selectedStageId={selectedStageId}
            onStageSelect={handleStageSelect}
          />
        </div>
      </section>

      <section className="arena-main-grid">
        <article className="arena-agent-panel">
          <div className="arena-panel-heading">
            <h3>Agent grid</h3>
            <span>{agents.length} visible</span>
          </div>

          <div className="arena-agent-grid">
            {agents.map((agent) => (
              <AgentCardComponent key={agent.id} agent={agent} />
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
