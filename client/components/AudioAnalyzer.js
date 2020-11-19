import React, {Component} from 'react'
import AudioVisualiser from './AudioVisualiser'

class AudioAnalyzer extends Component {
  constructor(props) {
    super(props)
    this.state = {audioData: new Uint8Array(0)}
    this.animate = this.animate.bind(this)
  }
  //when component mounts, set up web audio api objects
  componentDidMount() {
    //webkit is for safari, audio context is for the rest
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()

    //create an audio analyser from WEB AUDIO API
    this.analyser = this.audioContext.createAnalyser()

    //frequency bin count // buffer length (half the fft)
    const bufferLength = this.analyser.frequencyBinCount

    //create an array of 8-bit unsigned integers
    //this is how many datapoints we'll be collecting
    this.dataArray = new Uint8Array(bufferLength)

    //getting the microphone as a source of audio
    this.source = this.audioContext.createMediaStreamSource(this.props.audio)

    //connect the microphone to the analyser
    this.source.connect(this.analyser)

    //calling upon animation to start
    this.rafId = requestAnimationFrame(this.animate)
  }

  //method that updates the visuals and gets the audio data as an array
  animate() {
    this.analyser.getByteTimeDomainData(this.dataArray)
    this.setState({audioData: this.dataArray})

    //recursive so it calls on the next update
    this.rafId = requestAnimationFrame(this.animate)
  }

  //cancels animate and disconnects audio from analyser
  componentWillUnmount() {
    cancelAnimationFrame(this.rafId)
    this.analyser.disconnect()
    this.source.disconnect()
  }

  //this is just returning a text area with the data points !
  //kinda cool to see as raw data values
  render() {
    // return <textarea value={this.state.audioData} />

    return <AudioVisualiser audioData={this.state.audioData} />
  }
}

export default AudioAnalyzer
