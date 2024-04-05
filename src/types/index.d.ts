/**
Synchronously find the root of the project.

@param dir - The directory to start the search. Default `cwd`.
@returns Project root directory or `undefined` if none could be found.

@example
```
// /
// └── root 
//     ├── .git
//     ├── package.json
//     └── src
//         ├── types
//         └── index.js

// `index.js`
import projectRootDir from '@ambiere/project-root';

console.log(projectRootDir());
// /root
```
*/
export default function projectRootDir(dir?: string): string | undefined

