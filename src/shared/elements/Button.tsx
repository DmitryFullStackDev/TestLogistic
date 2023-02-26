import styled from 'styled-components'

type Props = {
  margin?: string
  width?: string
  iconSize?: string
  disabled?: boolean
  position?: string
  underlineIcon?: any
  alignSelf?: string
  fontWeight?: number
  active?: boolean
  textTransform?: string
  background?: string
  right?: string
  top?: string
  colorIcon?: string
  borderRadius?: string
  colorIconHover?: string
  whiteSpace?: string
  shadow?: string
  mobile?: boolean
  tabIndex?: string
  colorLink?: string
  fontSize?: string
  colorLinkHover?: string
}

export const Button = styled.button<Props>`
  position: relative;
  height: 30px;
  font-family: Inter, sans-serif;
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  align-self: ${({ alignSelf }) => alignSelf};
  white-space: ${({ whiteSpace }) => whiteSpace};

  min-width: inherit;
  border-radius: ${({ borderRadius }) => borderRadius || '6px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: 24px;
  text-align: center;
  border: 2px solid transparent;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
`
