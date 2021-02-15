import React, {Component} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
import Box from './box'

//learning three.js
class AudioAnimation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderer: ''
    }
  }

  render() {
    const audioData = this.props.audioData
    const lowerFreqs = audioData.slice(0, audioData.length / 2)
    const higherFreqs = audioData.slice(audioData.length / 2, audioData.length)

    const highFreqMax = Math.max(...higherFreqs)
    const lowerFreqMax = Math.max(...lowerFreqs)

    //pass down audioData to objects, make them change

    return (
      <div id="three">
        <Canvas style={{height: 600, width: 945}} id="animation">
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box
            position={[-1.2, 0, 0]}
            audioData={this.props.audioData}
            timeData={this.props.timeData}
            highFreqMax={highFreqMax}
            lowerFreqMax={lowerFreqMax}
          />
          {/* <Particles position={[-1, 0, 0]} audioData = {this.props.audioData} timeData = {this.props.timeData} /> */}
        </Canvas>
      </div>
    )
  }
}

export default AudioAnimation
