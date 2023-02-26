import React from 'react'
import styled from 'styled-components'

type Props = {
  highlighted: string
}
export const OptionStyled = styled.div<Props>`
  &&& {
    all: revert;
    box-sizing: border-box;

    width: 100%;
    padding: 5px 10px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    outline: none;
    -webkit-tap-highlight-color: transparent;

    cursor: pointer;
    border: none;
    background-color: ${({ theme, highlighted }) =>
      highlighted && theme.color.accent3};
    color: ${({ theme }) => theme.color.primary};
`
