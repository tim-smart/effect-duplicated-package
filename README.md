Run `pnpm i && turbo run build --force` and you will see it builds fine.

To get the build to break, do the following:

1. Go to `packages/user` and remove `@effect/sql-pg` from its `package.json`
2. Run `pnpm i && turbo clean && turbo run build --force`

You should see it fail