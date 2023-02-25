import React from 'react'
import { routes } from '../../shared'
import { Home } from '../../pages'

interface IRoutes {
  Component: React.FC<any>
  path: string
}

export const publicRoutes = [
  {
    Component: Home,
    path: routes.homePage,
  },
] as IRoutes[]
