import React from 'react'
import 'react-calendar/dist/Calendar.css'
import '../components/datePiker/style.css'
import { Counter, DatePiker, Path } from '../components'
import { Box, Button } from '../../../shared'
import {
  getDistance,
  getPlaceSearch,
  setCountError,
  setErrorPlaceSearch,
  useActions,
  useTypedSelector,
} from '../../../entries'
import { useAllInput } from '../hooks/useAllInput'

export const Main = () => {
  const arrPlace = useTypedSelector(state => state.place)
  const [allQueryEntries, searchParams] = useAllInput()
  const a = useActions({
    setCountError,
    getPlaceSearch,
    setErrorPlaceSearch,
    getDistance,
  })

  const allQueryEntriesReversed = allQueryEntries.map(item => item.reverse())
  const arrIdPlace = arrPlace.map(item => item.id)
  const sortedCities = allQueryEntriesReversed.sort(
    (a, b) =>
      arrIdPlace.indexOf(Number(a[1])) - arrIdPlace.indexOf(Number(b[1])),
  )

  const handleNextClick = () => {
    let isError = false
    if (!searchParams.get('counter') || searchParams.get('counter') === '0') {
      a.setCountError(true)
      isError = true
    }
    if (!searchParams.get('input1')) {
      a.setErrorPlaceSearch({ id: 1, data: true })
      isError = true
    }
    if (!searchParams.get('input2')) {
      a.setErrorPlaceSearch({ id: 2, data: true })
      isError = true
    }
    allQueryEntries.forEach(item => {
      if (item[1] === '') {
        a.setErrorPlaceSearch({ id: Number(item[0]), data: true })
        isError = true
      }
    })
    if (!isError) {
      a.getDistance({ data: sortedCities })
    }
  }

  return (
    <>
      <Box gap="40px" justify="space-between">
        <Path />

        <Box direction="column" gap="20px">
          <Counter />

          <DatePiker />
        </Box>
      </Box>

      <Button
        height="40px"
        type="primary"
        margin="35px auto 0 auto"
        onClick={handleNextClick}
      >
        Submit
      </Button>
    </>
  )
}
