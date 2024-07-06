import type { SkippedStacks } from '.'

interface Options {
  isJSON5?: boolean
  skippedStacks?: SkippedStacks
  stackTraceLimit?: number
}

export default Options
