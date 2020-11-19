import React from 'react'
// import {connect} from 'react-redux'

//split up the canvas and FFT into two different elements so that the canvas loads first!
class FFT extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sampleRate: 0,
      average: 'med',
      audio: false,
      graphStyle: 'line'
    }
    this.handleMicrophone = this.handleMicrophone.bind(this)
  }

  handleMicrophone() {
    //make this redux later? maybe? state is slow
    this.setState(prev => ({audio: !prev.audio}))
  }

  render() {
    //need to do this in order to tell the browser i'm accessing audio
    const audioContext = new AudioContext()

    //creating the analyzer
    const analyzer = audioContext.createAnalyser()

    //this is how we get it to access the microphone! It asks the user if they want us to allow it
    const audioSource = navigator.mediaDevices.getUserMedia({audio: true})

    //connects the analyzer to the audioSource
    // if (audioSource){
    //   audioSource.connect(analyzer)
    // }

    //FFT size
    analyzer.fftSize = 2048

    // half the fft
    const bufferLength = analyzer.frequencyBinCount

    //how many datapoints we'll be collecting (half the fft)
    const dataArray = new Uint8Array(bufferLength)

    //declare the canvas
    const canvas = document.getElementById('FFTdrawing')

    if (canvas) {
      const canvasCtx = canvas.getContext('2d')
      canvasCtx.clearRect(0, 0, 1000, 1000)
    }

    function draw() {
      //loops the drawing once its been started
      const drawVisual = requestAnimationFrame(draw)

      //retrieves the data and copies it back into the analyzer array
      analyzer.getByteTimeDomainData(dataArray)
      canvasCtx.fillStyle = 'rgb(200, 200, 200)'
      canvasCtx.fillRect(0, 0, 1000, 1000)
      canvasCtx.lineWidth = 2
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)'
      canvasCtx.beginPath()

      // Determine the width of each segment of the line to be drawn by dividing the canvas width by the array length (equal to the FrequencyBinCount, as defined earlier on)
      const sliceWidth = 1000 * 1.0 / bufferLength
      var x = 0

      //a loop defining the position of a small segment of the wave for each point in the buffer at a certain height based on the data point value form the array, then moving the line across to the place where the next wave segment should be drawn
      for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0
        var y = v * 1000 / 2

        if (i === 0) {
          canvasCtx.moveTo(x, y)
        } else {
          canvasCtx.lineTo(x, y)
        }

        x += sliceWidth
      }

      canvasCtx.lineTo(canvas.width, canvas.height / 2)
      canvasCtx.stroke()
    }

    if (canvas) {
      draw()
    }

    return (
      <div>
        <button
          type="button"
          className="microphone on off"
          onClick={() => this.handleMicrophone()}
        >
          play/pause
        </button>
        wow
        {/* HTML5 built in canvas */}
        <canvas id="FFTdrawing" width="1000" height="1000" />
      </div>
    )
  }
}

export default FFT
