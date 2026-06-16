import type { CourseTargetMeta } from '../../../src/course.ts'
import AgentArena from './AgentArena'

export const meta: CourseTargetMeta = {
  id: 'day-4/demo/use-callback',
  title: 'useCallback',
  description: 'Stabilize callback references so that React.memo children do not rerender unnecessarily.',
  dayOrder: 5,
  dayLabel: 'Day 4',
  kind: 'demo',
  variant: 'demo',
  order: 3,
}

export default AgentArena
