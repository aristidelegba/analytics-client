# Getting Started

## Installation

### Prerequisites

- You need to configure Matomo and/or GA4 in your project.
    - [Matomo](https://matomo.org/guide/getting-started/getting-started/)
    - [GA4 API configuration](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries)

- To install this package you need [NodeJS](http://nodejs.org/) (version 14 or later)  and a Node package manager 
(We use [pnpm](https://pnpm.io/fr/installation) but you can use [npm](https://npmjs.org/) or [yarn](https://yarn.org/) as well) installed on your machine.

#### In production

In production the latest release can be installed from the **main** branch on github.
::: code-group

```sh [npm]
$ npm add https://github.com/aristidelegba/analytics-client
```

```sh [pnpm]
$ pnpm add https://github.com/aristidelegba/analytics-client
```

```sh [yarn]
$ yarn add https://github.com/aristidelegba/analytics-client
```

:::

```json
{
  ...
  "dependencies": {
    ....
    "analytics-client": "https://github.com/aristidelegba/analytics-client",
    ...
  }
}
```
You can also install a particular version using semver
::: code-group

```sh [npm]
$ npm add https://github.com/aristidelegba/analytics-client#semver:0.0.1
```

```sh [pnpm]
$ pnpm add https://github.com/aristidelegba/analytics-client#semver:0.0.1
```

```sh [yarn]
$ yarn add https://github.com/aristidelegba/analytics-client#semver:0.0.1
```

:::

```json
{
  ...
  "dependencies": {
    ....
    "analytics-client": "https://github.com/aristidelegba/analytics-client#semver:0.0.1",
    ...
  }
}
```

#### Use locally(developpement/ debugging purposes)

First you need to clone the github repository

```sh [npm]
$ git clone https://github.com/aristidelegba/analytics-client
```

Then you can install it using the path to the directory where you have cloned the source code of analytics client.

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
    "analytics-client": "link:../analytics-client",
    ...
  }
}
```
