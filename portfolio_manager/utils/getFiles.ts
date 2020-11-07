import { statSync, readdirSync } from 'fs'
import { join } from 'path'

export function getFiles(path: string): string[] {
  const files: string[] = []

  for (const file of readdirSync(path))
    if (statSync(join(path, file)).isFile()) files.push(file)
    else throw new Error('Categories cannot contain sub-folders.')

  return files
}
