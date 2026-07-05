import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/podcast-navigator/solution',
  title: 'Podcast Navigator',
  description: 'Transform a static list into a multi-page app using React Router components and hooks.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'solution',
  order: 1,
}

export const EPISODES = [
  { id: '1', title: 'The Future of AI', host: 'Sarah Jenkins', description: 'Exploring the impact of large language models on software engineering.' },
  { id: '2', title: 'React 19 Deep Dive', host: 'Dan Abramov', description: 'Breaking down the newest features in the React ecosystem.' },
  { id: '3', title: 'Web Performance Secrets', host: 'Addy Osmani', description: 'Optimizing for Core Web Vitals and beyond.' },
]
