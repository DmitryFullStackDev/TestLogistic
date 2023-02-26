import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './style.css'
import {
  Box,
  Button,
  OutsiderClicker,
  useSearchParamsState,
} from '../../../../shared'

export const DatePiker = () => {
  const initDate = String(new Date().getTime() + 86400000)
  const [search, setSearch] = useSearchParamsState('date', initDate)
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = value => {
    setSearch(String(value.getTime()))
  }

  const formatDateFn = date => {
    const today = new Date(Number(date))
    const yyyy = today.getFullYear()
    let mm: string | number = today.getMonth() + 1
    let dd: string | number = today.getDate()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    return dd + '/' + mm + '/' + yyyy
  }

  return (
    <Box position="relative">
      <Button onClick={() => setIsOpen(p => !p)}>{formatDateFn(search)}</Button>

      {isOpen && (
        <OutsiderClicker func={() => setIsOpen(false)}>
          <Calendar
            className="calendar"
            tileDisabled={({ date }) => date < new Date()}
            onChange={handleChange}
            value={new Date(Number(search))}
          />
        </OutsiderClicker>
      )}
    </Box>
  )
}
