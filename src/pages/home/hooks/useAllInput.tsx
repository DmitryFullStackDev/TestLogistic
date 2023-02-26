import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const useAllInput = (): readonly [
  allQueryEntries: unknown[][],
  searchParams: URLSearchParams,
] => {
  const [searchParams] = useSearchParams()
  const next = Object.assign(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [...searchParams.entries()].reduce(
      (o, [key, value]) => ({ ...o, [key]: value }),
      {},
    ),
  )
  const allQueryEntries = Object.entries(next)
    .filter(item => item[0].includes('input'))
    .map(item => [item[0].replace('input', ''), item[1]])

  return [allQueryEntries, searchParams]
}
