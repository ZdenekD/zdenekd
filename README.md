# Zdenekd

![Jest](https://github.com/ZdenekD/zdenekd/workflows/Jest/badge.svg)
![Snyk](https://github.com/ZdenekD/zdenekd/workflows/Snyk/badge.svg)

![](https://statuspage.freshping.io/badge/b80793be-3e66-4cae-ac37-cfe75e9adc06?0.22310144464765624)

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/ZdenekD/ZdenekD)

[![code style: eslint](https://img.shields.io/badge/code%20style-eslint-%23463fd4)](https://eslint.org) [![code style: stylelint](https://img.shields.io/badge/code%20style-stylelint-success)](https://stylelint.io) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installing / Getting started

Instruction of the minimal setup

---

### Setting up Dev

Description how to set project on local machine

```
git clone git@github.com:ZdenekD/zdenekd.git
cd zdenekd/
yarn
```

### Development

It's automatically pushed to [Zeit.co](https://zeit.co/dashboard). Production branch is **master**, other branches for development (every pushed branch is built)

```
master branch - **production**
develop branch - stage/development preview
```

### Convert video

Convert video with YUV444 (e.g. generated with Kazam program)

-   firefox bug (https://bugzilla.mozilla.org/show_bug.cgi?id=1368063)

```
ffmpeg -i video-name.mp4 -vf scale=800:450 -pix_fmt yuv420p video-name_converted.mp4
```

### Icons

[Tabler icons](https://tablericons.com)

### Building

Project is automatically build on [Zeit.co](https://zeit.co/dashboard).
Build task:

```
yarn build
```

## Debug mode

-   Run app in debug mode - more [info](https://nextjs.org/docs/advanced-features/debugging)

```
yarn debug
```

## Tests

How to run and write tests
[Snyk](https://snyk.io) - check packages for vulnerabilities
[Webhint](https://webhint.io) - complete website tests
[Jest](https://jestjs.io)
[Cypress](https://www.cypress.io)

```
snyk wizard
yarn jest
yarn jest:coverage
yarn hint:local
yarn hint:dev
yarn hint:prod
yarn cypress
yarn cypress:open
```

## Lint

[Eslint](https://eslint.org)
[Stylelint](https://stylelint.io)

```
yarn lint
yarn lint:js
yarn lint:css
```

## Check for outdated packages

[Yarn Outdated](https://yarnpkg.com/lang/en/docs/cli/outdated/) - check for outdated project packages

```
yarn outdated
yarn upgrade
```

## Storybook

[storybook](https://storybook.js.org)

```
yarn story
```

## Chromatic

[chromatic](https://www.chromatic.com)

```
yarn chromatic
```

## Sentry

Handle initial config files for Sentry

```
npx @sentry/wizard -i nextjs
```

## Deploying

Push to **master** branch
