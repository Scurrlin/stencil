import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { transformFile } from '../src/index.js'

const testsDir = path.resolve('tests')
const testDirs = fs.readdirSync(testsDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)

describe('stencil output', () => {
  for (const dir of testDirs) {
    it(`matches expected output for ${dir}`, async () => {
      const folder = path.join(testsDir, dir)
      const files = fs.readdirSync(folder)
      const inputFile = files.find(f => f.startsWith('input.'))
      if (!inputFile) throw new Error(`No input file in ${folder}`)

      const inputPath = path.join(folder, inputFile)
      const expectedPath = path.join(folder, 'expected.txt')
      const expected = fs.readFileSync(expectedPath, 'utf8')
      const actual = await transformFile(inputPath)

      expect(actual).toBe(expected)
    })
  }
})
