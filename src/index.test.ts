import { EXT } from '@/consts'

import filename from '@tests/dummies/filename'
import mockedReadAsync from '@tests/mocks/readAsync'
import mockedReadSync from '@tests/mocks/readSync'
import unmockReadAsync from '@tests/unmocks/readAsync'
import unmockReadSync from '@tests/unmocks/readSync'

import { parseJSON, validateFilename } from '@/utils'

import { read, readSync, validateSkippedStacks } from '.'

jest.mock('@mnrendra/read-stacked-file', () => ({
  read: jest.fn(),
  readSync: jest.fn(),
  validateSkippedStacks: jest.fn()
}))

describe('Test `index` utils:', () => {
  describe('Test `parseJSON` util:', () => {
    it('Should throw an error when given an invalid stringified JSON!', () => {
      const received = (): void => { parseJSON('any texts.', filename) }
      const expected = Error(`"${filename}" value cannot be parsed.`)

      expect(received).toThrow(expected)
    })

    it('Should return a valid JSON object when given a valid stringified JSON!', () => {
      const received = parseJSON('{}', filename)
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a valid JSON object when given a valid stringified JSON and `isJSON5` param is set to `false`!', () => {
      const received = parseJSON('{}', filename, false)
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a valid JSON5 object when given a valid stringified JSON5 and `isJSON5` param is set to `true`!', () => {
      const received = parseJSON('{}', filename, true)
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
})

describe('Test all features:', () => {
  describe('Test `read` feature:', () => {
    describe('By mocking `readAsync` to resolve a non-JSON string:', () => {
      beforeAll(() => {
        mockedReadAsync.mockResolvedValue(' ')
      })

      afterAll(() => {
        unmockReadAsync(mockedReadAsync)
      })

      it('Should reject with an error when unable to parse the value!', async () => {
        const received = read(filename)
        const expected = Error(`"${filename}" value cannot be parsed.`)

        await expect(received).rejects.toThrow(expected)
      })
    })

    describe('Without mocking anything:', () => {
      it('Should resolve a parsed JSON object when given a filename with spaces and newlines!', async () => {
        const received = await read(`\n  ${filename}   \n\n`)
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should resolve a parsed JSON object when given a filename without an extension!', async () => {
        const received = await read(`\n  ${filename.replace(EXT, '')}   \n\n`)
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should resolve a parsed JSON object when given a valid filename!', async () => {
        const received = await read(filename)
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should resolve a parsed JSON object when given a filename and `isJSON5` param is set to `false`!', async () => {
        const received = await read(filename, { isJSON5: false })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should resolve a parsed JSON5 object when given a filename and `isJSON5` param is set to `true`!', async () => {
        const received = await read(filename, { isJSON5: true })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should resolve a parsed JSON object when given a filename, `isJSON5` param is set to `false`, and `skippedStacks` param is given a string!', async () => {
        const received = await read(filename, { isJSON5: false, skippedStacks: 'any' })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should resolve a parsed JSON object when given a filename, `isJSON5` param is set to `false`, and `skippedStacks` param is given an array of strings!', async () => {
        const received = await read(filename, { isJSON5: false, skippedStacks: ['any'] })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should resolve a parsed JSON5 object when given a filename, `isJSON5` param is set to `true`, and `skippedStacks` param is given a string!', async () => {
        const received = await read(filename, { isJSON5: true, skippedStacks: 'any' })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should resolve a parsed JSON5 object when given a filename, `isJSON5` param is set to `true`, and `skippedStacks` param is given an array of strings!', async () => {
        const received = await read(filename, { isJSON5: true, skippedStacks: ['any'] })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })
    })
  })

  describe('Test `readSync` feature:', () => {
    describe('By mocking `readSync` to return a non-JSON string:', () => {
      beforeAll(() => {
        mockedReadSync.mockReturnValue(' ')
      })

      afterAll(() => {
        unmockReadSync(mockedReadSync)
      })

      it('Should throw an error when unable to parse the value!', () => {
        const received = (): void => { readSync(filename) }
        const expected = Error(`"${filename}" value cannot be parsed.`)

        expect(received).toThrow(expected)
      })
    })

    describe('Without mocking anything:', () => {
      it('Should return a parsed JSON object when given a filename with spaces and newlines!', () => {
        const received = readSync(`\n  ${filename}   \n\n`)
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should return a parsed JSON object when given a filename without an extension!', () => {
        const received = readSync(`\n  ${filename.replace(EXT, '')}   \n\n`)
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should return a parsed JSON object when given a valid filename!', () => {
        const received = readSync(filename)
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should return a parsed JSON object when given a filename and `isJSON5` param is set to `false`!', () => {
        const received = readSync(filename, { isJSON5: false })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should return a parsed JSON5 object when given a filename and `isJSON5` param is set to `true`!', () => {
        const received = readSync(filename, { isJSON5: true })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should return a parsed JSON object when given a filename, `isJSON5` param is set to `false`, and `skippedStacks` param is given a string!', () => {
        const received = readSync(filename, { isJSON5: false, skippedStacks: 'any' })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should return a parsed JSON object when given a filename, `isJSON5` param is set to `false`, and `skippedStacks` param is given a list of strings!', () => {
        const received = readSync(filename, { isJSON5: false, skippedStacks: ['any'] })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should return a parsed JSON5 object when given a filename, `isJSON5` param is set to `true`, and `skippedStacks` param is given a string!', () => {
        const received = readSync(filename, { isJSON5: true, skippedStacks: 'any' })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })

      it('Should return a parsed JSON5 object when given a filename, `isJSON5` param is set to `true`, and `skippedStacks` param is given a list of strings!', () => {
        const received = readSync(filename, { isJSON5: true, skippedStacks: ['any'] })
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })
    })
  })

  describe('Test `validateSkippedStacks` feature:', () => {
    it('Should return a valid skipped-stacks when given a skipped-stack!', () => {
      const received = validateSkippedStacks('any')
      const expected = ['any']

      expect(received).toEqual(expected)
    })

    it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a string!', () => {
      const received = validateSkippedStacks('any', 'any')
      const expected = ['any', 'any']

      expect(received).toEqual(expected)
    })

    it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a list of strings!', () => {
      const received = validateSkippedStacks('any', ['any'])
      const expected = ['any', 'any']

      expect(received).toEqual(expected)
    })
  })
})
