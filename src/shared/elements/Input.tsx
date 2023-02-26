import React from 'react'
import styled from 'styled-components'

export const Input: any = styled.input`
  box-sizing: border-box;

  width: 100%;
  font-family: Inter, sans-serif;
  background: transparent;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding: 0;

  &::placeholder {
    color: ${({ theme }) => theme.color.disabled};
  }
`
