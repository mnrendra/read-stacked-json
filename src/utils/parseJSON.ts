import { basename } from 'node:path'

import JSON5 from 'json5'

const parseJSON = (
  stringifiedJSON: string,
  filename: string,
  isJSON5?: boolean
): Record<string, any> => {
  // Try-catch to handle parsing errors.
  try {
    // Parsing based on JSON type.
    const parsedJSON = isJSON5 === true
      ? JSON5.parse(stringifiedJSON)
      : JSON.parse(stringifiedJSON)

    // Return the parsed JSON.
    return parsedJSON
  } catch (err) {
    // Throw an error when the data cannot be parsed.
    throw new Error(`"${basename(filename)}" value cannot be parsed.`)
  }
}

export default parseJSON
