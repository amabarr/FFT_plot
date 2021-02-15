import React, {Component} from 'react'
import {connect} from 'react-redux'
import './audio.css'
import {setAudio, switchChart} from '../../store/index'

class AudioChecker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audio: null,
      chartType: 'AudioAnimation'
    }
    this.handleMicrophone = this.handleMicrophone.bind(this)
    this.handleChartChange = this.handleChartChange.bind(this)
  }

  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    this.props.addAudio(audio)
  }

  stopMicrophone() {
    //loops through each mediatrack associated with MediaStream and stops them
    this.props.audio.getTracks().forEach(track => track.stop())

    this.props.addAudio(null)
  }

  handleMicrophone() {
    if (this.props.audio !== null) {
      this.stopMicrophone()
    } else {
      this.getMicrophone()
    }
  }

  handleChartChange(e) {
    this.props.switchChart(e.target.value)
  }

  render() {
    return (
      <div className="controls">
        <button type="button" onClick={this.handleMicrophone}>
          {this.props.audio !== null ? (
            <i className="fa fa-stop" />
          ) : (
            <i className="fa fa-play" />
          )}
        </button>

        <button
          type="button"
          value="Oscilloscope"
          onClick={this.handleChartChange}
        >
          Oscilloscope
        </button>

        <button type="button" onClick={this.handleChartChange} value="FFT Plot">
          FFT Plot
        </button>
        <button
          type="button"
          onClick={this.handleChartChange}
          value="AudioAnimation"
        >
          Animation <small>*WARNING: FLASHING LIGHTS*</small>
        </button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    audio: state.audio
  }
}

const mapDispatch = dispatch => {
  return {
    addAudio: audio => {
      dispatch(setAudio(audio))
    },
    switchChart: chart => {
      dispatch(switchChart(chart))
    }
  }
}

export default connect(mapState, mapDispatch)(AudioChecker)
