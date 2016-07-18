# mu-kōän-generator 公案-ジェネレータ
[![Build Status](https://travis-ci.org/nfantone/mu-koan-generator.svg?branch=develop)](https://travis-ci.org/nfantone/mu-koan-generator) [![codecov.io](https://codecov.io/github/nfantone/mu-koan-generator/coverage.svg?branch=develop)](https://codecov.io/github/nfantone/mu-koan-generator?branch=develop) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/nfantone/mu-koan-generator/blob/master/LICENSE)


## Installation

```sh
$ npm i -g mu-koan-generator
```

## Usage

To get started with a [Koa 2.0.0+][1] REST JSON API is to utilize the command line executable `mu-koan(1)` to generate an application as shown below:

- Create the application:

```bash
$ mkdir my-awesome-api && cd my-awesome-api
$ mu-koan

info: [mu-koan]    Creating project "my-awesome-api" into [/home/you/dev/foo]
info: [mu-koan]    Created /home/you/dev/foo
info: [mu-koan]    Created /home/you/dev/foo/.editorconfig
info: [mu-koan]    Created /home/you/dev/foo/.eslintrc
info: [mu-koan]    Created /home/you/dev/foo/.gitignore
info: [mu-koan]    Created /home/you/dev/foo/app
info: [mu-koan]    Created /home/you/dev/foo/app.js
info: [mu-koan]    Created /home/you/dev/foo/app/config
info: [mu-koan]    Created /home/you/dev/foo/app/config/index.js
info: [mu-koan]    Created /home/you/dev/foo/app/config/properties.json
info: [mu-koan]    Created /home/you/dev/foo/app/logger.js
info: [mu-koan]    Created /home/you/dev/foo/app/routes
info: [mu-koan]    Created /home/you/dev/foo/app/routes/status.js
info: [mu-koan]    Created /home/you/dev/foo/app/server.js
info: [mu-koan]    Created /home/you/dev/foo/build.json
info: [mu-koan]    Created /home/you/dev/foo/gulpfile.js
info: [mu-koan]    Done
```

- Fire it up:

```bash
$ npm start
```

## Command line interface

```sh
Usage: mu-koan [name]

Options:
  -h, --help     Show help                                             [boolean]
  -v, --verbose  Sets the verbosity level for log messages               [count]
  -V, --version  Show version number                                   [boolean]
  --name                                            [default: (generated-value)]

https://github.com/nfantone/mu-koan-generator
```

---

## License
MIT


[1]: https://github.com/koajs/koa/tree/v2.x
