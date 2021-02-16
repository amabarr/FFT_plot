import React, {Component} from 'react'
import {connect} from 'react-redux'
import './audio.css'
import {setAudio, switchChart} from '../../store/index'

class AudioChecker extends Component {
  constructor(props) {
    super(props)
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
        <button
          type="button"
          onClick={this.handleMicrophone}
          className={this.props.audio !== null ? 'stop' : 'play'}
        >
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
          className={this.props.chart === 'Oscilloscope' ? 'selected' : ''}
        >
          Oscilloscope
        </button>

        <button
          type="button"
          onClick={this.handleChartChange}
          value="FFT Plot"
          className={this.props.chart === 'FFT Plot' ? 'selected' : ''}
        >
          FFT Plot
        </button>
        <button
          type="button"
          onClick={this.handleChartChange}
          value="AudioAnimation"
          className={this.props.chart === 'AudioAnimation' ? 'selected' : ''}
        >
          Animation <small>*WARNING: FLASHING LIGHTS*</small>
        </button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    audio: state.audio,
    chart: state.chartType
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
