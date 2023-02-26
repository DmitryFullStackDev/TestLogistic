import React from 'react'
import { Box, Button, Text, useSearchParamsState } from '../../../../shared'
import {
  setCountError,
  useActions,
  useTypedSelector,
} from '../../../../entries'

export const Counter = () => {
  const isError = useTypedSelector(state => state.counter.isError)
  const [search, setSearch] = useSearchParamsState('counter', '0')

  const a = useActions({ setCountError })

  const handlePlus = () => {
    const result = String(Number(search) + 1)
    setSearch(result)
    a.setCountError(false)
  }

  const handleMinus = () => {
    if (Number(search) > 0) {
      const result = String(Number(search) - 1)
      setSearch(result)
      a.setCountError(false)
    }
  }

  return (
    <Box direction="column" gap="5px">
      <Text>Passengers</Text>
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
      >
        <Button type="secondary" onClick={handleMinus}>
          -
        </Button>

        <Text width="15px">{search}</Text>

        <Button type="primary" onClick={handlePlus}>
          +
        </Button>
      </Box>

      {isError && <Text color="warning">add passengers</Text>}
    </Box>
  )
}
