import React, {Component} from 'react'

//here we will draw the canvas and on the canvas
//this just does a line from left to right, not FFT plot

class AudioVisualiser extends Component {
  constructor(props) {
    super(props)
    //create ref -> created a reference to a specific object in render, here it's so we can draw on it
    this.canvas = React.createRef()
  }

  //this is just drawing a continous line and not the FFT plot I want
  draw() {
    const {audioData} = this.props
    const canvas = this.canvas.current
    const height = canvas.height
    const width = canvas.width
    const context = canvas.getContext('2d')
    let x = 0
    //this is the part just doing a line that moves across
    const sliceWidth = width * 1.0 / audioData.length
    context.lineWidth = 2
    context.strokeStyle = '#000000'
    context.clearRect(0, 0, width, height)

    //begins the line on bottom left
    context.beginPath()
    context.moveTo(0, height / 2)

    //loops over the audio data
    // Each data point is between 0 and 255. To normalise this to our canvas we divide by 255 and then multiply by the height of the canvas. We then draw a line from the previous point to this one and increment x by the sliceWidth.
    for (const item of audioData) {
      const y = item / 255.0 * height
      context.lineTo(x, y)
      x += sliceWidth
    }

    context.lineTo(x, height / 2)
    context.stroke()
  }

  //updated everytime the audio data is updated!
  componentDidUpdate() {
    this.draw()
  }

  render() {
    return <canvas width="1000" height="1000" ref={this.canvas} />
  }
}

export default AudioVisualiser
