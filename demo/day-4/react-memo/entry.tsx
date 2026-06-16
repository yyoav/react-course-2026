import type { CourseTargetMeta } from '../../../src/course.ts'
import AgentArena from './AgentArena'

export const meta: CourseTargetMeta = {
  id: 'day-4/demo/react-memo',
  title: 'React.memo',
  description: 'Prevent unnecessary rerenders by memoizing components whose props have not changed.',
  dayOrder: 5,
  dayLabel: 'Day 4',
  kind: 'demo',
  variant: 'demo',
  order: 2,
}

export default AgentArena
