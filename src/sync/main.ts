import type { JSONType, Options } from '../types'

import { readSync } from '@mnrendra/read-stacked-file'
import validateSkippedStacks from '@mnrendra/validate-skipped-stacks'

import { SKIPPED_STACK } from '../consts'

import { parseJSON, validateFilename } from '../utils'

/**
 * Parse obtained JSON file synchronously.
 *
 * @param {string} fileName - Targeted JSON file to be obtained.
 * @param {object} [options] - Optional params.
 *
 * @returns {string} Obtained value.
 */
const main = <ParsedJSON extends JSONType = JSONType>(
  fileName: string,
  {
    isJSON5,
    skippedStacks
  }: Options = {
    isJSON5: false,
    skippedStacks: []
  }
): ParsedJSON => {
  // Validate filename.
  const validFilename = validateFilename(fileName)

  // Validate skipped stacks.
  const validSkippedStacks = validateSkippedStacks(SKIPPED_STACK, skippedStacks)

  // Obtain file data.
  const data = readSync(validFilename, { skippedStacks: validSkippedStacks })

  // Parsing data into JSON.
  const parsedData = parseJSON(data, validFilename, isJSON5)

  // Return parsed data.
  return parsedData as ParsedJSON
}

// Export the `main` as the default value.
export default main
