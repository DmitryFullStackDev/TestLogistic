import React, { useEffect } from 'react'
import { Box, Button } from '../../../../shared'
import { addEntity, useActions, useTypedSelector } from '../../../../entries'
import { useSearchParams } from 'react-router-dom'
import { PathEntity } from './PathEntity'

export const Path = () => {
  const place = useTypedSelector(state => state.place)

  const a = useActions({
    addEntity,
  })

  const [searchParams] = useSearchParams()
  const next = Object.assign(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [...searchParams.entries()].reduce(
      (o, [key, value]) => ({ ...o, [key]: value }),
      {},
    ),
  )
  const allQueryEntries = Object.entries(next)
    .filter(item => item[0].includes('input'))
    .map(item => [item[0].replace('input', ''), item[1]])

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
