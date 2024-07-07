import { EXT } from '@/consts'

import filename from '@tests/dummies/filename'
import mockedReadSync from '@tests/mocks/readSync'
import unmockReadSync from '@tests/unmocks/readSync'

import main from './main'

jest.mock('@mnrendra/read-stacked-file')

describe('Test `main` sync:', () => {
  describe('By mocking `readSync` to return a non-JSON string:', () => {
    beforeAll(() => {
      mockedReadSync.mockReturnValue(' ')
    })

    afterAll(() => {
      unmockReadSync(mockedReadSync)
    })

    it('Should throw an error when unable to parse the value!', () => {
      const received = (): void => { main(filename) }
      const expected = Error(`"${filename}" value cannot be parsed.`)

      expect(received).toThrow(expected)
    })
  })

  describe('Without mocking anything:', () => {
    it('Should return a parsed JSON object when given a filename with spaces and newlines!', () => {
      const received = main(`\n  ${filename}   \n\n`)
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a parsed JSON object when given a filename without an extension!', () => {
      const received = main(`\n  ${filename.replace(EXT, '')}   \n\n`)
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a parsed JSON object when given a valid filename!', () => {
      const received = main(filename)
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a parsed JSON object when given a filename and `isJSON5` param is set to `false`!', () => {
      const received = main(filename, { isJSON5: false })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a parsed JSON5 object when given a filename and `isJSON5` param is set to `true`!', () => {
      const received = main(filename, { isJSON5: true })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a parsed JSON object when given a filename, `isJSON5` param is set to `false`, and `skippedStacks` param is given a string!', () => {
      const received = main(filename, { isJSON5: false, skippedStacks: 'any' })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a parsed JSON object when given a filename, `isJSON5` param is set to `false`, and `skippedStacks` param is given a list of strings!', () => {
      const received = main(filename, { isJSON5: false, skippedStacks: ['any'] })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a parsed JSON5 object when given a filename, `isJSON5` param is set to `true`, and `skippedStacks` param is given a string!', () => {
      const received = main(filename, { isJSON5: true, skippedStacks: 'any' })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a parsed JSON5 object when given a filename, `isJSON5` param is set to `true`, and `skippedStacks` param is given a list of strings!', () => {
      const received = main(filename, { isJSON5: true, skippedStacks: ['any'] })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })
  })
})
