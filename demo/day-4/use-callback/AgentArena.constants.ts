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
    summary: 'A fresh terminate handler is created on every render — this breaks React.memo.',
    filePath: 'demo/day-4/use-callback/AgentArena.tsx → unstableTerminateAgent',
    useStableHandler: false,
  },
  {
    id: 'solution',
    badge: 'B',
    title: 'Solution',
    summary: 'The terminate handler is stabilized with useCallback and a functional state update.',
    filePath: 'demo/day-4/use-callback/AgentArena.tsx → stableTerminateAgent',
    useStableHandler: true,
  },
]
