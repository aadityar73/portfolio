# Portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). No UI framework; the few interactive bits are plain JavaScript.

## Updating content

Almost everything you'll want to change is in **`src/data/site.ts`**. Search it for `TODO` to find every placeholder.

| What | Where |
| --- | --- |
| Name, bio, links, "Currently" list | `site` in `src/data/site.ts` |
| Your photo | put it in `public/` (e.g. `photo.png`), then set `photo: "/photo.png"` |
| Jobs / internships | `experience` |
| College / school | `education` |
| Projects | `projects` |
| Skills | `skills` |
| Company & institute logos | put the image in `public/logos/`, then set `logo: "/logos/<file>"` |
| Project screenshots | put the image in `public/projects/`, then set `image: "/projects/<file>"` |
| Resume | put `resume.pdf` in `public/`, then set `links.resume: "/resume.pdf"` |
| Link-preview image | 1200×630 PNG in `public/`, then set `ogImage` |
| Your real domain | `site` in `astro.config.mjs` |

Highlight words with the lime marker by wrapping them in double brackets: `"I like [[this part]]"`.

Logos look best as square PNG or SVG files. Without a logo, the initials are shown instead.

## Colours & fonts

Colours are defined once at the top of `src/styles/global.css`. Change `--accent` to re-colour the whole site.

Fonts: Instrument Serif (headings), Hanken Grotesk (body), Fragment Mono (small labels), all self-hosted.

## Running it

Requires Node.js 22.23.4 or newer (`.nvmrc` pins 24).

```sh
npm install      # first time only
npm run dev      # local preview at http://localhost:4321, reloads on save
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
```

## Hidden details

- Hover the wings in the footer.
- Visit any page that doesn't exist.
