Use these instructions for general coding work in this repository.

1. Use `props` instead of `_props` for React component parameters. If the parameter is unused, prefer `props` unless the parameter should be removed entirely.
2. Put each new exported function component in its own file by default.
3. Keep tiny private helper components in the same file only when they are tightly coupled to a single parent and unlikely to be reused.
4. Match the filename to the exported component name.
5. When extracting a new component, move its props type with it unless that type is shared across multiple files.
6. Preserve starter-exercise scaffolding and TODO comments unless the user explicitly asks to complete the exercise.
7. Avoid creating extra wrapper components or folders for very small teaching examples.
8. Prefer clear domain-specific prop names over generic names like `data`, `item`, or `value` when the domain is known.
9. If a component only exists to render one repeated UI block, consider extracting it. If it only adds indirection, keep it local.
10. For React examples in this repo, favor simple readable components over abstraction-heavy patterns.
11. Prefer `px` units in CSS for sizing, spacing, and typography unless a different unit is clearly required.
12. When the page shell already shows the exercise title and current variant, do not repeat that title or the Starter/Solution label inside preview cards; show the file path and Todo or Completed content directly.
13. In exercise starter and solution preview cards, show the relevant `entry.tsx` path so students know which file to edit or review.