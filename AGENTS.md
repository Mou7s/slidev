# Repository Guidelines

## Project Structure & Module Organization

- `slides.md`: primary deck content; uses Slidev Markdown with frontmatter for global settings.
- `pages/imported-slides.md`: optional secondary deck; keep synced with main deck naming and metadata.
- `components/` and `snippets/`: reusable Vue 3 slide components, code snippets, and macros; prefer composition over duplication.
- `public/`: static assets (images, fonts) served at root paths; reference with absolute URLs.
- Build output defaults to `dist/` after `pnpm build`; clean up unused assets to keep exports lean.

## Build, Test, and Development Commands

- `pnpm install`: install dependencies; run after pulling.
- `pnpm dev`: start Slidev with hot reload at `http://localhost:3030`; use for authoring and review.
- `pnpm build`: generate static output in `dist/`; confirm it loads locally before publishing.
- `pnpm export`: export the deck (PDF by default); ensure animations and fonts render correctly.

## Coding Style & Naming Conventions

- Use Prettier (root config + `prettier-plugin-slidev`); format Markdown/Vue with 2-space indentation.
- Favor script setup Vue components; name components in `PascalCase.vue` and snippets in `kebab-case`.
- Keep slide IDs/headings concise; prefer lowercase dashed filenames for additional decks.
- Run formatting with `pnpm dlx prettier --write slides.md pages components snippets`.

## Testing & Verification

- No automated test suite; validate manually via `pnpm dev` (navigation, code blocks, embedded components).
- After edits, run `pnpm build` to catch packaging issues and verify assets resolve in `dist/`.
- For exports, run `pnpm export` and open the generated PDF to confirm layout and fonts.

## Commit & Pull Request Guidelines

- Commits: short imperative subject (e.g., `Update intro slides`, `Add chart component`); group related slide changes together.
- Include brief body when adjusting deck behavior or assets; reference issue IDs when applicable.
- PRs: describe scope, entry points (e.g., `slides.md`, `components/Foo.vue`), manual checks run (`pnpm dev/build/export`), and attach screenshots or PDF snippets for visual changes.

## Security & Configuration Tips

- Avoid embedding secrets in slides or `public/`; use placeholders for demos.
- Check font licensing before adding to `public/` or exported decks.

## Others

- 用简体中文
