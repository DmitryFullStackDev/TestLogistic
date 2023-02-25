import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './publicRoutes'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="">
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
)
