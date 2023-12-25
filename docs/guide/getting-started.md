# Getting Started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.

#### In production

In production the latest release can be installed from the **main** branch on github.
::: code-group

```sh [npm]
$ npm add -D https://github.com/aristidelegba/shopinzen-analytics
```

```sh [pnpm]
$ pnpm add -D https://github.com/aristidelegba/shopinzen-analytics
```

```sh [yarn]
$ yarn add -D https://github.com/aristidelegba/shopinzen-analytics
```

:::

You can also add it directly to your package json and run npm i (or yarn install)

```json
{
  ...
  "dependencies": {
    ....
    "shopinzen-analytics": "https://github.com/aristidelegba/shopinzen-analytics#semver:0.0.1",
    ...
  }
}
```

#### Use locally(developpement/ debugging purposes)

First you need to clone the github repository

```sh [npm]
$ git clone https://github.com/aristidelegba/shopinzen-analytics
```

Then you can install it using the path to the directory where you have cloned the source code of Shopinzen analytics client.

::: code-group

```sh [npm]
$ npm add /path/to/the/source/code/on/my/machine
```

```sh [pnpm]
$ pnpm add /path/to/the/source/code/on/my/machine
```

```sh [yarn]
$ yarn add /path/to/the/source/code/on/my/machine
```

:::

```json
{
  ...
  "dependencies": {
    ....
    "shopinzen-analytics": "link:../shopinzen-analytics",
    ...
  }
}
```

::: tip NOTE

VitePress is an ESM-only package. Don't use `require()` to import it, and make sure your nearest `package.json` contains `"type": "module"`, or change the file extension of your relevant files like `.vitepress/config.js` to `.mjs`/`.mts`. Refer to [Vite's troubleshooting guide](http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only) for more details. Also, inside async CJS contexts, you can use `await import('vitepress')` instead.

:::

## File Structure

If you are building a standalone VitePress site, you can scaffold the site in your current directory (`./`). However, if you are installing VitePress in an existing project alongside other source code, it is recommended to scaffold the site in a nested directory (e.g. `./docs`) so that it is separate from the rest of the project.

Assuming you chose to scaffold the VitePress project in `./docs`, the generated file structure should look like this:

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

The `docs` directory is considered the **project root** of the VitePress site. The `.vitepress` directory is a reserved location for VitePress' config file, dev server cache, build output, and optional theme customization code.

::: tip
By default, VitePress stores its dev server cache in `.vitepress/cache`, and the production build output in `.vitepress/dist`. If using Git, you should add them to your `.gitignore` file. These locations can also be [configured](../reference/site-config#outdir).
:::

### The Config File

The config file (`.vitepress/config.js`) allows you to customize various aspects of your VitePress site, with the most basic options being the title and description of the site:

```js
// .vitepress/config.js
export default {
  // site-level options
  title: "VitePress",
  description: "Just playing around.",

  themeConfig: {
    // theme-level options
  },
};
```

You can also configure the behavior of the theme via the `themeConfig` option. Consult the [Config Reference](../reference/site-config) for full details on all config options.

### Source Files

Markdown files outside the `.vitepress` directory are considered **source files**.

VitePress uses **file-based routing**: each `.md` file is compiled into a corresponding `.html` file with the same path. For example, `index.md` will be compiled into `index.html`, and can be visited at the root path `/` of the resulting VitePress site.

VitePress also provides the ability to generate clean URLs, rewrite paths, and dynamically generate pages. These will be covered in the [Routing Guide](./routing).

## Up and Running

The tool should have also injected the following npm scripts to your `package.json` if you allowed it to do so during the setup process:

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

The `docs:dev` script will start a local dev server with instant hot updates. Run it with the following command:

::: code-group

```sh [npm]
$ npm run docs:dev
```

```sh [pnpm]
$ pnpm run docs:dev
```

```sh [yarn]
$ yarn docs:dev
```

```sh [bun]
$ bun run docs:dev
```

:::

Instead of npm scripts, you can also invoke VitePress directly with:

::: code-group

```sh [npm]
$ npx vitepress dev docs
```

```sh [pnpm]
$ pnpm exec vitepress dev docs
```

```sh [bun]
$ bunx vitepress dev docs
```

:::

More command line usage is documented in the [CLI Reference](../reference/cli).

The dev server should be running at `http://localhost:5173`. Visit the URL in your browser to see your new site in action!

## What's Next?

- To better understand how markdown files are mapped to generated HTML, proceed to the [Routing Guide](./routing).

- To discover more about what you can do on the page, such as writing markdown content or using Vue Component, refer to the "Writing" section of the guide. A great place to start would be to learn about [Markdown Extensions](./markdown).

- To explore the features provided by the default documentation theme, check out the [Default Theme Config Reference](../reference/default-theme-config).

- If you want to further customize the appearance of your site, explore how to either [Extend the Default Theme](./extending-default-theme) or [Build a Custom Theme](./custom-theme).

- Once your documentation site takes shape, make sure to read the [Deployment Guide](./deploy).
