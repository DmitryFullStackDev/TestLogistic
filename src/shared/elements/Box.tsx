import styled from 'styled-components'

type Props = {
  padding?: string
  margin?: string
  height?: string
  width?: string
  display?: string
  direction?: string
  justify?: string
  align?: string
  alignSelf?: string
  background?: string
  border?: string
  borderRadius?: string
  borderTop?: string
  borderBottom?: string
  borderColor?: string
  cursor?: string
  textAlign?: string
  color?: string
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  overflow?: string
  shadow?: string
  gap?: string
  zIndex?: string
}

export const Box = styled.div<Props>`
  box-sizing: border-box;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  height: ${({ height }) => height};
  width: ${({ width }) => width};

  display: ${({ display }) => display || 'flex'};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  align-self: ${({ alignSelf }) => alignSelf};
  overflow: ${({ overflow }) => overflow};
  z-index: ${({ zIndex }) => zIndex};

  background: ${({ background, theme }) =>
    theme.color[background] || background};

  border: ${({ border }) => border};
  border-top: ${({ borderTop }) => borderTop};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-color: ${({ borderColor, theme }) =>
    theme.color[borderColor] || borderColor};

  cursor: ${({ cursor }) => cursor};

  text-align: ${({ textAlign }) => textAlign};

  color: ${({ color, theme }) => theme.color[color] || color};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};

  box-shadow: ${({ shadow, theme }) => theme.shadows[shadow] || shadow};
`
