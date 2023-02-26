import React, { FC, useEffect, useRef } from 'react'
import { Box } from '../elements'

type Props = {
  func: () => void
  children: React.ReactElement
}

export const OutsiderClicker: FC<Props> = ({ children, func }) => {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        func()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <Box position="absolute" top="70px" ref={wrapperRef}>
      {children}
    </Box>
  )
}
