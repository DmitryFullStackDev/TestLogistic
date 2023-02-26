import React from 'react'
import 'react-calendar/dist/Calendar.css'
import './components/datePiker/style.css'
import { Box } from '../../shared'
import { useTypedSelector } from '../../entries'
import { Main, Result } from './components'

export const Home = () => {
  const isResult = useTypedSelector(state => state.distance.isResult)
  const key = isResult ? 'nonActive' : 'active'

  return (
    <Box width="100%" justify="center" padding="100px 0 0 0">
      <Box width="600px" direction="column">
        {isResult ? <Result /> : <Main key={key} />}
      </Box>
    </Box>
  )
}
