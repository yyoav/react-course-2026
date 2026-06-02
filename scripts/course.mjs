import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'

const rawArgs = process.argv.slice(2)
const hasTargetArg = rawArgs[0] && !rawArgs[0].startsWith('-')
const target = hasTargetArg ? rawArgs[0] : ''
const viteArgs = hasTargetArg ? rawArgs.slice(1) : rawArgs
const require = createRequire(import.meta.url)
const vitePackageJson = require.resolve('vite/package.json')
const viteCli = resolve(dirname(vitePackageJson), 'bin', 'vite.js')

const child = spawn(process.execPath, [viteCli, ...viteArgs], {
  stdio: 'inherit',
  env: {
    ...process.env,
    VITE_COURSE_TARGET: target,
  },
})

child.on('exit', (code) => {
  process.exit(code ?? 0)
})

child.on('error', (error) => {
  console.error('Failed to start Vite. Run "npm install" first.')
  console.error(error)
  process.exit(1)
})