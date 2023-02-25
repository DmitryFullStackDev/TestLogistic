import React, { ChangeEvent, FC, useRef } from 'react'
import { Text } from '.'
import { InputWrapper } from './InputWrapper'
import { Input } from './Input'

type Props = {
  inputName: string
  label: string
  placeholder: string
  width?: string
  margin?: string
  value: string
  error?: any
  touched?: any
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SimpleInput: FC<Props> = ({
  inputName,
  label,
  placeholder,
  width,
  margin,
  value,
  onChange,
  error,
  touched,
}) => {
  const inputRef = useRef(null)

  const escFunction = e => {
    if (e.keyCode === 27) {
      inputRef.current.blur()
    }
  }

  return (
    <InputWrapper
      margin={margin}
      width={width}
      onClick={() => inputRef.current.focus()}
      isError={touched && Boolean(error)}
    >
      <label htmlFor={inputName}>
        <Text color="disabled" margin="0 0 2px 0" type="caption">
          {label}
        </Text>
      </label>
      <Input
        id={inputName}
        onChange={onChange}
        value={value}
        onKeyDown={escFunction}
        placeholder={placeholder}
        ref={inputRef}
        type="text"
        name={inputName}
      />
    </InputWrapper>
  )
}
