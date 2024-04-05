# project-root

> Tiny and zero dependencies utility, that finds the root of npm project.

[![Release](https://github.com/ambiere/project-root/actions/workflows/main.yml/badge.svg)](https://github.com/ambiere/project-root/actions/workflows/main.yml)

## Install

```bash
npm install @ambiere/project-root
```

## Usage

Example npm project structure:

```txt
/
└── root 
   ├── .git
   ├── package.json
   └── src
       ├── types
       └── index.js
```

Find the root of the project in `index.js` file:

```js
import projectRootDir from "@ambiere/project-root"

const projectRoot = projectRootDir()
console.log(projectRoot) // → /root
```

## API

### `projectRootDir(dir?)`

Return the root directory of the npm project or `undefined` if none could be found.

#### dir:

Type: `string`
 
Default: `process.cwd`

The directory to start the search.


## License

[MIT license][MIT]

[MIT]: https://github.com/ambiere/project-root/blob/main/license
