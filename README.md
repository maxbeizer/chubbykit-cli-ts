chubbykit-cli
=============



[![Version](https://img.shields.io/npm/v/chubbykit-cli.svg)](https://npmjs.org/package/chubbykit-cli)
[![CircleCI](https://circleci.com/gh/maxbeizer/chubbykit-cli/tree/master.svg?style=shield)](https://circleci.com/gh/maxbeizer/chubbykit-cli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/maxbeizer/chubbykit-cli?branch=master&svg=true)](https://ci.appveyor.com/project/maxbeizer/chubbykit-cli/branch/master)
[![Codecov](https://codecov.io/gh/maxbeizer/chubbykit-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/maxbeizer/chubbykit-cli)
[![Downloads/week](https://img.shields.io/npm/dw/chubbykit-cli.svg)](https://npmjs.org/package/chubbykit-cli)
[![License](https://img.shields.io/npm/l/chubbykit-cli.svg)](https://github.com/maxbeizer/chubbykit-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g chubbykit-cli
$ chubbykit-cli COMMAND
running command...
$ chubbykit-cli (-v|--version|version)
chubbykit-cli/0.0.0 darwin-x64 node-v9.11.1
$ chubbykit-cli --help [COMMAND]
USAGE
  $ chubbykit-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [chubbykit-cli hello [FILE]](#chubbykit-cli-hello-file)
* [chubbykit-cli help [COMMAND]](#chubbykit-cli-help-command)

## chubbykit-cli hello [FILE]

describe the command here

```
USAGE
  $ chubbykit-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ chubbykit-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/maxbeizer/chubbykit-cli/blob/v0.0.0/src/commands/hello.ts)_

## chubbykit-cli help [COMMAND]

display help for chubbykit-cli

```
USAGE
  $ chubbykit-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.2.4/src/commands/help.ts)_
<!-- commandsstop -->
