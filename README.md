# Netlify Bobs issue with Turborepo

Netlify build fails when using the [@netlify/blobs](https://github.com/netlify/blobs) package in a monorepo setup with [Turborepo](https://turbo.build/repo).

> Netlify blobs is currently, as of version 7.0.1, in Beta. So, it is understandble that it might not work with all setups.

## The issue

When using the `@netlify/blobs` package in a monorepo setup with Turborepo, the build (deploy to Netlify) fails with the following error:

```bash
9:14:55 AM: Packaging Edge Functions from apps/web-blob-hoisted/netlify/edge-functions directory:
9:14:55 AM:  - get-blob-data
9:14:56 AM: Failed during stage "building site": Build script returned non-zero exit code: 2
9:14:56 AM: ✘ [ERROR] Could not resolve "@netlify/blobs"
9:14:56 AM:     ../../../tmp/tmp-5466-8dBcPDS61CTp/bundled-netlify__blobs.js:1:21:
9:14:56 AM:       1 │ import * as mod from "@netlify/blobs"; export default mod.default; ...
9:14:56 AM:         ╵                      ~~~~~~~~~~~~~~~~
9:14:56 AM:   You can mark the path "@netlify/blobs" as external to exclude it from the bundle, which will remove this error and leave the unresolved path in the bundle.
```

## Possible solution

The issue is that the `@netlify/blobs` package is not being resolved correctly. This is because the package is not being hoisted to the root `node_modules` directory.

Ways to solve this issue:

1. Bundle the `@netlify/blobs` package with the build. See: [web-blob-bundled](apps/web-blob-bundled)
2. Install the `@netlify/blobs` package in the root `node_modules` directory. See: [web-blob-hoisted](apps/web-blob-hoisted)
