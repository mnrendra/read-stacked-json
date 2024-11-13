import { parse } from 'node:path'

import { EXT } from '../consts'

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

export default validateFilename
