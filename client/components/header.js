import React from 'react'
import './header.css'
import AudioChecker from './sound/audio'

const Navbar = () => (
  <div className="bars">
    <h1>Synesthesia</h1>
    <AudioChecker />
  </div>
)

export default Navbar
