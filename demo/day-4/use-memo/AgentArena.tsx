import { useCallback, useEffect, useMemo, useState } from 'react'
import { MemoizedAgentCard } from './AgentCard'
import {
  createInitialAgents,
  findNthPrime,
  lessonStages,
} from './AgentArena.constants'
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

  const terminateAgent = useCallback((agentId: string) => {
    setAgents((current) => current.filter((agent) => agent.id !== agentId))
  }, [])

  // N scales with agent count — 3 agents → prime #150000
  const primeIndex = agents.length * 50000

  // Solution: memoized — only recomputes when agents.length changes
  const memoizedPrime = useMemo(() => findNthPrime(primeIndex), [primeIndex])

  // Problem: recalculates on every render (every 80ms!)
  const prime = selectedStage.useMemoized ? memoizedPrime : findNthPrime(primeIndex)

  return (
    <div className="arena-shell">
      <section className="arena-hero-card">
        <div className="arena-hero-layout">
          <div className="arena-hero-copy-block">
            <h2>useMemo</h2>
            <p className="arena-token-counter">Tokens: <strong>{totalTokens.toLocaleString()}</strong></p>
            <p className="arena-token-counter">Prime #{primeIndex.toLocaleString()}: <strong>{prime.toLocaleString()}</strong></p>
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
