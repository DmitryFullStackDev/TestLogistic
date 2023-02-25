import React from 'react'
import { ThemeProvider } from 'styled-components'

const Theme = ({ children }) => {
  const theme = {
    color: {
      ui100: '#EFF1F3',
      ui200: '#E5E7EB',
      ui300: '#D1D5DB',
      ui50: '#F9FAFB',
      primary: '#374151',
      disabled: '#9DA3AF',
      accent: '#8E44AD',
      accent2: '#B366D6',
      accent3: '#EFD9F9',
      accentSecondary: '#D15893',
      inverse: '#FFFFFF',
      secondary: '#6B7280',
      warning: '#CC3300',

      primaryIcon: '#9DA3AF',
      secondaryIcon: '#374151',

      semMain: '#347BF6',
      semSecond: '#D32F2F',
    },

    shadows: {
      low: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.05)',
      medium:
        '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
      high: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);',
    },
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
