import React, { FC, MouseEvent, ReactElement, TouchEvent } from 'react'
import styled from 'styled-components'

const ButtonElem: any = styled.button`
  &&& {
    all: revert;
    position: relative;
    font-family: Inter, sans-serif;
    width: ${({ width }: any) => width};
    margin: ${({ margin }: any) => margin || '0'};
    cursor: ${({ disabled }: any) => (disabled ? 'default' : 'pointer')};
    align-self: ${({ alignSelf }: any) => alignSelf};
    white-space: ${({ whiteSpace }: any) => whiteSpace};

    min-width: inherit;
    border-radius: ${({ borderRadius }: any) => borderRadius || '6px'};
    font-style: normal;
    font-weight: ${({ fontWeight }: any) => fontWeight || 600};
    font-size: ${({ fontSize }: any) => fontSize || '16px'};
    text-align: center;
    border: 2px solid transparent;
    box-shadow: none;
    -webkit-tap-highlight-color: transparent;
    position: ${({ position }: any) => position};
    top: ${({ top }: any) => top};
    right: ${({ right }: any) => right};

    text-transform: ${({ textTransform }: any) => textTransform};

    &:focus {
      border-color: ${({ theme, mouseDown }: any) =>
        mouseDown ? 'transparent' : theme.color.semMain};
      outline: ${({ isOutline, theme }: any) =>
        isOutline ? '1px solid ' + theme.color.accent : 'none'};
    }

    &.primary {
      height: ${({ height }: any) => height || '24px'};
      background: ${({ theme, disabled }) => {
        const color = theme.color.actionColor
          ? theme.color.actionColor
          : theme.color.accentSecondary
        return disabled ? theme.color.ui50 : color
      }};
      color: ${({ theme, disabled }) =>
        disabled ? theme.color.disabled : theme.color.inverse};
      box-shadow: ${({ theme, shadow }: any) => shadow || theme.shadows.low};
      transition: all 0.25s ease;
      border: none;

      &:hover {
        background: ${({ theme, disabled }) =>
          theme.color.actionColor2
            ? disabled || theme.color.actionColor2
            : disabled || theme.color.accentSecondary2};
      }

      &:focus {
        background: ${({ theme }) =>
          theme.color.actionColor
            ? theme.color.actionColor
            : theme.color.accentSecondary};
      }

      &:active {
        background: ${({ theme }) =>
          theme.color.actionColor2
            ? theme.color.actionColor2
            : theme.color.accentSecondary2};
      }
    }

    &.secondary {
      height: ${({ height }: any) => height || '24px'};
      background: ${({ theme, disabled }) =>
        disabled ? theme.color.ui50 : theme.color.inverse};
      color: ${({ theme, disabled }) =>
        disabled ? theme.color.disabled : theme.color.primary};
      box-shadow: ${({ theme }) => theme.shadows.low};
      transition: all 0.25s ease;
      border: none;

      &:hover {
        background: ${({ theme, disabled }) => disabled || theme.color.ui50};
      }

      &:focus {
        background: ${({ theme }) => theme.color.inverse};
      }

      &:active {
        background: ${({ theme }) => theme.color.ui50};
      }
    }

    &.icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: ${({ iconSize }: any) => iconSize || '48px'};
      width: ${({ iconSize }: any) => iconSize || '48px'};
      padding: 0;
      background: none;
      color: ${({ theme, colorIcon }: any) =>
        theme.color[colorIcon] || theme.color.primaryIcon};
      transition: all 0.25s ease;
      border: none;

      &:hover {
        color: ${({ theme, disabled, colorIconHover }: any) =>
          disabled || theme.color[colorIconHover] || theme.color.secondaryIcon};
      }

      &:focus {
        color: ${({ theme, colorIcon }: any) =>
          theme.color[colorIcon] || theme.color.primaryIcon};
      }

      &:active {
        color: ${({ theme }) => theme.color.secondaryIcon};
      }
    }

    &.link {
      display: flex;
      align-items: center;
      height: 27px;
      background: none;
      color: ${({ theme, disabled, colorLink }: any) =>
        disabled
          ? theme.color.disabled
          : theme.color[colorLink] || theme.color.accent};
      transition: all 0.25s ease;
      padding: 0;
      border: none;

      &:hover {
        color: ${({ theme, disabled, colorLinkHover }: any) =>
          disabled || theme.color[colorLinkHover] || theme.color.accent2};
      }

      &:focus {
        color: ${({ theme, colorLink }: any) =>
          theme.color[colorLink] || theme.color.accent};
      }

      &:active {
        color: ${({ theme }) => theme.color.accent2};
      }
    }
  }
`

interface Props {
  type?:
    | 'primary'
    | 'secondary'
    | 'icon'
    | 'tertiary'
    | 'link'
    | 'tabs'
    | 'bubble'
  margin?: string
  width?: string
  iconSize?: string
  height?: string
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
  children: string | ReactElement
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLButtonElement>) => void
  onTouchStart?: (e: TouchEvent<HTMLButtonElement>) => void
  onMouseUp?: (e: MouseEvent<HTMLButtonElement>) => void
  onMouseLeave?: (e: MouseEvent<HTMLButtonElement>) => void
  onTouchEnd?: (e: TouchEvent<HTMLButtonElement>) => void
  onMouseOver?: (e: MouseEvent<HTMLButtonElement>) => void
  onMouseOut?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<Props> = ({
  tabIndex,
  onClick,
  fontSize,
  fontWeight,
  colorLink,
  iconSize,
  shadow,
  onMouseOut,
  onMouseOver,
  alignSelf,
  width,
  colorLinkHover,
  children,
  height,
  disabled,
  margin,
  position,
  type = 'link',
  active,
  textTransform,
  background,
  top,
  right,
  borderRadius,
  colorIconHover,
  colorIcon,
  onMouseDown,
  onTouchStart,
  onMouseUp,
  onMouseLeave,
  onTouchEnd,
  mobile,
  whiteSpace,
}) => (
  <ButtonElem
    fontWeight={fontWeight}
    fontSize={fontSize}
    colorLinkHover={colorLinkHover}
    colorLink={colorLink}
    tabIndex={tabIndex}
    whiteSpace={whiteSpace}
    shadow={shadow}
    iconSize={iconSize}
    height={height}
    mobile={mobile}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    colorIconHover={colorIconHover}
    colorIcon={colorIcon}
    borderRadius={borderRadius}
    right={right}
    top={top}
    alignSelf={alignSelf}
    background={background}
    className={type}
    disabled={disabled}
    width={width}
    margin={margin}
    position={position}
    active={active}
    textTransform={textTransform}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onTouchStart={onTouchStart}
    onMouseUp={onMouseUp}
    onMouseLeave={onMouseLeave}
    onTouchEnd={onTouchEnd}
  >
    {children}
  </ButtonElem>
)
