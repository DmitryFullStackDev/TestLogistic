import Downshift from 'downshift'
import React, { FC, useRef, useState } from 'react'
import {
  Box,
  Button,
  CrossIcon,
  GetPlaceSearchType,
  Input,
  InputWrapper,
  OptionStyled,
  PlacePayloadType,
  SpinnerIcon,
  Text,
  useTimeout,
} from '../'
import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit'

type PlaceType = {
  id: number
  placeSearch: any[]
  isLoading: boolean
  isPredictionsLoaded: boolean
  errorPlaceSearch: boolean
  display: string
}

type Props = {
  width?: string
  place: PlaceType
  setErrorPlaceSearch: ActionCreatorWithOptionalPayload<
    PlacePayloadType<boolean>,
    string
  >
  getPlaceSearch: ActionCreatorWithOptionalPayload<GetPlaceSearchType, string>
  setDisplay: (opt: string) => void
  setPlaceSearch: ActionCreatorWithOptionalPayload<
    PlacePayloadType<string[]>,
    'place/setPlaceSearch'
  >
}

export const Location: FC<Props> = ({
  width,
  place,
  getPlaceSearch,
  setDisplay,
  setPlaceSearch,
  setErrorPlaceSearch,
}) => {
  const {
    isPredictionsLoaded,
    placeSearch,
    errorPlaceSearch,
    display,
    id,
    isLoading,
  } = place

  const [isOpen, setIsOpen] = useState(false)
  const [isDebounce, setIsDebounce] = useState(false)

  const inputRef = useRef(null)

  const topDistance =
    window.pageYOffset + inputRef.current?.getBoundingClientRect().top > 300
  const bottomDistance =
    window.innerHeight - inputRef.current?.getBoundingClientRect().bottom > 300
  const isBottom = bottomDistance || (!topDistance && !bottomDistance)

  const handleOuterClick = () => {
    setIsOpen(false)
  }

  const handleDownShiftChange = select => {
    setDisplay(select[0])
    setIsOpen(false)
    inputRef.current.blur()
    setErrorPlaceSearch({ data: false, id })
  }

  const handleDebounceComplete = () => setIsDebounce(false)

  const getDebouncePlaceSearchTimer = useTimeout(
    getPlaceSearch,
    800,
    handleDebounceComplete,
  )

  const getPlaceSearchTimer = e => {
    setIsDebounce(true)
    getDebouncePlaceSearchTimer(e)
  }

  const handleInputChange = e => {
    getPlaceSearchTimer({ data: e.target.value, id })
    setDisplay(e.target.value)
  }

  const handelInputFocus = () => setIsOpen(true)

  const handleInputKeyDown = e => {
    if (e.keyCode === 27) {
      setIsOpen(false)
      inputRef.current.blur()
    }
    if (e.key === 'Tab') {
      setIsOpen(false)
    }
  }

  const handleCrossClick = () => {
    setDisplay('')
    setIsOpen(false)
    setPlaceSearch({ data: [], id })
    setErrorPlaceSearch({ data: false, id })
    inputRef.current.focus()
  }

  return (
    <Downshift
      onChange={handleDownShiftChange}
      onOuterClick={handleOuterClick}
      inputValue={display}
      isOpen={isOpen}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        getRootProps,
      }) => (
        <Box
          position="relative"
          width={width || '33%'}
          {...getRootProps({}, { suppressRefError: true })}
        >
          <Box direction="column" width="100%">
            <InputWrapper isError={errorPlaceSearch}>
              <Input
                inputMode="text"
                value={display}
                {...getInputProps({
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  ref: inputRef,
                  onChange: handleInputChange,
                  onKeyDown: handleInputKeyDown,
                  onFocus: handelInputFocus,
                })}
              />

              <Button
                type="icon"
                iconSize="20px"
                onClick={handleCrossClick}
                position="absolute"
                right="3px"
                top="Calc(50% - 10px)"
                disabled={isLoading}
              >
                {isLoading || isDebounce ? <SpinnerIcon /> : <CrossIcon />}
              </Button>
            </InputWrapper>

            {errorPlaceSearch && (
              <Text color="warning">choose proper city</Text>
            )}
          </Box>

          {isOpen && isPredictionsLoaded && placeSearch.length > 0 ? (
            <Box
              shadow={isBottom ? 'high' : ''}
              position="absolute"
              bottom={!isBottom && '38px'}
              top={isBottom && '38px'}
              borderRadius={isBottom ? '0 0 6px 6px' : '6px 6px 0 0'}
              borderTop={isBottom && 'none'}
              borderBottom={!isBottom && 'none'}
              background="inverse"
              direction="column"
              zIndex="2"
              width="100%"
              maxHeight="300px"
              overflow="auto"
              borderColor="accent"
              border="1px solid"
              {...getMenuProps()}
            >
              {placeSearch.map((item, index) => (
                <OptionStyled
                  key={index}
                  highlighted={highlightedIndex === index}
                  {...getItemProps({
                    index,
                    item,
                  })}
                >
                  {item[0]}
                </OptionStyled>
              ))}
            </Box>
          ) : null}
        </Box>
      )}
    </Downshift>
  )
}
