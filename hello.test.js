import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

describe('Activity 1 – Hello World', () => {
  let consoleSpy

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.resetModules()
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  it('prints "Hello, World!" to the console', async () => {
    await import('./hello.js')
    expect(consoleSpy).toHaveBeenCalledWith('Hello, World!')
  })
})

describe('Student info (student.json)', () => {
  const path = fileURLToPath(new URL('./student.json', import.meta.url))
  const info = JSON.parse(readFileSync(path, 'utf8'))

  it('classCode is filled in', () => {
    expect(info.classCode, 'Set classCode in student.json').toBeTruthy()
  })

  it('fullName is filled in', () => {
    expect(info.fullName, 'Set fullName in student.json').toBeTruthy()
  })

  it('studentNumber is filled in', () => {
    expect(info.studentNumber, 'Set studentNumber in student.json').toBeTruthy()
  })

  it('studentEmail is filled in', () => {
    expect(info.studentEmail, 'Set studentEmail in student.json').toBeTruthy()
  })

  it('personalEmail is filled in', () => {
    expect(info.personalEmail, 'Set personalEmail in student.json').toBeTruthy()
  })

  it('githubAccount is filled in', () => {
    expect(info.githubAccount, 'Set githubAccount in student.json').toBeTruthy()
  })
})
