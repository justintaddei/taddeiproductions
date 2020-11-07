import { renameSync } from 'fs'
import { parse, join } from 'path'
import { general } from './log'

export function renameFile(
  path: string,
  oldName: string,
  index: number
): string {
  const { ext } = parse(oldName)
  const newName = `${index}${ext}`

  general(`Renaming ${oldName} to ${newName}`)
  renameSync(join(path, oldName), join(path, newName))

  return newName
}
