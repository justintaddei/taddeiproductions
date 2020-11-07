import { parse } from 'path'
import { getFiles } from './getFiles'

export function getLastIndex(path: string): number {
  let max = 0

  for (const file of getFiles(path)) {
    const { name } = parse(file)
    if (!/[^0-9]/.test(name)) max = Math.max(max, parseInt(name))
  }

  return max
}
