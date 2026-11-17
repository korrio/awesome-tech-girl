# CLAUDE.md

Curated "awesome list" of outstanding, active women in tech.

## Source of truth

- `public/people.json` is the only place to add or edit entries.
- `README.md` is **generated**: run `node scripts/build-readme.js` after editing the JSON. Never edit README.md by hand.
- `public/categories.js` defines categories and tags, shared by the README builder and `public/index.html`.

## Site

- `public/index.html` is a static page that fetches `people.json` and renders searchable cards. No build step.
- Hosted on Firebase (`firebase.json`). Deploy with `firebase deploy`.

## Content rules

Entries are listed for their public work (open source, writing, teaching, founding, building). Keep bios factual and about their work; never comment on appearance.
