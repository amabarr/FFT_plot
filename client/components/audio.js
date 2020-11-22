import React, {Component} from 'react'
import AudioAnalyzer from './AudioAnalyzer'
import './audio.css'
//react component that asks for audio input
//will put buttons here to change SR + others things later
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
    this.setState({audio})
  }

  stopMicrophone() {
    //loops through each mediatrack associated with MediaStream and stops them
    this.state.audio.getTracks().forEach(track => track.stop())

    this.setState({audio: null})
  }

  handleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone()
    } else {
      this.getMicrophone()
    }
  }

  handleChartChange(e) {
    this.setState({chartType: e.target.value})
  }

  render() {
    return (
      <div className="charts">
        <div className="controls">
          <button type="button" onClick={this.handleMicrophone}>
            {this.state.audio ? 'Stop Microphone' : 'Get Microphone Input'}
          </button>
          <button
            type="button"
            onClick={this.handleChartChange}
            value="Oscilloscope"
          >
            Oscilloscope
          </button>
          <button
            type="button"
            onClick={this.handleChartChange}
            value="FFT Plot"
          >
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

        <div className="analyzers">
          {this.state.audio ? (
            <AudioAnalyzer
              audio={this.state.audio}
              chartType={this.state.chartType}
            />
          ) : (
            <div className="message">
              Start your microphone or upload music in order to start!
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default AudioChecker
