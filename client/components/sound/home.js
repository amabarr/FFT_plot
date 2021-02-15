//if there's audio do an analyzer, or else do some paragraph about the project
import React from 'react'
import {connect} from 'react-redux'
import {AudioAnalyzer} from '..'

const Home = props => {
  return (
    <div className="charts">
      {props.audio !== null ? <AudioAnalyzer /> : 'Press Play to Start!'}
    </div>
  )
}

const mapState = state => {
  return {
    audio: state.audio
  }
}

export default connect(mapState)(Home)
