import { useCallback, useEffect, useState } from 'react'
import { MemoizedAgentCard } from './AgentCard'
import { createInitialAgents, lessonStages } from './AgentArena.constants'
import type { Agent } from './AgentArena.constants'
import { TeachingSwitchesOverlay } from '../shared/TeachingSwitchesOverlay'
import './AgentArena.css'

export default function AgentArena() {
  const [selectedStageId, setSelectedStageId] = useState(lessonStages[0].id)
  const [totalTokens, setTotalTokens] = useState(182400)
  const [agents, setAgents] = useState<Agent[]>(() => createInitialAgents())

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
    setAgents(createInitialAgents())
  }, [])

  // Solution: stable reference via useCallback + functional state update
  const stableTerminateAgent = useCallback((agentId: string) => {
    setAgents((current) => current.filter((agent) => agent.id !== agentId))
  }, [])

  // Problem: inline function recreated every render — new reference breaks memo
  const unstableTerminateAgent = (agentId: string) => {
    setAgents((current) => current.filter((agent) => agent.id !== agentId))
  }

  const terminateAgent = selectedStage.useStableHandler
    ? stableTerminateAgent
    : unstableTerminateAgent

  return (
    <div className="arena-shell">
      <section className="arena-hero-card">
        <div className="arena-hero-layout">
          <div className="arena-hero-copy-block">
            <h2>useCallback</h2>
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
              <MemoizedAgentCard
                key={agent.id}
                agent={agent}
                onTerminate={terminateAgent}
              />
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
