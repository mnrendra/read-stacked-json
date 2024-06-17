import type { JSONType, Options } from '../types'

import { read } from '@mnrendra/read-stacked-file'

import { parseJSON, validateFilename, validateSkippedStacks } from '../utils'

/**
 * Parse obtained JSON file asynchronously.
 * @param {string} fileName - Targeted JSON file to be obtained.
 * @param {object} [options] - Optional params.
 * @returns {string} Obtained value.
 */
const main = async <ParsedJSON extends JSONType = JSONType>(
  fileName: string,
  {
    isJSON5,
    skippedStacks
  }: Options = {
    isJSON5: false,
    skippedStacks: []
  }
): Promise<ParsedJSON> => {
  // Validate filename.
  const validFileName = validateFilename(fileName)

  // Validate skipped stacks.
  const validSkippedStacks = validateSkippedStacks(skippedStacks)

  // Obtain file data.
  const data = await read(validFileName, { skippedStacks: validSkippedStacks })

  // Parsing data into JSON.
  const parsedData = parseJSON(validFileName, data, isJSON5)

  // Return parsed data.
  return parsedData as ParsedJSON
}

// Export the `main` as the default value.
export default main
