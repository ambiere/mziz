import fs from "node:fs";
import path from 'path';
import { fileURLToPath } from 'url';

const cwd = path.dirname(fileURLToPath(import.meta.url))

export default function projectRootDir(dir = cwd) {
  const git = path.join(dir, ".git")
  const pkg = path.join(dir, 'package.json');
  if (fs.existsSync(pkg) && fs.existsSync(git)) {
    return dir;
  }
  if (path.resolve(dir, '..') === dir) {
    throw new Error('Could not find package.json or .git in the directory tree. :(');
  } else {
    return projectRootDir(path.resolve(dir, '..'));
  }
}

