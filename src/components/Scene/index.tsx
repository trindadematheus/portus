import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'

import DockerContainer from '../DockerContainer'

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()
  return <OrbitControls args={[camera, domElement]} />
}

function Scene({ containers }: any) {
  console.log(containers)

  return (
    <>
      <Canvas shadows camera={{ position: 5 }}>
        {containers.map((container, key) => (
          <DockerContainer
            container={container}
            position={[key * 2.2, 0.5, 0]}
          />
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
