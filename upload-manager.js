const { readdir, stat, rename } = require('fs').promises
const { join, parse } = require('path')
const { red, cyan, green, yellow } = require('chalk')

const PORTFOLIO_DIR = join(__dirname, 'assets/portfolio/')

const getDirectories = async (path) => {
  console.log(yellow('Configuring portfolio using directory:', path))
  console.log(cyan('Evaluating directory structure...'))
  let dirs = []
  for (const dir of await readdir(path)) {
    if ((await stat(join(path, dir))).isDirectory()) dirs = [...dirs, dir]
    else {
      console.log(red(`All photos must be in a folder.\n"${dir}" is not.`))
      process.exit(1)
    }
  }

  dirs
    .sort()
    .map((d) => d.split('.').pop())
    .forEach((dir, i) => console.log(cyan(`${i + 1} • ${dir}`)))
  return dirs
}

const getFiles = async (path) => {
  const files = []
  for (const file of await readdir(join(PORTFOLIO_DIR, path))) {
    if ((await stat(join(path, file))).isDirectory()) {
      console.log(
        red(`Sub-folders are not allowed.\n"${file}" is a sub-folder.`)
      )
      process.exit(1)
    }

    files.push(file)
  }
  return files
}

const getNoneNumericalFiles = async (path) => {
  const files = await getFiles(path)

  files = files.filter((file) => /[^0-9]+/.test(parse(file).name))

  return files
}

const getLargestFileIndex = async (path) => {
  let maxIndex = 0

  ;(await getFiles(path)).forEach((file) => {
    maxIndex = Math.max(maxIndex, parseInt(parse(file).name, 10))
  })

  return maxIndex
}

const renameFile = (dir, name, index) => {
  const { ext } = parse(name)

  rename(
    join(PORTFOLIO_DIR, dir, name),
    join(PORTFOLIO_DIR, dir, `${index}${ext}`)
  )
    .then(() => console.log(cyan(`Renamed ${name} to ${index}${ext}`)))
    .catch((err) => console.error(red(err)))
}

async function main() {
  const directories = await getDirectories(PORTFOLIO_DIR)

  directories.forEach(async (path) => {
    const files = await getNoneNumericalFiles(path)
    let currentIndex = getLargestFileIndex(path)

    files.forEach(async (file) => await renameFile(path, file, ++currentIndex))
  })
}

main().then(() => console.log(green('✔ Processing complete.')))
