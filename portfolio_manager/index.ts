import { join, parse } from 'path'
import { getDirectories } from './utils/getDirectories'
import { getFiles } from './utils/getFiles'
import { getLastIndex } from './utils/getLastIndex'
import { error, general, success } from './utils/log'
import { renameFile } from './utils/renameFile'
import { writeFileSync } from 'fs'

process.on('uncaughtException', (err) => {
  error(err.message)
  process.exit(1)
})

const PORTFOLIO_DIR = join(__dirname, '../../assets/portfolio')
const PORTFOLIO_JSON = join(__dirname, '../../assets/portfolio.json')

general(`Evaluating directory: ${PORTFOLIO_DIR}`)

const startTime = Date.now()

interface PortfolioRecord {
  [category: string]: string[]
}

const portfolioRecords: PortfolioRecord = {}

const directories = getDirectories(PORTFOLIO_DIR)

// Only for logging
directories.forEach((dir, i) => general(`${i + 1} • ${dir.split('.')[1]}`))

const categories = new Map<string, string[]>()

directories.forEach((dir) =>
  categories.set(dir, getFiles(join(PORTFOLIO_DIR, dir)))
)

categories.forEach((files, dir) => {
  const category = dir.split('.')[1]

  const fullDir = join(PORTFOLIO_DIR, dir)

  let currentIndex = getLastIndex(fullDir)

  const renamedFiles = []

  files.forEach((file) => {
    if (/[^0-9]/.test(parse(file).name))
      renamedFiles.push(renameFile(fullDir, file, ++currentIndex))
    else renamedFiles.push(file)
  })

  portfolioRecords[category] = renamedFiles
    .sort((a, b) => parseInt(parse(a).name) - parseInt(parse(b).name))
    .map((file) => `${dir}/${file}`)
})

const data = {
  categories: Array.from(categories.keys()),
  photos: portfolioRecords
}

writeFileSync(PORTFOLIO_JSON, JSON.stringify(data))

success(`✔ Processing complete (${Date.now() - startTime}ms)`)
