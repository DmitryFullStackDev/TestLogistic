import React, { Fragment } from 'react'
import 'react-calendar/dist/Calendar.css'
import '../components/datePiker/style.css'
import { Box, Text } from '../../../shared'
import { useTypedSelector } from '../../../entries'

export const TotalPath = () => {
  const distanceDate = useTypedSelector(state => state.distance.date)

  const distanceEntries = Object.entries(distanceDate)

  const [firstEntry, ...restEntries] = distanceEntries
  const [firstCity, secondCity] = firstEntry[0].split('-and-')
  const firstDistance = Math.round(Number(firstEntry[1]))

  return (
    <Box margin="0 0 25px 0" display="grid" gridTemplateColumns="9fr 1fr 9fr">
      <div></div>

      <Box
        margin="auto"
        width="11px"
        height="11px"
        border="1.5px solid black"
        borderRadius="99px"
      />

      <Box align="center" gap="5px" margin="auto 0 0 0">
        <Text>{firstCity}</Text>
      </Box>

      <Box
        margin="0 0 0 auto"
        border="1px solid"
        borderColor="accent"
        padding="5px"
        borderRadius="6px"
        shadow="low"
      >
        <Text>{firstDistance} km</Text>
      </Box>

      <Box margin="0 auto" height="100%" borderRight="1px dashed black" />

      <div />
      <div />

      <Box
        margin="5px auto"
        width="11px"
        height="11px"
        border="1.5px solid black"
        borderRadius="99px"
      />

      <Box align="center" gap="5px" margin="auto 0 0 0">
        <Text>{secondCity}</Text>
      </Box>

      {restEntries.map((item, i) => (
        <Fragment key={i}>
          <Box
            margin="0 0 0 auto"
            border="1px solid"
            borderColor="accent"
            padding="5px"
            borderRadius="6px"
            shadow="low"
          >
            <Text>{item[1]} km</Text>
          </Box>

          <Box margin="0 auto" height="100%" borderRight="1px dashed black" />

          <div />
          <div />

          <Box
            margin="5px auto"
            width="11px"
            height="11px"
            border="1.5px solid black"
            borderRadius="99px"
          />

          <Box align="center" gap="5px" margin="auto 0 0 0">
            <Text>{item[0]}</Text>
          </Box>
        </Fragment>
      ))}
    </Box>
  )
}
