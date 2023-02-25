import React from 'react'
import { render } from '@testing-library/react'
import { ScrollWrapper } from './ScrollWrapper'
import { BrowserRouter } from 'react-router-dom'

test('should handle click', () => {
  window.HTMLElement.prototype.scrollTo = jest.fn()

  const { container } = render(
    <BrowserRouter>
      <ScrollWrapper>test</ScrollWrapper>
    </BrowserRouter>,
  )

  expect(container).toBeInTheDocument()
})
