import { Suspense, useState } from 'react'
import { Text } from '@react-three/drei'

import getContainerColor from '../../utils/getContainerColor'

function DockerContainer(props: any) {
  const [clicked, click] = useState(false)

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

        <meshStandardMaterial
          color={getContainerColor(props.container.State)}
        />

        <Suspense fallback={null}>
          {/* @ts-ignore */}
          <Text
            color={'#EC2D2D'}
            fontSize={0.1}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle"
            depthOffset={12}
            position={[0, 0, 0.7]}
          >
            {props.container.Names[0]}
          </Text>
        </Suspense>
      </mesh>
    </>
  )
}

export default DockerContainer
