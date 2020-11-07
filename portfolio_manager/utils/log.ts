import chalk from 'chalk'

export const error = (err: string) => console.error(chalk.red(err))
export const general = (msg: string) => console.error(chalk.cyan(msg))
export const success = (msg: string) => console.error(chalk.green(msg))
