# Contributing

## Who belongs on this list

Women working in tech who are **active** (posting, shipping, or publishing within the last ~12 months) and have **visible public work**, for example:

- maintaining or contributing to open source
- writing technical blogs, papers or newsletters
- teaching, speaking, or making educational content
- founding or leading tech companies or teams
- building products in public

People are listed for what they build and share. Entries that comment on appearance, or that add someone who has asked not to be listed, will be removed. If you're on the list and want to be removed, open an issue or PR and we'll remove you, no questions asked.

## How to add someone

1. Add an object to `public/people.json`:

   ```json
   {
     "name": "Display Name",
     "handle": "xhandle",
     "url": "https://x.com/xhandle",
     "category": "FRONTEND_WEB",
     "bio": "One line about their work, e.g. maintainer of X, works on Y at Z",
     "tags": ["oss", "writer"],
     "recommended": false
   }
   ```

   - `category`: one of the ids in `public/categories.js`
   - `tags`: any of `oss`, `speaker`, `writer`, `builder`, `founder`, `teacher`, `thai`, `romanian` (only add a nationality tag with a public source)
   - `platform`: optional; set to `"linkedin"` when `url` is a LinkedIn profile (no X handle)
   - `bio`: keep it factual and about their work

2. Run `node scripts/build-readme.js` to regenerate `README.md`.
3. Open a PR with a short note or link that shows their work.
