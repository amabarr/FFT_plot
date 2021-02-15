import React, {Component} from 'react'
import './Oscilloscope.css'

class Oscilloscope extends Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  //draws the oscilloscope lines
  draw() {
    const {timeData} = this.props
    const canvas = this.canvas.current
    const height = canvas.height
    const width = canvas.width
    const context = canvas.getContext('2d')
    let x = 0
    //this is the part just doing a line that moves across
    const sliceWidth = width * 1.0 / this.props.bufferLength
    context.lineWidth = 2
    context.fillStyle = '#FF0000'
    context.strokeStyle = '#000000'
    context.clearRect(0, 0, width, height)

    //begins the line on bottom left
    context.beginPath()

    //a loop defining the position of a small segment of the wave for each point in the buffer at a certain height based on the data point value form the array, then moving the line across to the place where the next wave segment should be drawn
    for (let i = 0; i < this.props.bufferLength; i++) {
      let v = timeData[i] * 200
      let y = height / 2 + v

      if (i === 0) {
        context.moveTo(x, y)
      } else {
        context.lineTo(x, y)
      }

      x += sliceWidth
    }

    context.strokeStyle = '#99DD3C'
    context.lineTo(width, height / 2)
    context.stroke()
  }

  //updated everytime the audio data is updated!
  componentDidUpdate() {
    this.draw()
  }

  render() {
    return (
      <div id="oscBack">
        <canvas width="540" height="310" ref={this.canvas} id="osc" />
      </div>
    )
  }
}

export default Oscilloscope
