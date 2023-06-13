# Khoj News

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

How to publish a News: https://doc.clickup.com/9002050041/p/h/8c90rft-524/b3111a29c4039f4
How to update rates for commodities: https://doc.clickup.com/9002050041/p/h/8c90rft-544/f0e66d65b75d40f

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
