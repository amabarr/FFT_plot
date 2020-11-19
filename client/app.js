import React from 'react'
import {AudioChecker, Fft, Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <AudioChecker />
      <Routes />
    </div>
  )
}

export default App
