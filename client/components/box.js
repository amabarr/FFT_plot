import React, {useRef, useState} from 'react'
import {useFrame} from 'react-three-fiber'
import * as THREE from 'three'

export default Box

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  //making it rotate based on speed!
  useFrame(() => {
    // mesh.current.rotation.y += Math.min(...props.timeData)/100
  })

  const audio = props.audioData.map(val => {
    return val + -val * 2
  })
  const colors = [0, 258, 338, 278, 64, 305, 180, 41, 199]
  const time = Math.max(...props.timeData)
  const color = colors[Math.round(time) % 9]

  const lowerColorNumber = -props.lowerFreqMax
  let lowerColor

  //making it not react to your computer's sounds
  if (-lowerColorNumber > -80) {
    lowerColor = colors[Math.round(lowerColorNumber) % 9]
  } else {
    lowerColor = 0
  }

  const higherColorNumber = -props.highFreqMax
  let higherColor

  if (-higherColorNumber > -80) {
    higherColor = colors[Math.round(higherColorNumber) % 9]
  } else {
    higherColor = 100
  }

  return (
    <mesh {...props} ref={mesh}>
      <group>
        {/* low End */}
        <mesh position={[-1, 0, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[1, 0, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[0, 1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>
        <mesh position={[0, -1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[1, 2, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>
        <mesh position={[1, -2, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[3, 0, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>
        <mesh position={[2, 1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[2, -1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[-4, 3, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>
        <mesh position={[-4, 0, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[-4, -3, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[6, 3, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>
        <mesh position={[6, 0, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[6, -3, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.75, 0.75, 0.75]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${lowerColor}, 100%, 50%)`}
          />
        </mesh>

        {/* midRange */}
        {/* x,y, z */}
        <mesh position={[1, 3, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${color}, 100%, 50%)`}
          />
        </mesh>

        {/* Right side of circle */}
        <mesh position={[3, 2.5, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${color}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[4, 1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${color}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[4, -1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${color}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[3, -2.5, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${color}, 100%, 50%)`}
          />
        </mesh>

        {/* left side of circle */}
        <mesh position={[-1, 2.5, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${color}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[-2, 1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${color}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[-2, -1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${color}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[-1, -2.5, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${color}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[1, -3, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${color}, 100%, 50%)`}
          />
        </mesh>

        {/* High */}

        <mesh position={[0, 0, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[2, 0, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[1, 1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[1, -1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[-2, 2.5, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        {/* Right side of circle */}
        <mesh position={[4, 2.5, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[5, 1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[5, -1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[4, -2.5, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        {/* left side of circle */}
        <mesh position={[1, 4, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[-3, 1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[-3, -1, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[-2, -2.5, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>

        <mesh position={[1, -4, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
          <meshToonMaterial
            attach="material"
            color={`hsl(${higherColor}, 100%, 50%)`}
          />
        </mesh>
      </group>
    </mesh>
  )
}
