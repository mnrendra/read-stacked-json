import { parse } from 'node:path'

import { EXT } from '../consts'

/**
 * Validate filename.
 *
 * @param {string} filename - Filename.
 *
 * @returns {string} Valid filename.
 */
const validateFilename = (
  filename: string
): string => {
  // Trim filename.
  const trimmedFilename = filename.trim()

  // Parsing filename.
  const { base, name, ext } = parse(trimmedFilename)

  // Validate filename.
  const validFilename = ext === EXT ? base : `${name}${EXT}`

  // Return the valid filename.
  return validFilename
}

// Export the `validateFilename` as the default value.
export default validateFilename
