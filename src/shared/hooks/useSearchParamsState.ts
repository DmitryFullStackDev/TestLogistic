import { useSearchParams } from 'react-router-dom'

export function useSearchParamsState(
  searchParamName: string,
  defaultValue: string,
): readonly [
  searchParamsState: string,
  setSearchParamsState: (newState: string) => void,
  deleteParam: () => void,
] {
  const [searchParams, setSearchParams] = useSearchParams()

  const acquiredSearchParam = searchParams.get(searchParamName)
  const searchParamsState = acquiredSearchParam ?? defaultValue

  const setSearchParamsState = (newState: string) => {
    const next = Object.assign(
      {},
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [...searchParams.entries()].reduce(
        (o, [key, value]) => ({ ...o, [key]: value }),
        {},
      ),
      { [searchParamName]: newState },
    )
    setSearchParams(next)
  }

  const deleteParam = () => {
    const next = Object.assign(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [...searchParams.entries()].reduce(
        (o, [key, value]) => ({ ...o, [key]: value }),
        {},
      ),
    )

    delete next[searchParamName]
    setSearchParams(next)
  }
  return [searchParamsState, setSearchParamsState, deleteParam]
}
