import React from 'react'
import 'react-calendar/dist/Calendar.css'
import './components/datePiker/style.css'
import { Counter, DatePiker, Path } from './components'
import { Button } from '../../shared'
import {
  getDistance,
  getPlaceSearch,
  setCountError,
  setErrorPlaceSearch,
  useActions,
  useTypedSelector,
} from '../../entries'
import { useSearchParams } from 'react-router-dom'

export const Home = () => {
  const a = useActions({
    setCountError,
    getPlaceSearch,
    setErrorPlaceSearch,
    getDistance,
  })

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

  const allQueryEntriesReversed = allQueryEntries.map(item => item.reverse())

  const handleNextClick = () => {
    let isError = false
    if (!searchParams.get('counter') || searchParams.get('counter') === '0') {
      a.setCountError(true)
      isError = true
    }
    if (!searchParams.get('inputorigin')) {
      a.setErrorPlaceSearch({ id: 'origin', data: true })
      isError = true
    }
    if (!searchParams.get('inputdestination')) {
      a.setErrorPlaceSearch({ id: 'destination', data: true })
      isError = true
    }
    allQueryEntries.forEach(item => {
      if (item[1] === '') {
        a.setErrorPlaceSearch({ id: Number(item[0]), data: true })
        isError = true
      }
    })
    if (!isError) {
      a.getDistance({ data: allQueryEntriesReversed })
    }
  }

  const f = useTypedSelector(state => state.distance.date)

  return (
    <>
      <Path />

      <DatePiker />

      <Counter />

      <Button onClick={handleNextClick}>next</Button>
    </>
  )
}
