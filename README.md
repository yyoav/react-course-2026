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

- `day-1/demo/vite-basics`
- `day-1/exercises/build-product-card/starter`
- `day-1/exercises/build-product-card/solution`

## Build

```bash
npm run build
```
