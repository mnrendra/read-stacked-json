import type { Options, JSONType } from './types'

import mainAsync from './async'
import mainSync from './sync'

export type {
  Options,
  JSONType
}

export {
  mainAsync as read,
  mainSync as readSync
}
