import type { CourseTargetMeta } from '../../../src/course.ts'
import AgentArena from './AgentArena'

export const meta: CourseTargetMeta = {
  id: 'day-4/demo/use-memo',
  title: 'useMemo',
  description: 'Memoize expensive computations so they only rerun when their dependencies change.',
  dayOrder: 5,
  dayLabel: 'Day 4',
  kind: 'demo',
  variant: 'demo',
  order: 4,
}

export default AgentArena
