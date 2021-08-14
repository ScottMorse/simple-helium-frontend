import React from 'react'
import { Provider } from 'react-redux'
import { Home } from 'views/Home'

import { store } from './store'


export const App = () => (
  <Provider store={store}>
    <Home/>
  </Provider>
)