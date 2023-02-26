import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './style.css'
import {
  Box,
  formatDate,
  OutsiderClicker,
  Text,
  useSearchParamsState,
} from '../../../../shared'

export const DatePiker = () => {
  const initDate = String(new Date().getTime() + 86400000)
  const [search, setSearch] = useSearchParamsState('date', initDate)
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = value => {
    setSearch(String(value.getTime()))
  }

  useEffect(() => {
    setSearch(initDate)
  }, [])

  return (
    <Box position="relative">
      <Box direction="column" gap="5px">
        <Text>Date</Text>
        <Box
          border="1px solid"
          borderColor="ui300"
          background="ui50"
          borderRadius="6px"
          shadow="low"
          padding="6px 12px"
          width="fit-content"
          align="center"
          gap="10px"
          cursor="pointer"
          onClick={() => setIsOpen(p => !p)}
        >
          <Text>{formatDate(search)}</Text>
        </Box>
      </Box>

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
