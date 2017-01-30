# mu-kōän-generator 公案-ジェネレータ

[![Greenkeeper badge](https://badges.greenkeeper.io/nfantone/mu-koan-generator.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/nfantone/mu-koan-generator.svg?branch=develop)](https://travis-ci.org/nfantone/mu-koan-generator) [![codecov.io](https://codecov.io/github/nfantone/mu-koan-generator/coverage.svg?branch=develop)](https://codecov.io/github/nfantone/mu-koan-generator?branch=develop) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/nfantone/mu-koan-generator/blob/master/LICENSE)


## Installation

```sh
$ npm i -g mu-koan-generator
```

## Usage

To get started with a [Koa 2.0.0+][1] REST JSON API use the command line executable `mu-koan(1)` to generate an application as shown:

- Create the application:

```bash
$ mkdir my-awesome-api && cd my-awesome-api
$ mu-koan

info: [mu-koan]    Creating project "my-awesome-api" into [/home/you/dev/my-awesome-api]
info: [mu-koan]    Created /home/you/dev/my-awesome-api
info: [mu-koan]    Created /home/you/dev/my-awesome-api/.editorconfig
info: [mu-koan]    Created /home/you/dev/my-awesome-api/.eslintrc
info: [mu-koan]    Created /home/you/dev/my-awesome-api/.gitignore
info: [mu-koan]    Created /home/you/dev/my-awesome-api/app
info: [mu-koan]    Created /home/you/dev/my-awesome-api/app.js
info: [mu-koan]    Created /home/you/dev/my-awesome-api/app/config
info: [mu-koan]    Created /home/you/dev/my-awesome-api/app/config/index.js
info: [mu-koan]    Created /home/you/dev/my-awesome-api/app/config/properties.json
info: [mu-koan]    Created /home/you/dev/my-awesome-api/app/logger.js
info: [mu-koan]    Created /home/you/dev/my-awesome-api/app/routes
info: [mu-koan]    Created /home/you/dev/my-awesome-api/app/routes/status.js
info: [mu-koan]    Created /home/you/dev/my-awesome-api/app/server.js
info: [mu-koan]    Created /home/you/dev/my-awesome-api/build.json
info: [mu-koan]    Created /home/you/dev/my-awesome-api/gulpfile.js
```

This will run `npm init` and `npm install` after generating the initial scaffolding.

- Fire it up:

```sh
$ npm start

[12:59:48] Using gulpfile ~/dev/js/my-awesome-api/gulpfile.js
[12:59:48] Starting 'default'...
[12:59:48] Starting 'eslint'...
[12:59:49] Finished 'eslint' after 736 ms
[12:59:49] Starting 'nodemon'...
...
2016-07-22 12:59:49,648 - info: [my-awesome-api] Starting and configuring Koa server
2016-07-22 12:59:49,662 - info: [my-awesome-api] Configuring routes for [/api/status]
2016-07-22 12:59:49,671 - info: [my-awesome-api] ✔ Koa server listening on 127.0.0.1:3000 [development]

```

- Check everything's working as expected by requesting `/api/status`. In a new terminal session, run:

```sh
$ curl http://localhost:3000/api/status
{
  "success": true,
  "name": "my-awesome-api",
  "version": "1.0.0-dev",
  "timestamp": "Jul 19, 2016 4:31 PM",
  "process": {
    "platform": "linux",
    "pid": 24238,
    "mem": {
      "rss": 49418240,
      "heapTotal": 34317856,
      "heapUsed": 23951544
    }
 }
 ```

 > You can change or remove the `/api` namespace by modifying `"koa.routes.prefix"` option on `app/config/properties.json` or by starting the API with `npm start -- --koa.routes.prefix foo`.

## Command line interface

```sh
Usage: mu-koan [-f --force] [-v]

Options:
  -h, --help     Show help                                             [boolean]
  -v, --verbose  Sets the verbosity level for log messages               [count]
  -V, --version  Show version number                                   [boolean]
  --name                                            [default: (generated-value)]

https://github.com/nfantone/mu-koan-generator


https://github.com/nfantone/mu-koan-generator
```

## Features
Along with a working webserver, the generator creates some common files that feature additional functionality or help you follow standard practices, such as:

- A [gulpfile.js][2] with some common tasks like `gulp eslint` for linting or `gulp nodemon` to start a [nodemon][3] process.
- Linting rules based on [xo-space][4] and [semistandard][5] ESLINT configurations.
- An `.editorconfig` file.
- A `.gitignore` with many common entries (thanks to https://gitignore.io).
- Includes [mu-kōän][6] as a dependency, so you get many helpful [Koa middlewares out-of-the-box][7].
- Includes [mu-kōän-router][10] as a dependency for automatic controller discovery: just drop a `.js` file under `/routes`.
- A readily configured [`winston`][8] logger at `app/logger.js`.
- A `routes/status.js` controller that prints out simple information on the running process on `GET /api/status`.
- Stores its configuration on an [`nconf`][9] instance, supporting command line arguments, environment variables and a `config/properties.json` file as sources.

---

## License
MIT


[1]: https://github.com/koajs/koa/tree/v2.x
[2]: https://gulpjs.com
[3]: https://nodemon.io
[4]: https://github.com/sindresorhus/eslint-config-xo-space
[5]: https://github.com/Flet/semistandard
[6]: https://www.npmjs.com/package/mu-koan
[7]: https://github.com/nfantone/mu-koan#features
[8]: https://www.npmjs.com/package/winston
[9]: https://www.npmjs.com/package/nconf
[10]: https://www.npmjs.com/package/mu-koan-router
