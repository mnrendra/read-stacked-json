import type { SkippedStacks } from '@mnrendra/read-stacked-file'

/**
 * The options interface.
 *
 * @see https://github.com/mnrendra/read-stacked-json#readme
 */
interface Options {
  /**
   * To tell the parser to parse using native `JSON` or `JSON5`.
   *
   * @default false
   *
   * @see https://github.com/mnrendra/read-stacked-json#readme
   */
  isJSON5?: boolean

  /**
   * A name or a list of names of stack traces that need to be skipped.
   *
   * @default []
   *
   * @see https://github.com/mnrendra/read-stacked-json#readme
   */
  skippedStacks?: SkippedStacks

  /**
   * The `Error.stackTraceLimit` property specifies the number of stack frames
   * to be collected by a stack trace.
   *
   * @default 10
   *
   * @see https://github.com/mnrendra/read-stacked-json#readme
   */
  stackTraceLimit?: number

  /**
   * If set to `true`, it will use `process.cwd()` instead of
   * `@mnrendra/stack-trace` to get the target path.
   *
   * @default false
   *
   * @see https://github.com/mnrendra/read-stacked-json#readme
   */
  useCWD?: boolean
}

export default Options
