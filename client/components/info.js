import React from 'react'

const Info = () => {
  return (
    <div className="info">
      <h2>
        Press <i className="fa fa-play" /> to start!
      </h2>
      <h4> Oscilloscope </h4>
      <p>
        An oscilloscope is a electronic test instrument that graphically
        displays waveforms, as visual representation of the varying signal
        voltages over time.
      </p>
      <p>
        A microphone changes sound energy into electrical energy. What you are
        seeing in the oscilloscope is a visual representation of the changes in
        amplitude over time. The space inbetween each peak is a representation
        of the wavelength. A larger space represents lower frequencies, a
        smaller space represents higher pitch freqencies. Amplitude is measured
        by how tall each wave each.
      </p>
      <p>Press the oscilloscope button and make some noise to see it! </p>

      <h4> FFT Plot: </h4>
      <p>
        An FFT Plot is a _____. Press that button and make some noise to see it
        in action!
      </p>
      <p>The Animation is done using Three.js.</p>
    </div>
  )
}

export default Info
