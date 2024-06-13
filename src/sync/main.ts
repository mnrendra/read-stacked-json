import type { JSONType, Options } from '../types'

import { readSync } from '@mnrendra/read-stacked-file'

import { parseJSON, validateFilename } from '../utils'

/**
 * Parse obtained JSON file synchronously.
 * @param {string} fileName - Targeted JSON file to be obtained.
 * @param {object} [options] - Optional params.
 * @returns {string} Obtained value.
 */
const main = <ParsedJSON extends JSONType = JSONType>(
  fileName: string,
  {
    isJSON5
  }: Options = {
    isJSON5: false
  }
): ParsedJSON => {
  // Validate filename.
  const validFileName = validateFilename(fileName)

  // Obtain file data.
  const data = readSync(validFileName)

  // Parsing data into JSON.
  const parsedData = parseJSON(validFileName, data, isJSON5)

  // Return parsed data.
  return parsedData as ParsedJSON
}

// Export the `main` as the default value.
export default main
