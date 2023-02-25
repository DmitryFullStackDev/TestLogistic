import React from 'react'
import styled from 'styled-components'

type Props = {
  isError: boolean
  margin?: string
  width?: string
}

export const InputWrapper = styled.div<Props>`
  box-sizing: border-box;

  margin: ${({ margin }) => margin};
  background: ${({ theme }) => theme.color.ui50};
  position: relative;
  border-radius: 6px;
  border: 1px solid
    ${({ theme, isError }) => (isError ? 'red' : theme.color.ui300)};
  box-shadow: ${({ theme }) => theme.shadows.low};
  padding: 6px 12px;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || '100%'};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    background: ${({ theme }) => theme.color.inverse};
  }

  &:focus-within {
    border-radius: 6px;
    border: 1px solid
      ${({ theme, isError }) => (isError ? 'red' : theme.color.accent)};
  }
`
