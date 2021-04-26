<h1 align="center">
    <img alt="Ig.news logo" title="Ig.news logo" src="https://raw.githubusercontent.com/monteiro-alexandre/ignite-reactjs-ignews/master/.github/assets/logo.svg" width="220px" />
</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Code produced during module 3 of the Ignite course on the React Js trail of the Rocketseat platform.

In this module, a subscription platform for text content was developed, using the concepts of JAMStack. FaunaDB was used as a database, Stripe for payment integration and Prismic CMS for content management.

<img src="https://raw.githubusercontent.com/monteiro-alexandre/ignite-reactjs-ignews/master/.github/assets/ignews.png" alt="Ig.news" width="100%"/>

# :pushpin: Table of Contents

* [Technologies](#-technologies)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)

## 💻 Technologies

This project was developed with the following technologies:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org)
- [NextJs](https://nextjs.org/)
- [FaunaDB](https://fauna.com/)
- [Stripe](https://stripe.com/)
- [Prismic](https://prismic.io/)
- [NextAuth](https://next-auth.js.org/)

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```
git clone https://github.com/monteiro-alexandre/ignite-reactjs-ignews.git
```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you use a SSH key registered in your Github account, clone the project using this command:

```
git clone git@github.com:monteiro-alexandre/ignite-reactjs-ignews.git
```

**Install dependencies**

```
yarn install
```

Or

```
npm install
```

## FaunaDB, Stripe, Prismic, Github's OAuth and Environment Variables configuration

This project uses [FaunaDB](https://fauna.com/), [Stripe](https://stripe.com/), [Prismic](https://prismic.io/) and [Github's OAuth](https://docs.github.com/en/developers/apps/authorizing-oauth-apps) authentication, and for proper functioning, you must create your account on these services, if you don't already have it and make some settings.

### FaunaDB Configuration

See [FaunaDB Configuration documentation](https://github.com/monteiro-alexandre/ignite-reactjs-ignews/blob/master/docs/faunadb-configuration.md) to configure your FaunaDB and fill in your environment variables.

### Stripe Configuration

See [Stripe Configuration documentation](https://github.com/monteiro-alexandre/ignite-reactjs-ignews/blob/master/docs/stripe-configuration.md) to configure your Stripe and fill in your environment variables.

### Prismic Configuration

See [Prismic Configuration documentation](https://github.com/monteiro-alexandre/ignite-reactjs-ignews/blob/master/docs/prismic-configuration.md) to configure your Prismic and fill in your environment variables.

### Github's OAuth Configuration

See [Github's OAuth Configuration documentation](https://github.com/monteiro-alexandre/ignite-reactjs-ignews/blob/master/docs/github-oauth-configuration.md) to configure your Github's OAuth and fill in your environment variables.

# :runner: Getting Started

Run the following command in order to start the application in a development environment:

```yarn dev```

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [Ignews](https://github.com/monteiro-alexandre/ignite-reactjs-ignews/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/monteiro-alexandre/ignite-reactjs-ignews/blob/master/CONTRIBUTING.md) to find out about the coding standards.

# :tada: Contributing

Check out the [contributing](https://github.com/monteiro-alexandre/ignite-reactjs-ignews/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

# :closed_book: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.