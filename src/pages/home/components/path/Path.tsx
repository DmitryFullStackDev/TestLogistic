import React, { useEffect } from 'react'
import { Box, Button } from '../../../../shared'
import { addEntity, useActions, useTypedSelector } from '../../../../entries'
import { PathEntity } from './PathEntity'
import { useAllInput } from '../../hooks/useAllInput'

export const Path = () => {
  const place = useTypedSelector(state => state.place)
  const [allQueryEntries] = useAllInput()

  const a = useActions({
    addEntity,
  })

  useEffect(() => {
    allQueryEntries.forEach(item => a.addEntity(item[0]))
  }, [])

  return (
    <Box width="100%" direction="column" gap="20px">
      {place.map((item, i, arr) => (
        <PathEntity key={item.id} item={item} i={i} arr={arr} />
      ))}

      <Button
        onClick={() =>
          a.addEntity(
            Math.random() +
              Math.random() +
              Math.random() +
              Math.random() +
              place.length,
          )
        }
      >
        add destination
      </Button>
    </Box>
  )
}
