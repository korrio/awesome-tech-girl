#!/usr/bin/env node
// Regenerates README.md from public/people.json so the two never drift.
// Usage: node scripts/build-readme.js
const fs = require("fs");
const path = require("path");
const { CATEGORIES, TAGS } = require("../public/categories");

const root = path.join(__dirname, "..");
const people = JSON.parse(fs.readFileSync(path.join(root, "public/people.json"), "utf8"));

const ids = new Set(CATEGORIES.map((c) => c.id));
for (const p of people) {
  if (!p.handle || !p.url) throw new Error(`Entry missing handle/url: ${JSON.stringify(p)}`);
  if (!ids.has(p.category)) throw new Error(`Unknown category "${p.category}" for ${p.handle}`);
  for (const t of p.tags || []) if (!TAGS[t]) throw new Error(`Unknown tag "${t}" for ${p.handle}`);
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9 -]/g, "").trim().replace(/\s+/g, "-");

const line = (p) => {
  const label = p.platform === "linkedin" ? "LinkedIn" : `@${p.handle}`;
  let s = `- **${p.name}** - [${label}](${p.url})`;
  if (p.bio) s += ` - ${p.bio}`;
  const tags = (p.tags || []).map((t) => TAGS[t]);
  if (tags.length) s += ` · ${tags.join(" · ")}`;
  if (p.recommended) s += " :star:";
  return s;
};

const used = CATEGORIES.filter((c) => people.some((p) => p.category === c.id));

let md = `# Awesome Tech Girls [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of outstanding, active women in the tech industry — engineers, researchers, founders, designers and educators worth following and learning from.

_X profiles last checked for existence and recent activity on 2026-11-17._

Inclusion is based on **public work**: shipping, open source, writing, teaching, speaking or building in public. Not on looks or follower count.

## Legend

${Object.values(TAGS).map((t) => `- ${t}`).join("\n")}
- :star: Highly recommended follow

## Contents

${used.map((c) => `- [${c.title}](#${slug(c.title)})`).join("\n")}

`;

for (const c of used) {
  const list = people
    .filter((p) => p.category === c.id)
    .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
  md += `## ${c.title}\n\n${list.map(line).join("\n")}\n\n`;
}

md += `## Contributing

Contributions welcome! Read [CONTRIBUTING.md](CONTRIBUTING.md), add an entry to \`public/people.json\`, then run \`node scripts/build-readme.js\`.

<!-- This file is generated from public/people.json. Do not edit by hand. -->
`;

fs.writeFileSync(path.join(root, "README.md"), md);
console.log(`README.md written: ${people.length} people in ${used.length} categories`);
