# Day 3 Exercises

## Morning: React Router Basics

### Podcast Navigator

**File to edit:** [podcast-navigator/starter/entry.tsx](podcast-navigator/starter/entry.tsx)

Transform a static podcast list into a multi-page app using React Router components and hooks.

**Tasks:**

1. **`entry.tsx`** — Add a `<Routes>` block inside the `<MemoryRouter>` with:
   - A route for the list page at `/`
   - A route for the details page at `/episode/:id`

2. **`PodcastList.tsx`** — Import `Link` from `react-router-dom` and wrap each `EpisodeCard` so clicking it navigates to `/episode/:id`.

3. **`EpisodeDetails.tsx`** — Import `useParams` and use it to read the episode `id` from the URL.

4. **`EpisodeDetails.tsx`** — Replace the plain `<a href="/">` anchor tags with `<Link to="/">` so navigation stays inside the router.

> **Note:** This exercise uses `<MemoryRouter>` instead of `<BrowserRouter>` because the course runner already uses the real browser URL for navigation. In a real app you would use `<BrowserRouter>`.
