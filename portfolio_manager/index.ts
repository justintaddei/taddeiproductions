import { join } from 'path'
import { getDirectories } from './utils/getDirectories'
import { getFiles } from './utils/getFiles'
import { getLastIndex } from './utils/getLastIndex'
import { error, general, success } from './utils/log'
import { renameFile } from './utils/renameFile'

process.on('uncaughtException', (err) => {
  error(err.message)
  process.exit(1)
})

const PORTFOLIO_DIR = join(__dirname, '../../assets/portfolio')

general(`Evaluating directory: ${PORTFOLIO_DIR}`)

const portfolioRecords = new Map<string, Set<string>>()

const directories = getDirectories(PORTFOLIO_DIR)

// Only for logging
directories.forEach((dir, i) => general(`${i + 1} • ${dir.split('.')[1]}`))

const categories = new Map<string, string[]>()

directories.forEach((dir) =>
  categories.set(dir, getFiles(join(PORTFOLIO_DIR, dir)))
)

categories.forEach((files, dir) => {
  const category = dir.split('.')[1]

  dir = join(PORTFOLIO_DIR, dir)

  let currentIndex = getLastIndex(dir)

  const renamedFiles = new Set<string>()

  files.forEach((file) => {
    renamedFiles.add(renameFile(dir, file, ++currentIndex))
  })

  portfolioRecords.set(category, renamedFiles)
})

console.log('portfolioRecords :>> ', portfolioRecords)

success('✔ Processing complete')
