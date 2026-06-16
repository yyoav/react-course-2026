import { memo } from 'react'
import type { Agent } from './AgentArena.constants'

interface AgentCardProps {
  agent: Agent
  onTerminate: (id: string) => void
}

function AgentCard(props: AgentCardProps) {
  const { agent, onTerminate } = props

  console.log('AgentCard Rendered:', agent.name)

  return (
    <article className="arena-agent-card">
      <div className="arena-agent-card-top">
        <div>
          <h3>{agent.name}</h3>
          <p className="arena-card-label">{agent.model}</p>
        </div>
      </div>

      <button className="arena-terminate-button" type="button" onClick={() => onTerminate(agent.id)}>
        Terminate Agent
      </button>
    </article>
  )
}

export const MemoizedAgentCard = memo(AgentCard)
