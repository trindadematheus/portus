import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import { Container, Image, Text } from './styles'
import DockerContainer from '../../components/DockerContainer'
import Scene from '../../components/Scene'

export function MainScreen() {
  const [containersList, setContainersList] = useState([])

  useEffect(() => {
    handleGetContainers()
    registerEvents()
  }, [])

  function registerEvents() {
    window.Main.on('containers:list:response', (containers: any) => {
      setContainersList(containers)
    })
  }

  function handleGetContainers() {
    window.Main.emit('containers:list:request')
  }

  return (
    <>
      <Container>
        {containersList.length === 0 && (
          <>
            <Image
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              alt="ReactJS logo"
            />
            <Text>CARREGANDO CONTAINERS...</Text>
          </>
        )}

        {containersList.length > 0 && <Scene containers={containersList} />}
      </Container>
    </>
  )
}
