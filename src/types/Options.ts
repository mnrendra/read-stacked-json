import type { SkippedStacks } from '@mnrendra/read-stacked-file'

interface Options {
  /**
   * To tell the parser to parse using native `JSON` or `JSON5`.
   *
   * @default false
   */
  isJSON5?: boolean

  /**
   * To skip a stack or a list of stacks when you call `@mnrendra/read-stacked-file`
   * or `@mnrendra/read-stacked-file`. So, you can get the stack(s) of your
   * consumer target file.
   *
   * @default []
   *
   * @see https://github.com/mnrendra/validate-skipped-stacks
   */
  skippedStacks?: SkippedStacks

  /**
   * `@mnrendra/read-stacked-file`'s limit specifies the number of stack frames to be
   * collected by a stack trace.
   *
   * @default 10
   *
   * @see https://github.com/mnrendra/read-stacked-file
   */
  stackTraceLimit?: number

  /**
   * If set to `true`, it will use `process.cwd()` instead of `@mnrendra/read-stacked-file` to get the target path.
   * 
   * @default false
   */
  useCWD?: boolean
}

export default Options
