import mainAsync from './async'
import mainSync from './sync'

export {
  type SkippedStacks,
  type ValidSkippedStacks,
  validateSkippedStacks
} from '@mnrendra/read-stacked-file'

export type {
  Options,
  JSONType
} from './types'

export {
  mainAsync as read,
  mainSync as readSync
}
