import type { JSONType, Options } from '../types'

import { readSync, validateSkippedStacks } from '@mnrendra/read-stacked-file'

import { SKIPPED_STACK } from '../consts'

import { parseJSON, validateFilename } from '../utils'

/**
 * Parse obtained JSON file synchronously.
 *
 * @param {string} fileName - Targeted JSON file to be obtained.
 * @param {Options} [options] - Optional params.
 *
 * @returns {string} Obtained value.
 */
const main = <ParsedJSON extends JSONType = JSONType>(
  fileName: string,
  {
    isJSON5,
    skippedStacks,
    stackTraceLimit
  }: Options = {
    isJSON5: false,
    skippedStacks: [],
    stackTraceLimit: 10
  }
): ParsedJSON => {
  // Validate filename.
  const validFilename = validateFilename(fileName)

  // Validate skipped stacks.
  const validSkippedStacks = validateSkippedStacks(SKIPPED_STACK, skippedStacks)

  // Obtain file data.
  const data = readSync(validFilename, {
    skippedStacks: validSkippedStacks,
    stackTraceLimit
  })

  // Parsing data into JSON.
  const parsedData = parseJSON(data, validFilename, isJSON5)

  // Return parsed data.
  return parsedData as ParsedJSON
}

// Export `main` as the default value.
export default main
