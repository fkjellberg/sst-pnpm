# Getting Started with Serverless Stack (SST)

This example is based on SST 2.19.0 and was created using the following command in a separate folder and then copied here:
```sh
% pnpm create sst rest-api
.../Library/pnpm/store/v3/tmp/dlx-44169  | +151 +++++++++++++++
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/fkjellberg/Library/pnpm/store/v3
  Virtual store is at:             ../../../../Library/pnpm/store/v3/tmp/dlx-44169/node_modules/.pnpm
.../Library/pnpm/store/v3/tmp/dlx-44169  | Progress: resolved 151, reused 149, downloaded 2, added 151, done
✔ Copied template files

Next steps:
- cd rest-api
- npm install (or pnpm install, or yarn)
- npm run dev
```

The `package.json` files have been updated to lock to a specific version of each dependency.

Install the dependencies.

```sh
% pnpm install
```

## Commands

### `pnpm run dev`

Starts the local Lambda development environment.

### `pnpm run build`

Build your app and synthesize your stacks.

Generates a `.build/` directory with the compiled files and a `.build/cdk.out/` directory with the synthesized CloudFormation stacks.

### `pnpm run deploy [stack]` or `pnpm sst deploy --stage <name> [stack]`

Deploy all your stacks to AWS. Or optionally deploy a specific stack.

### `pnpm run remove [stack]` or `pnpm run remove --stage <name> [stack]`

Remove all your stacks and all of their resources from AWS. Or optionally remove a specific stack.

## Documentation

Learn more about the Serverless Stack.

- [Docs](https://docs.serverless-stack.com)
- [@serverless-stack/cli](https://docs.serverless-stack.com/packages/cli)
- [@serverless-stack/resources](https://docs.serverless-stack.com/packages/resources)

## Community

[Follow us on Twitter](https://twitter.com/ServerlessStack) or [post on our forums](https://discourse.serverless-stack.com).
