---
name: add-event-images
description: Add or fix verified Wikimedia Commons images on Chronicon timeline events, with bilingual alt text. Use when asked to add images or illustrations to a section or period, or to fix broken images reported by `npm run check:images`.
---

# Add or fix event images

Images must be real Wikimedia Commons files that you have looked at. Never
guess a file name: a plausible-looking name that doesn't exist becomes a
broken image in both apps.

## 1. Choose the events

- Pull first: `git pull origin develop`.
- Pick events that are genuinely iconic and likely to have a good image
  (battles, rulers, monuments, key documents, maps). Recent commits add
  about 7–9 images per section.
- At most one image per event. Skip events that already have one, unless
  fixing a broken image.
- To fix broken images, run `npm run check:images`: it lists each one by
  section, period, year, and event index.

## 2. Find candidates

```bash
npm run check:images -- --search "Battle of Legnano painting"
```

This searches Commons files and prints, for each match: size, type, Commons
page, a preview URL, and the ready-to-use `src`. Try a few phrasings (the
artist's name, the monument, "map", the language of the place). Prefer:

- paintings, contemporary artefacts, photos of the actual site or object, or
  historical maps;
- JPG/PNG at least ~800px wide, or SVG for maps;
- no watermarks, collages, or modern fan art.

To check a specific name or URL you already have:

```bash
npm run check:images -- "File name.jpg"
```

## 3. Look at the image

Search results are not enough; confirm what the image actually shows.
Download the preview into your scratchpad directory and open it with the
Read tool:

```bash
curl -sS -A "chronicon-config (https://github.com/ViktorSpyrantis/chronicon-config)" \
  -o <scratchpad>/preview.jpg "<preview URL>"
```

Reject it if it doesn't clearly show the event, person, or place.

## 4. Add it

Use the `src` printed by the script:

```ts
image: {
  src: "https://commons.wikimedia.org/wiki/Special:FilePath/<File_name.jpg>?width=1024",
  alt: {
    en: "…",
    el: "…",
  },
  credit: "Via Wikimedia Commons",
},
```

Alt text describes what the image shows ("Jacques-Louis David's painting of
Leonidas and his Spartans before the battle", "Map of Italy in 1559"), not just
the event name, and the Greek is a real translation.

## 5. Validate

```bash
npm run typecheck
npm run validate
npm run check:images
```

All three must pass, and `check:images` must report no broken images for the
events you touched.

## 6. Commit

Commit on `develop` naming the section, e.g. "Add verified images to Italian
History events", and say in the body how the images were verified. Then push.
