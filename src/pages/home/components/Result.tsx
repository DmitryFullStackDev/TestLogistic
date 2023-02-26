import React from 'react'
import 'react-calendar/dist/Calendar.css'
import '../components/datePiker/style.css'
import { Box, Button, formatDate, Text } from '../../../shared'
import { setIsResult, useActions, useTypedSelector } from '../../../entries'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import { TotalPath } from './TotalPath'

const Span = styled.span`
  color: #8e44ad;
  font-weight: bold;
`

export const Result = () => {
  const distanceDate = useTypedSelector(state => state.distance.date)
  const [searchParams] = useSearchParams()
  const a = useActions({ setIsResult })

  const counter = searchParams.get('counter')
  const date = searchParams.get('date')

  const distanceEntries = Object.entries(distanceDate)
  const totalDistance = distanceEntries.reduce(
    (a, c) => Number(a) + Number(c[1]),
    0,
  )
  const roundedTotal = Math.round(totalDistance)

  const handleBackClick = () => {
    a.setIsResult(false)
  }

  return (
    <>
      <TotalPath />

      <Box direction="column" gap="8px" align="center">
        <Text>
          <Span>{roundedTotal} km</Span> is total distance
        </Text>
        <Text>
          <Span>{counter}</Span> passengers
        </Text>
        <Text>
          <Span>{formatDate(date)}</Span>
        </Text>
      </Box>
      <Button
        height="40px"
        type="primary"
        margin="35px auto 0 auto"
        onClick={handleBackClick}
      >
        Back
      </Button>
    </>
  )
}
