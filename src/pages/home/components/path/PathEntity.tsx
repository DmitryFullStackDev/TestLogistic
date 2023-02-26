import React from 'react'
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
  setDisplay,
  setPlaceSearch,
  useActions,
} from '../../../../entries'

export const PathEntity = ({ item, i, arr }) => {
  const a = useActions({
    getPlaceSearch,
    setDisplay,
    setPlaceSearch,
    addEntity,
    deleteEntity,
  })
  const [search, setSearch, deleteParam] = useSearchParamsState(
    'input' + item.id,
    '',
  )

  const setDisplayUpdated = value => {
    a.setDisplay(value)
    setSearch(value.data)
  }

  const handleDeleteClick = () => {
    deleteParam()
    a.deleteEntity(item.id)
  }

  return (
    <Box>
      <Location
        setPlaceSearch={a.setPlaceSearch}
        getPlaceSearch={a.getPlaceSearch}
        place={{ ...item, display: search }}
        setDisplay={setDisplayUpdated}
      />

      {i !== 0 && arr.length !== 2 && (
        <Button margin="2px 10px" onClick={handleDeleteClick}>
          <CrossIcon />
        </Button>
      )}
    </Box>
  )
}
