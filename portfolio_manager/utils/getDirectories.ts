import { statSync, readdirSync } from 'fs'
import { join } from 'path'

export function getDirectories(path: string): string[] {
  const dirs: string[] = []

  for (const dir of readdirSync(path))
    if (statSync(join(path, dir)).isDirectory()) dirs.push(dir)
    else
      throw new Error(
        `The portfolio directory must only contain folders.\nA file was found: ${dir}`
      )

  return dirs
}
