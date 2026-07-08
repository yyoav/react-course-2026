# react-course-2026

React course slides and runnable workshop code.

## Course runner

This repository now has one root Vite React TypeScript app that can run demos and exercises from every day folder.

### Install

```bash
npm install
```

### Run the launcher

```bash
npm run course
```

The default launcher lives at `/`, for example `http://localhost:5173/` during local development.

### Run a single target directly

```bash
npm run course -- day-1/demo/vite-basics
npm run course -- day-1/exercises/build-product-card/starter
npm run course -- day-1/exercises/build-product-card/solution
npm run course -- day-2/exercises/fetch-and-render-a-list/solution
```

## Folder convention

Presentations stay under `presentation/`, but runnable targets now live in root-level `demo/` and `exercises/` folders:

```text
demo/
	day-x/
		some-demo-title/
			entry.tsx

exercises/
	day-x/
		some-exercise-title/
			starter/
				entry.tsx
			solution/
				entry.tsx

presentation/
	Day X/
		index.html
```

The launcher groups content by day and shows:

- a presentation link when that day already has `index.html`
- a demos section with direct links to each demo target
- an exercises section with direct links to starter and solution targets

## Target contract

Every runnable target exports:

1. `meta`: identifies the day, title, kind, variant, and launcher id
2. `default`: the React component rendered by the root course app

Example:

```tsx
import type { CourseTargetMeta } from '../../../src/course.ts'

export const meta: CourseTargetMeta = {
	id: 'day-1/demo/example',
	title: 'Example',
	dayOrder: 1,
	dayLabel: 'Day 1',
	kind: 'demo',
	variant: 'demo',
	order: 1,
}

export default function Example() {
	return <div>Demo content</div>
}
```

## Current seeded targets

### Day 1
- `day-1/demo/product-counter`
- `day-1/exercises/build-product-card/starter`
- `day-1/exercises/build-product-card/solution`
- `day-1/exercises/build-product-card-with-prop/starter`
- `day-1/exercises/build-product-card-with-prop/solution`
- `day-1/exercises/podcast-episode-cards/starter`
- `day-1/exercises/podcast-episode-cards/solution`

### Day 2
- `day-2/exercises/fetch-and-render-a-list/starter`
- `day-2/exercises/fetch-and-render-a-list/solution`
- `day-2/exercises/starwars-characters/starter`
- `day-2/exercises/starwars-characters/solution`
- `day-2/exercises/task-list/starter`
- `day-2/exercises/task-list/solution`

### Day 3
- `day-3/exercises/podcast-navigator/starter`
- `day-3/exercises/podcast-navigator/solution`
- `day-3-part-2/exercises/zustand-counter/starter`
- `day-3-part-2/exercises/zustand-counter/solution`

### Day 4
- `day-4/demo/react-memo`
- `day-4/demo/use-memo`
- `day-4/demo/use-callback`
- `day-4/exercises/filtered-analytics-summary/starter`
- `day-4/exercises/filtered-analytics-summary/solution`
- `day-4/exercises/stable-product-rows/starter`
- `day-4/exercises/stable-product-rows/solution`

## Build

```bash
npm run build
```
