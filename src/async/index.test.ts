import { EXT } from '@/consts'

import filename from '@tests/dummies/filename'
import mockedReadAsync from '@tests/mocks/readAsync'
import unmockReadAsync from '@tests/unmocks/readAsync'

import index from '.'

jest.mock('@mnrendra/read-stacked-file', () => ({
  read: jest.fn(),
  validateSkippedStacks: jest.fn()
}))

describe('Test `index` async:', () => {
  describe('By mocking `readAsync` to resolve a non-JSON string:', () => {
    beforeAll(() => {
      mockedReadAsync.mockResolvedValue(' ')
    })

    afterAll(() => {
      unmockReadAsync(mockedReadAsync)
    })

    it('Should reject with an error when unable to parse the value!', async () => {
      const received = index(filename)
      const expected = Error(`"${filename}" value cannot be parsed.`)

      await expect(received).rejects.toThrow(expected)
    })
  })

  describe('Without mocking anything:', () => {
    it('Should resolve a parsed JSON object when given a filename with spaces and newlines!', async () => {
      const received = await index(`\n  ${filename}   \n\n`)
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should resolve a parsed JSON object when given a filename without an extension!', async () => {
      const received = await index(`\n  ${filename.replace(EXT, '')}   \n\n`)
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should resolve a parsed JSON object when given a valid filename!', async () => {
      const received = await index(filename)
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should resolve a parsed JSON object when given a filename and `isJSON5` param is set to `false`!', async () => {
      const received = await index(filename, { isJSON5: false })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should resolve a parsed JSON5 object when given a filename and `isJSON5` param is set to `true`!', async () => {
      const received = await index(filename, { isJSON5: true })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should resolve a parsed JSON object when given a filename, `isJSON5` param is set to `false`, and `skippedStacks` param is given a string!', async () => {
      const received = await index(filename, { isJSON5: false, skippedStacks: 'any' })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should resolve a parsed JSON object when given a filename, `isJSON5` param is set to `false`, and `skippedStacks` param is given a list of strings!', async () => {
      const received = await index(filename, { isJSON5: false, skippedStacks: ['any'] })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should resolve a parsed JSON5 object when given a filename, `isJSON5` param is set to `true`, and `skippedStacks` param is given a string!', async () => {
      const received = await index(filename, { isJSON5: true, skippedStacks: 'any' })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should resolve a parsed JSON5 object when given a filename, `isJSON5` param is set to `true`, and `skippedStacks` param is given a list of strings!', async () => {
      const received = await index(filename, { isJSON5: true, skippedStacks: ['any'] })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })
  })
})
