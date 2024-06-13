import filename from '@tests/stubs/filename'

import parseJSON from './parseJSON'

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
