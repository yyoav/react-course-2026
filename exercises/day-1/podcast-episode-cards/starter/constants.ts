import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/podcast-episode-cards/starter',
  title: 'Podcast Episode Cards',
  description: 'Pass props and add local state to two episode cards.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'starter',
  order: 4,
}

export const starterTasks = [
  'Pass title and host props from the parent to each EpisodeCard.',
  'Add useState with an object { likeCount: 0, note: "" } inside EpisodeCard.',
  'Wire the Like button onClick to increment likeCount using spread.',
  'Wire the input onChange to update note using spread.',
  'Display likeCount and note as text in the marked spots.',
]
