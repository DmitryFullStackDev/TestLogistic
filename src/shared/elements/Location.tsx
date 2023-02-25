import Downshift from 'downshift'
import React, { FC, useRef, useState } from 'react'
import { Box, Button, CrossIcon, Text } from './'
import { InputWrapper } from './InputWrapper'
import { Input } from './Input'
import { OptionStyled } from './OptionStyled'

type Props = {
  width?: string
  place: any
  getPlaceSearch: any
  setDisplay: any
}

const Location: FC<Props> = ({ width, place, getPlaceSearch, setDisplay }) => {
  const { isPredictionsLoaded, placeSearch, errorPlaceSearch, display } = place

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
    setDisplay(select[0])
    setIsOpen(false)
    inputRef.current.blur()
  }

  const handleInputChange = e => {
    getPlaceSearch(e.target.value)
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
              >
                <CrossIcon />
              </Button>
            </InputWrapper>

            {errorPlaceSearch && (
              <Text color="warning">something went wrong</Text>
            )}
          </Box>

          {isOpen && isPredictionsLoaded && placeSearch.length > 0 ? (
            <Box
              shadow={isBottom ? 'high' : ''}
              position="absolute"
              bottom={!isBottom && '43px'}
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

export default Location
