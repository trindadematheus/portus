import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import { handleContainerPosition } from '../../utils/getContainerPosition'

import DockerContainer from '../DockerContainer'

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()
  return <OrbitControls args={[camera, domElement]} />
}

function Scene({ containers }: any) {
  return (
    <>
      <Canvas shadows camera={{ position: 5 }}>
        {containers.map((container, key) => (
          <Suspense key={key} fallback={null}>
            <DockerContainer
              container={container}
              position={[handleContainerPosition(key), 0.5, 0]}
            />
          </Suspense>
        ))}

        <gridHelper args={[100, 10]} />

        <ambientLight intensity={0.8} />
        <pointLight intensity={1} position={[0, 6, 0]} />

        <CameraControls />
      </Canvas>
    </>
  )
}

export default Scene
