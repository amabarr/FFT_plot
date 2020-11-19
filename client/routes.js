import React, {Component} from 'react'
import {Switch} from 'react-router-dom'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        'Hello, world!'
        <Switch>
          {/* Routes placed here are available to all visitors */}
        </Switch>
      </div>
    )
  }
}

export default Routes
