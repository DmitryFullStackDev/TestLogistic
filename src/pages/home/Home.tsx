import React from 'react'
import { Box } from '../../shared'
import Location from '../../shared/elements/Location'
import { useActions, useTypedSelector } from '../../entries'
import { getPlaceSearch, setDisplay } from '../../entries/location/slices'

export const Home = () => {
  const a = useActions({ getPlaceSearch, setDisplay })
  const place = useTypedSelector(state => state.place)

  return (
    <>
      <Box width="100%" direction="row" align="center" margin="0 0 50px 0">
        <Location
          getPlaceSearch={a.getPlaceSearch}
          place={place}
          setDisplay={a.setDisplay}
        />
      </Box>
    </>
  )
}
