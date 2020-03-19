# Zdenekd

![Jest](https://github.com/ZdenekD/zdenekd/workflows/Jest/badge.svg)
![Snyk](https://github.com/ZdenekD/zdenekd/workflows/Snyk/badge.svg)

![](https://statuspage.freshping.io/badge/b80793be-3e66-4cae-ac37-cfe75e9adc06?0.22310144464765624)

[![code style: eslint](https://img.shields.io/badge/code%20style-eslint-%23463fd4)](https://eslint.org) [![code style: stylelint](https://img.shields.io/badge/code%20style-stylelint-success)](https://stylelint.io) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installing / Getting started

Instruction of the minimal setup

---

### Setting up Dev

Description how to set project on local machine

```
    git clone git@github.com:ZdenekD/zdenekd.git
    cd zdenekd/
    yarn (if package.json exists)
```

### Develop

```
yarn dev
```

### Building

Build project before deploy

```
yarn build
```

## Tests

JS tests are written with `jest` and `enzyme`

```
yarn test:js
```

Security and audit tests

-   Exists github actions to run tests

Webpages tests (it needs to run webserver - it looks on http://localhost:3000)

```
yarn test:webhint
```

Yarn outdated packages test

```
yarn test:packages
```

## Deploying

Git master branch is production, other branches are develop.
Project is on github pushed to Now.
