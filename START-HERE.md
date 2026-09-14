# BylawIQ — source code package

Complete editable source for the BylawIQ marketing website.
Exported from source revision: e93c2c0e8856de59a9a9f0f04ce956f85103ad5e

## Included

- 31 pages: homepage, platform overview and six feature pages, four audience pages,
  company, trust, partners, implementation, pricing, enquiries, resources, and more.
- Responsive desktop mega menus and mobile navigation.
- Tabs, scroll and hover motion, resource search/filtering, and FAQs.
- Illustrative product demo with expandable evidence and sample-answer download.
- Enquiry endpoint, validation, Cloudflare D1 schema, and migration.
- Local photographs, fonts, attribution notes, components, and dependency lockfile.

No installed dependencies, Git history, build output, credentials, or enquiry data
are included. The live website has not been changed by this export.

## Quick start

Requirements: Node.js 22.13.0 or later and pnpm 11.25.0, as pinned in package.json.
Use the supplied pnpm lockfile.

```sh
cd bylawiq
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed in the terminal. A clean checkout defaults to the
portable execution profile; no ChatGPT plugin is required to run the code locally.

## Build

```sh
pnpm build
```

The project uses React, TypeScript, Vinext/Vite, Tailwind CSS, and Cloudflare Workers.
It follows Next.js-style app routes, but the server is built for Cloudflare Workers.
This is not a plain static HTML export or an unmodified Next.js/Vercel project.

## Enable local enquiry storage

The marketing pages and demo can be explored without populating a database.
To test enquiry saving, build once, then apply the included migration to a fresh
local D1 database:

```sh
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_rapid_jigsaw.sql
```

Apply that migration only once to the same local database. Then use `pnpm dev`,
or run `pnpm start` to serve the built Worker locally.

Forms save requests in the private `enquiries` table through `/api/enquiries`.
They do not send emails, book calendar meetings, or expose a public enquiry list.
The interactive product demo uses prepared responses and fictional building data;
it does not use a live AI service or ingest legal sources.

## Main editable files

| File | Purpose |
| --- | --- |
| app/globals.css | Fonts, colours, layout, responsive rules, and motion |
| components/site-pages.tsx | All marketing page compositions |
| components/site-ui.tsx | Navigation, footer, tabs, forms, and interactive demo |
| lib/content.ts | Product, audience, resource, and FAQ copy |
| app/[...slug]/page.tsx | Secondary route mapping and page metadata |
| app/api/enquiries/route.ts | Enquiry submission endpoint |
| lib/enquiries.ts | Server-side form validation |
| db/schema.ts and drizzle/ | Database schema and migration |
| public/images/ and public/fonts/ | Local visual assets |

## Deployment and asset notes

The `.openai/hosting.json` file retains the existing Site identity and logical DB
binding. Do not reuse that identity for an unrelated deployment. Moving to another
hosting provider requires its Cloudflare Worker/database configuration or an
appropriate adaptation of the server layer.

Photographs are placeholders and do not imply endorsement. See ASSET-SOURCES.md
and the website's Image Credits page. The included Teodor and Messina fonts match
the reference site; confirm your own font licensing before public/commercial use.

The original starter README remains included for further runtime details.
