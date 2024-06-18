import type readStackedFile from '@mnrendra/read-stacked-file'

import type readSync from '@tests/mocks/readSync'

type ReadStackedFile = typeof readStackedFile
type ReadSync = typeof readSync

const unmockReadSync = (
  mockedReadSync: ReadSync
): void => {
  const { readSync }: ReadStackedFile = jest.requireActual('@mnrendra/read-stacked-file')
  mockedReadSync.mockImplementation(readSync)
}

export default unmockReadSync
