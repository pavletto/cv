# Pavel Sukhodolskii’s résumé

The résumé content is in `src/data/CV.ts`.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). To preview the static production export, run `npm run build` and then `npm start`. The export, including the sitemap and robots file, is written to `out/`.

The production site URL defaults to `https://sukhodolskii.com`. Set `NEXT_PUBLIC_SITE_URL` to override it. If hosting under a subpath, set `NEXT_PUBLIC_BASE_PATH` and include that subpath in any site URL override. Analytics and Google site verification are enabled by setting `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_GOOGLE_VERIFICATION`, respectively.
