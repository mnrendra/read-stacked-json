import type { JSONType, Options } from '../types'

import { read, validateSkippedStacks } from '@mnrendra/read-stacked-file'

import { SKIPPED_STACK } from '../consts'

import { parseJSON, validateFilename } from '../utils'

/**
 * Parse the stacked JSON file asynchronously.
 *
 * @param {string} fileName - Targeted JSON file to be obtained.
 * @param {Options} [options] - Optional params.
 *
 * @returns {Promise<Record<string, any>>} Obtained value.
 *
 * @see https://github.com/mnrendra/read-stacked-json#readme
 */
const main = async <ParsedJSON extends JSONType = JSONType>(
  fileName: string,
  {
    isJSON5 = false,
    skippedStacks = [],
    stackTraceLimit = 10,
    useCWD = false
  }: Options = {}
): Promise<ParsedJSON> => {
  // Validate filename.
  const validFilename = validateFilename(fileName)

  // Validate skipped stacks.
  const validSkippedStacks = validateSkippedStacks(SKIPPED_STACK, skippedStacks)

  // Obtain file data.
  const data = await read(validFilename, {
    skippedStacks: validSkippedStacks,
    stackTraceLimit,
    useCWD
  })

  // Parsing data into JSON.
  const parsedData = parseJSON(data, validFilename, isJSON5)

  // Return parsed data.
  return parsedData as ParsedJSON
}

export default main
