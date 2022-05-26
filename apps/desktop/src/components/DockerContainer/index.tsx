import { Suspense, useState } from 'react'
import { Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import blueContainerImage from '../../assets/blue-container.png'
import redContainerImage from '../../assets/red-container.png'

function DockerContainer(props: any) {
  const [clicked, click] = useState(false)

  const texture_1 = useLoader(
    TextureLoader,
    props.container.State === 'running' ? blueContainerImage : redContainerImage
  )

  return (
    <>
      <mesh
        {...props}
        scale={clicked ? 1.5 : 1}
        onClick={() => click(!clicked)}
        // onPointerOver={event => hover(true)}
        // onPointerOut={event => hover(false)}
      >
        <boxGeometry args={[2, 1, 1]} />

        <meshStandardMaterial map={texture_1} attach="material" />
        <meshStandardMaterial map={texture_1} attach="material" />
        <meshStandardMaterial map={texture_1} attach="material" />
        <meshStandardMaterial map={texture_1} attach="material" />
        <meshStandardMaterial map={texture_1} attach="material" />
        <meshStandardMaterial map={texture_1} attach="material" />

        <Suspense fallback={null}>
          {/* @ts-ignore */}
          <Text
            color={'black'}
            fontSize={0.1}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle"
            depthOffset={12}
            position={[0, 0, 0.6]}
          >
            {props.container.Names[0]}
          </Text>
        </Suspense>
      </mesh>
    </>
  )
}

export default DockerContainer
