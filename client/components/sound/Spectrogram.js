import React, {Component} from 'react'

class Spectrogram extends Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  loop(bufferLength, width, height, audioData) {}

  draw() {
    const {audioData} = this.props
    const canvas = this.canvas.current
    const bufferLength = this.props.bufferLength
    const height = canvas.height
    const width = canvas.width
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, width, height)
    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = width
    tempCanvas.height = height

    // const tempContext = this.tempCanvas.getContext('2d')
    // tempContext.drawImage(this.canvas, 0, 0, width, height)

    // let image = context.getImageData(1, 0, width, height)
    // context.fillRect(0, 0, width, height)
    // context.putImageData(image, 0, 0)

    for (let i = 0; i < bufferLength; i++) {
      let percent = i / bufferLength
      let y = Math.round(percent * height)

      let value = (audioData[i] + 120) / 255

      let hue = Math.round(value * 120 + 280 % 360)
      context.fillRect(width, height - y, 2, 2)

      context.translate(-2, 0)
      context.drawImage(tempCanvas, 0, 0, width, height, 0, 0, width, height)
      context.setTransform(1, 0, 0, 1, 0, 0)
    }
  }

  //updated everytime the audio data is updated!
  componentDidUpdate() {
    this.draw()
  }

  render() {
    return <canvas width="1000" height="500" ref={this.canvas} />
  }
}

export default Spectrogram
