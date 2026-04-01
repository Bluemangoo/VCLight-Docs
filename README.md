# VCLight Docs

Documentation site for the VCLight ecosystem.

- Live site: https://vclight.bluemangoo.net/
- Main project: https://github.com/Bluemangoo/VCLight

## Repository structure

- `pages/`: VitePress markdown content (English + Chinese)
- `.vitepress/`: site config, navigation, sidebar, theme customizations
- `code-src/`: VCLight source packages used as documentation reference

## Local development

Install dependencies:

```bash
pnpm install
```

Start the docs dev server:

```bash
pnpm run dev
```

Build static docs:

```bash
pnpm run build
```

Preview build output:

```bash
pnpm run preview
```

## Editing guidelines

- Keep docs aligned with current code in `code-src/packages/vclight` and `code-src/packages/router`
- Update both English (`pages/`) and Chinese (`pages/zh/`) when behavior or API changes
- If new sections are added, also update `.vitepress/locale/en.ts` and `.vitepress/locale/zh.ts`
