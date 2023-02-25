import styled from 'styled-components'

type Props = {
  position?: string
  left?: string
  top?: string
  margin?: string
  cursor?: string
  fill?: string
  disabled?: boolean
  alignSelf?: string
  display?: string
  transform?: string
  right?: string
}

export const Svg = styled.svg<Props>`
  width: ${({ width }) => width};

  path {
    fill: ${({ disabled }) => (disabled ? '' : 'currentColor')};
  }

  position: ${({ position }) => position};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor};
  align-self: ${({ alignSelf }) => alignSelf};
  display: ${({ display }) => display};
  transform: ${({ transform }) => transform};
  -webkit-transform: ${({ transform }) => transform};
  -moz-transform: ${({ transform }) => transform};
  -o-transform: ${({ transform }) => transform};
  -ms-transform: ${({ transform }) => transform};
`
