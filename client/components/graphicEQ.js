import React, {Component} from 'react'
import './graphicEQ.css'

class GraphicEQ extends Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  frequencyToWidthPx(frequency) {
    const minF = Math.log(20) / Math.log(10)
    const maxF = Math.log(20000) / Math.log(10)
    let range = maxF - minF

    let widthPx = (Math.log(frequency) / Math.log(10) - minF) / range * 950

    return widthPx
  }

  draw() {
    const {audioData} = this.props
    const canvas = this.canvas.current
    const height = canvas.height
    const width = canvas.width
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, width, height)

    //used x when it was linear
    //let x = 0
    //loop to create the bars so I get to 20k!
    for (let i = 0; i < this.props.bufferLength; i++) {
      let value = audioData[i]

      //finding the frequency from the index
      let frequency = Math.round(i * 44100 / 2 / this.props.bufferLength)

      //need to convert db Value because it is -120 to 0
      let barHeight = (value / 2 + 70) * 10
      // console.log(barHeight)
      let barWidth = width / this.props.bufferLength * 2.5
      context.fillStyle = 'rgb(' + (barHeight + 200) + ',100,100)'

      //finding the x location px from the frequency
      let x = this.frequencyToWidthPx(frequency)

      //x, y coordinates, then width then height
      //fillRect (x, y, width, height)
      let h = height - barHeight / 2
      if (h > 0) {
        context.fillRect(x, h, barWidth, barHeight)
      }
    }
  }

  //updated everytime the audio data is updated!
  componentDidUpdate() {
    this.draw()
  }

  render() {
    return (
      <div id="graphic">
        <canvas width="945" height="445" ref={this.canvas} id="graphicChart" />
      </div>
    )
  }
}

export default GraphicEQ
