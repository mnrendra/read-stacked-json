import validateSkippedStacks from '@mnrendra/validate-skipped-stacks'

import mainAsync from './async'
import mainSync from './sync'

export type {
  Options,
  JSONType,
  SkippedStacks,
  ValidSkippedStacks
} from './types'

export {
  mainAsync as read,
  mainSync as readSync,
  validateSkippedStacks
}
