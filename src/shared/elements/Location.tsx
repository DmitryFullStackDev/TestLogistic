import Downshift from 'downshift'
import React, { FC, useRef, useState } from 'react'
import {
  Box,
  Button,
  CrossIcon,
  Input,
  InputWrapper,
  OptionStyled,
  SpinnerIcon,
  Text,
  useTimeout,
} from '../'

type Props = {
  width?: string
  place: any
  getPlaceSearch: any
  setDisplay: any
  setPlaceSearch: any
}

export const Location: FC<Props> = ({
  width,
  place,
  getPlaceSearch,
  setDisplay,
  setPlaceSearch,
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
    setDisplay({ data: select[0], id })
    setIsOpen(false)
    inputRef.current.blur()
  }

  const getPlaceSearchTimer = useTimeout(getPlaceSearch, 800)

  const handleInputChange = e => {
    getPlaceSearchTimer({ data: e.target.value, id })
    setDisplay({ data: e.target.value, id })
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
    setDisplay({ data: '', id })
    setIsOpen(false)
    setPlaceSearch({ data: [], id })
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
                onClick={handleCrossClick}
                position="absolute"
                right="3px"
                top="3px"
                disabled={isLoading}
              >
                {isLoading ? <SpinnerIcon /> : <CrossIcon />}
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
