import React from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>FFT PLOT</h1>
    <nav>
      <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/home">Home</Link>
      </div>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
export default Navbar
