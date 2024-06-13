import type readStackedFile from '@mnrendra/read-stacked-file'
import type readSync from '@tests/mocks/readSync'

type ReadSync = typeof readSync
type ReadStackedFile = typeof readStackedFile

const unmockReadSync = (mockedReadSync: ReadSync): void => {
  const { readSync }: ReadStackedFile = jest.requireActual('@mnrendra/read-stacked-file')
  mockedReadSync.mockImplementation(readSync)
}

export default unmockReadSync
