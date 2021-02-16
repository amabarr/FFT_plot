import React from 'react'

const Info = () => {
  return (
    <div className="info">
      <h2>
        Press <i className="fa fa-play" /> to start!
      </h2>
      <div className="infoTable">
        <table>
          <tbody>
            <tr>
              <th>Oscilloscope:</th>
            </tr>
            <tr>
              <td>
                {' '}
                <p>
                  An oscilloscope is a electronic test instrument that
                  graphically displays waveforms, as visual representation of
                  the varying signal voltages over time. A microphone changes
                  sound energy into electrical energy. What you are seeing in
                  the oscilloscope is a visual representation of the changes in
                  amplitude over time. The space inbetween each peak is a
                  representation of the wavelength. A larger space represents
                  lower frequencies, a smaller space represents higher pitch
                  freqencies. Amplitude is measured by how tall each wave each.
                </p>
                <p>
                  Press the oscilloscope button and make some noise to see it!{' '}
                </p>
              </td>
            </tr>
            <tr>
              <th> FFT Plot: </th>
            </tr>
            <tr>
              <td>
                {' '}
                FFT stands for Fast Fourier Theorum. It is a real-time plot of
                raw spectrum graph. It is a lograithmic scale, where the x-axis
                represents frequencies and the y-axis represents Sound Pressure
                Level (SPL) in decibels per second (dbFS). This FFT plot, like
                many, only represents the range of human hearing 20 HZ - 20,000
                HZ.
                <p>
                  Press that button and make some noise to see it in action!
                </p>
              </td>
            </tr>
            <tr>
              <th>Animation: </th>
            </tr>
            <tr>
              <td>The Animation is done using Three.js.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Info
