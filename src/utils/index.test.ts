import { EXT } from '../consts'

import filename from '@tests/stubs/filename'
import validSkippedStacks from '@tests/stubs/validSkippedStacks'

import { parseJSON, validateFilename, validateSkippedStacks } from '.'

describe('Test `index` utils:', () => {
  describe('Test `parseJSON` util:', () => {
    it('Should throw an error when given an invalid stringified JSON!', () => {
      const received = (): void => { parseJSON(filename, 'any texts.') }
      const expected = Error(`"${filename}" value cannot be parsed.`)

      expect(received).toThrow(expected)
    })

    it('Should return a valid JSON object when given a valid stringified JSON!', () => {
      const received = parseJSON(filename, '{}')
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a valid JSON object when given a valid stringified JSON and `isJSON5` param is set to `false`!', () => {
      const received = parseJSON(filename, '{}', false)
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a valid JSON5 object when given a valid stringified JSON5 and `isJSON5` param is set to `true`!', () => {
      const received = parseJSON(filename, '{}', true)
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })
  })

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

  describe('Test `validateSkippedStacks` util:', () => {
    it('Should return the default value when given an empty argument!', () => {
      const received = validateSkippedStacks()
      const expected = validSkippedStacks()

      expect(received).toEqual(expected)
    })

    it('Should return the default value with additional `skippedStacks` when given a `skippedStacks` option with a string!', () => {
      const received = validateSkippedStacks('any')
      const expected = [...validSkippedStacks(), 'any']

      expect(received).toEqual(expected)
    })

    it('Should return the default value with additional `skippedStacks` when given a `skippedStacks` option with a list of strings!', () => {
      const received = validateSkippedStacks(['any'])
      const expected = [...validSkippedStacks(), 'any']

      expect(received).toEqual(expected)
    })
  })
})
