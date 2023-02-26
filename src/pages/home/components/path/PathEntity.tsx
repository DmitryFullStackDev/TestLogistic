import React, { FC, useEffect } from 'react'
import {
  Box,
  Button,
  CrossIcon,
  Location,
  useSearchParamsState,
} from '../../../../shared'
import {
  addEntity,
  deleteEntity,
  getPlaceSearch,
  setPlaceSearch,
  useActions,
} from '../../../../entries'

type ItemType = {
  id: string
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
  })
  const [search, setSearch, deleteParam] = useSearchParamsState(
    'input' + item.id,
    '',
  )

  const handleDeleteClick = () => {
    deleteParam()
    a.deleteEntity(item.id)
  }

  useEffect(() => {
    setSearch(search)
  }, [])

  return (
    <Box>
      <Location
        setPlaceSearch={a.setPlaceSearch}
        getPlaceSearch={a.getPlaceSearch}
        place={{ ...item, display: search }}
        setDisplay={setSearch}
      />

      {i !== 0 && arr.length !== 2 && (
        <Button margin="2px 10px" onClick={handleDeleteClick}>
          <CrossIcon />
        </Button>
      )}
    </Box>
  )
}
