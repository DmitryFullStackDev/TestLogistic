import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  children: any
  type?:
    | 'h50'
    | 'h40'
    | 'h32'
    | 'h24'
    | 'h18'
    | 'h16'
    | 'h15'
    | 'buttonText'
    | 'body1'
    | 'body2'
    | 'body2Emp'
    | 'link'
    | 'caption'
    | 'micro'
    | 'underline'
    | 'bubble'
    | 'subtitle1'
  margin?: string
  width?: string
  whiteSpace?: string
  textAlign?: string
  maxWidth?: string
  minWidth?: string
  userSelect?: string
  color?:
    | 'primary'
    | 'disabled'
    | 'accent'
    | 'accent2'
    | 'inverse'
    | 'secondary'
    | 'warning'
    | 'green'
}

const TextStyled = styled.div<Props>`
  white-space: ${({ whiteSpace }) => whiteSpace || 'nowrap'};

  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};

  color: ${({ color, theme }) => theme.color[color] || 'black'};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  text-size-adjust: none;
  user-select: ${({ userSelect }) => userSelect};

  &.h50 {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 50px;
    line-height: 50px;
    letter-spacing: -0.6px;
  }
  &.h40 {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -0.6px;
  }
  &.h32 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.6px;
  }
  &.h24 {
    font-size: 24px;
  }
  &.h18 {
    font-size: 18px;
  }
  &.h16 {
    font-size: 16px;
  }
  &.h15 {
    font-size: 15px;
  }
  &.buttonText {
    font-weight: 600;
    font-size: 16px;
  }
  &.body1 {
    font-weight: normal;
    font-size: 16px;
  }
  &.body2 {
    font-weight: normal;
    font-size: 14px;
  }
  &.body2Emp {
    font-weight: 600;
    font-size: 14px;
  }
  &.link {
    font-weight: 500;
    font-size: 14px;
  }
  &.caption {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  &.micro {
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.64px;
    text-transform: uppercase;
  }
  &.underline {
    font-size: 16px;
    border-bottom: 1px solid currentColor;
    line-height: 16px;
    color: currentColor;
  }
  &.bubble {
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.64px;
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.color.accent};
    padding: 2px 4px;
    width: fit-content;
    border-radius: 6px;
  }
  &.subtitle1 {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.24px;
  }
`

export const Text: FC<Props> = ({
  textAlign,
  margin,
  color,
  children,
  maxWidth,
  width,
  whiteSpace,
  type = 'body2',
  minWidth,
  userSelect,
}) => (
  <TextStyled
    minWidth={minWidth}
    textAlign={textAlign}
    whiteSpace={whiteSpace}
    width={width}
    color={color}
    userSelect={userSelect}
    className={type}
    margin={margin}
    maxWidth={maxWidth}
  >
    {children}
  </TextStyled>
)
