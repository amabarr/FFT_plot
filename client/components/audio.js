import React, {Component} from 'react'
import AudioAnalyzer from './AudioAnalyzer'

//react component that asks for audio input
//will put buttons here to change SR + others things later

class AudioChecker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audio: null
    }
    this.handleMicrophone = this.handleMicrophone.bind(this)
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

  render() {
    return (
      <div className="">
        <div className="controls">
          <button type="button" onClick={this.handleMicrophone}>
            {this.state.audio ? 'Stop Microphone' : 'Get Microphone Input'}
          </button>
        </div>

        {this.state.audio ? <AudioAnalyzer audio={this.state.audio} /> : ''}
      </div>
    )
  }
}

export default AudioChecker
