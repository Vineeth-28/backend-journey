# TypeScript Configuration

A shared, beginner/backend-friendly `tsconfig.json` used as the reference config across the Day 26–30 TypeScript learning material.

## What this config does

- **Modern JS output** — compiles to `ES2020`, a version every current Node.js LTS release supports natively.
- **Node.js-style modules** — `"module": "commonjs"` matches how a typical Node.js backend project resolves `require`/`import`.
- **Strict type checking** — `"strict": true` turns on TypeScript's full safety net (no implicit `any`, mandatory null/undefined handling, and more). This is intentional: strict mode is the standard for real backend projects, and it's better to learn with it on from day one.
- **Source/output separation** — source files live in `src/`, compiled output goes to `dist/`, keeping hand-written code cleanly separated from generated files.
- **Extra hygiene checks** — unused variables/parameters and accidental `switch` fallthrough are flagged, which catches small mistakes early.

## How to use it in a day's folder

Each `day-XX/` folder can be compiled independently by pointing `tsc` at this shared config, or by copying this file in and adjusting `rootDir`/`include` to match that day's flat file layout (since the day folders don't use a `src/` subfolder).

For the day folders specifically (flat `.ts` files, no `src/`), the simplest approach is:

```bash
cd day-26
npx tsc --strict --noEmit *.ts   # type-check every file, no output written
```

If you want actual compiled `.js` output using this shared config's conventions, copy the day's files into a `src/` folder first, or adjust `rootDir` to `"."` and `include` to `["*.ts"]` for that folder.

## Keeping it simple

This config deliberately avoids advanced options (path aliases, project references, decorators, etc.) — the goal at this stage is understanding core compiler behavior, not build-system complexity.
