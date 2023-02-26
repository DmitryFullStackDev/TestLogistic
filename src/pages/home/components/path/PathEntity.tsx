import React, { FC, useEffect } from 'react'
import {
  Box,
  Button,
  CrossIcon,
  Location,
  Text,
  useSearchParamsState,
} from '../../../../shared'
import {
  addEntity,
  deleteEntity,
  getPlaceSearch,
  setErrorPlaceSearch,
  setPlaceSearch,
  useActions,
} from '../../../../entries'

type ItemType = {
  id: number
  placeSearch: any[]
  isLoading: boolean
  isPredictionsLoaded: boolean
  errorPlaceSearch: boolean
}

type Props = {
  item: ItemType
  i: number
  arr: ItemType[]
}

export const PathEntity: FC<Props> = ({ item, i, arr }) => {
  const a = useActions({
    getPlaceSearch,
    setPlaceSearch,
    addEntity,
    deleteEntity,
    setErrorPlaceSearch,
  })
  const [search, setSearch, deleteParam] = useSearchParamsState(
    'input' + item.id,
    '',
  )

  const title = i === 0 ? 'City of origin' : 'City of destination'

  const handleDeleteClick = () => {
    deleteParam()
    a.deleteEntity(item.id)
  }

  useEffect(() => {
    setSearch(search)
  }, [])

  return (
    <Box direction="column" gap="5px">
      <Text>{title}</Text>
      <Box gap="10px" align="start">
        <Location
          width="85%"
          setErrorPlaceSearch={a.setErrorPlaceSearch}
          setPlaceSearch={a.setPlaceSearch}
          getPlaceSearch={a.getPlaceSearch}
          place={{ ...item, display: search }}
          setDisplay={setSearch}
        />
        {i !== 0 && arr.length !== 2 && (
          <Button
            margin="10px 0 0 0"
            iconSize="15px"
            type="icon"
            onClick={handleDeleteClick}
          >
            <CrossIcon />
          </Button>
        )}
      </Box>
    </Box>
  )
}
