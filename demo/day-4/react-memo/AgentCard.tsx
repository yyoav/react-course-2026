import { memo } from 'react'
import type { Agent } from './AgentArena.constants'

interface AgentCardProps {
  agent: Agent
}

export function AgentCard(props: AgentCardProps) {
  const { agent } = props

  console.log('AgentCard Rendered:', agent.name)

  return (
    <article className="arena-agent-card">
      <div className="arena-agent-card-top">
        <div>
          <h3>{agent.name}</h3>
          <p className="arena-card-label">{agent.model}</p>
        </div>
      </div>
    </article>
  )
}

export const MemoizedAgentCard = memo(AgentCard)
