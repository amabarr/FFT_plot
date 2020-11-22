import React, {Component} from 'react'
import Oscilloscope from './Oscilloscope'
import GraphicEQ from './graphicEQ'
import AudioAnimation from './AudioAnimation'
import Spectrogram from './Spectrogram'
import './AudioAnalyzer.css'

class AudioAnalyzer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audioData: new Float32Array(0),
      timeData: new Float32Array(0),
      bufferLength: 0
    }
    this.animate = this.animate.bind(this)
  }
  //when component mounts, set up web audio api objects
  componentDidMount() {
    //webkit is for safari, audio context is for the rest
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
      sampleRate: 44100
    })

    //create an audio analyser from WEB AUDIO API
    this.analyser = this.audioContext.createAnalyser()

    //FFT size
    this.analyser.fftSize = 4096

    //smoothing Time constant
    this.analyser.smoothingTimeConstant = 0.8

    //trying to account for room tone
    this.analyser.minDecibels = -96
    this.analyser.maxDecibels = 0

    //frequency bin count // buffer length (half the fft)
    const bufferLength = this.analyser.frequencyBinCount
    this.setState({bufferLength})

    //create an array of 8-bit unsigned integers
    //this is how many datapoints we'll be collecting
    this.dataArray = new Float32Array(bufferLength)
    this.timeDataArray = new Float32Array(bufferLength)

    //getting the microphone as a source of audio, from the audio component
    this.source = this.audioContext.createMediaStreamSource(this.props.audio)

    //connect the microphone to the analyser
    this.source.connect(this.analyser)

    //calling upon animation to start
    this.rafId = requestAnimationFrame(this.animate)
  }

  //method that updates the visuals and gets the audio data as an array
  animate() {
    this.analyser.getFloatFrequencyData(this.dataArray)
    this.analyser.getFloatTimeDomainData(this.timeDataArray)
    this.setState({audioData: this.dataArray, timeData: this.timeDataArray})
    //recursive so it calls on the next update
    this.rafId = requestAnimationFrame(this.animate)
  }

  //cancels animate and disconnects audio from analyser
  componentWillUnmount() {
    cancelAnimationFrame(this.rafId)
    this.analyser.disconnect()
    this.source.disconnect()
  }

  render() {
    return (
      <div className="analyzers">
        {/* <Spectrogram audioData = {this.state.audioData} bufferLength = {this.state.bufferLength} /> */}
        {this.props.chartType === 'Oscilloscope' ? (
          <Oscilloscope
            timeData={this.state.timeData}
            bufferLength={this.state.bufferLength}
          />
        ) : (
          ''
        )}
        {this.props.chartType === 'FFT Plot' ? (
          <GraphicEQ
            audioData={this.state.audioData}
            bufferLength={this.state.bufferLength}
          />
        ) : (
          ''
        )}

        {this.props.chartType === 'AudioAnimation' ? (
          <AudioAnimation
            audioData={this.state.audioData}
            timeData={this.state.timeData}
            bufferLength={this.state.bufferLength}
          />
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default AudioAnalyzer
