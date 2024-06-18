import type readStackedFile from '@mnrendra/read-stacked-file'

import type readAsync from '@tests/mocks/readAsync'

type ReadStackedFile = typeof readStackedFile
type ReadAsync = typeof readAsync

const unmockReadAsync = (
  mockedReadAsync: ReadAsync
): void => {
  const { read }: ReadStackedFile = jest.requireActual('@mnrendra/read-stacked-file')
  mockedReadAsync.mockImplementation(read)
}

export default unmockReadAsync
