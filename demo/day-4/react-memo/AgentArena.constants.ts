export interface Agent {
  id: string
  name: string
  model: string
}

export function createInitialAgents(): Agent[] {
  const roles = ['Scout', 'Router', 'Strategist']
  const models = ['GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.0 Pro']

  return roles.map((role, index) => ({
    id: `agent-${index + 1}`,
    name: `${role} Agent (node-${index + 1})`,
    model: models[index % models.length],
  }))
}

export const lessonStages = [
  {
    id: 'problem',
    badge: 'A',
    title: 'Problem',
    summary: 'AgentCard is a normal component — every token tick rerenders all 3 cards.',
    useMemoCard: false,
  },
  {
    id: 'solution',
    badge: 'B',
    title: 'Solution',
    summary: 'AgentCard is wrapped with React.memo — unchanged cards skip rerendering.',
    useMemoCard: true,
  },
]
