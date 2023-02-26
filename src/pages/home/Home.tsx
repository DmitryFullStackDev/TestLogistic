import React from 'react'
import 'react-calendar/dist/Calendar.css'
import './components/datePiker/style.css'
import { Counter, DatePiker, Path } from './components'
import { Button } from '../../shared'
import {
  getPlaceSearch,
  setCountError,
  useActions,
  useTypedSelector,
} from '../../entries'

export const Home = () => {
  const counter = useTypedSelector(state => state.counter)
  const place = useTypedSelector(state => state.place)

  const a = useActions({ setCountError, getPlaceSearch })

  const handleNextClick = () => {
    if (Number(counter.count) === 0) {
      a.setCountError(true)
    }
    place.forEach(item => a.getPlaceSearch({ id: item.id, data: item.display }))
  }

  return (
    <>
      <Path />

      <DatePiker />

      <Counter />

      <Button onClick={handleNextClick}>next</Button>
    </>
  )
}
