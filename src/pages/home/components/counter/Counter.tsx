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
    <>
      <Box
        border="1px solid"
        borderColor="ui300"
        background="ui50"
        borderRadius="6px"
        shadow="low"
        padding="6px 12px"
        width="fit-content"
        align="center"
        gap="5px"
      >
        <Button onClick={handlePlus}>+</Button>

        <Text>{search}</Text>

        <Button onClick={handleMinus}>-</Button>
      </Box>

      {isError && <div>add passengers</div>}
    </>
  )
}
