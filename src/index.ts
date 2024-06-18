import type { SkippedStacks } from '@mnrendra/validate-skipped-stacks'

import type { Options, JSONType } from './types'

import mainAsync from './async'
import mainSync from './sync'

export type {
  Options,
  JSONType,
  SkippedStacks
}

export {
  mainAsync as read,
  mainSync as readSync
}
