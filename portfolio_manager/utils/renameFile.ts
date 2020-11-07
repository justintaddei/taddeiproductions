import { renameSync } from 'fs'
import { parse, join } from 'path'

export function renameFile(
  path: string,
  oldName: string,
  index: number
): string {
  const { ext } = parse(oldName)
  const newName = `${index}${ext}`

  renameSync(join(path, oldName), join(path, newName))
  return newName
}
