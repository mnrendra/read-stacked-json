import { basename } from 'node:path'

import JSON5 from 'json5'

/**
 * Parsing stringified-JSON.
 *
 * @param {string} stringifiedJSON - Stringified-JSON.
 * @param {string} filename - Stringified-JSON filename.
 * @param {boolean} [isJSON5] - Is JSON5 param.
 *
 * @returns {Record<string, any>} Parsed JSON.
 */
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

// Export the `parseJSON` as the default value.
export default parseJSON
