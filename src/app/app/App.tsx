import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../entries'
import Theme from '../theme'
import { Router } from '../router'

export const App = () => (
  <Provider store={store}>
    <Theme>
      <Router />
    </Theme>
  </Provider>
)
