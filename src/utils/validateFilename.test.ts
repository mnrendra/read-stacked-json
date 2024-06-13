import { EXT } from '../consts'

import filename from '@tests/stubs/filename'

import validateFilename from './validateFilename'

describe('Test `validateFilename` util:', () => {
  it('Should return a valid filename when given a filename with spaces and newlines!', () => {
    const received = validateFilename(`\n  ${filename}   \n\n`)
    const expected = filename

    expect(received).toBe(expected)
  })

  it('Should return a valid filename when given a filename without an extension!', () => {
    const received = validateFilename(`\n  ${filename.replace(EXT, '')}   \n\n`)
    const expected = filename

    expect(received).toBe(expected)
  })

  it('Should return a valid filename when given a valid filename!', () => {
    const received = validateFilename(filename)
    const expected = filename

    expect(received).toBe(expected)
  })
})
