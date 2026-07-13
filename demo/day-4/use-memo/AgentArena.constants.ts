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

/**
 * Find the Nth prime number using trial division.
 * Intentionally slow — takes noticeable time for large N.
 */
export function findNthPrime(n: number) {
  console.log(`🔢 Computing prime #${n}...`)

  let count = 0
  let candidate = 1

  while (count < n) {
    candidate++
    let isPrime = true
    for (let i = 2; i <= Math.sqrt(candidate); i++) {
      if (candidate % i === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) count++
  }

  return candidate
}

export const lessonStages = [
  {
    id: 'problem',
    badge: 'A',
    title: 'Problem',
    summary: "findNthPrime runs on every render (every 80ms!) even when agents haven't changed.",
    filePath: 'demo/day-4/use-memo/AgentArena.tsx → findNthPrime(primeIndex)',
    useMemoized: false,
  },
  {
    id: 'solution',
    badge: 'B',
    title: 'Solution',
    summary: 'findNthPrime is wrapped in useMemo — only recomputes when agents.length changes.',
    filePath: 'demo/day-4/use-memo/AgentArena.tsx → useMemo(() => findNthPrime(primeIndex))',
    useMemoized: true,
  },
]
