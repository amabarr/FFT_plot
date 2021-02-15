import React from 'react'
import {AudioAnalyzer, Footer, Header} from './components'
import {Provider} from 'react-redux'

import store from './store'
import Home from './components/sound/home'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
      <Footer />
    </Provider>
  )
}

export default App
