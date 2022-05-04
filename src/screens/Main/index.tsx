import { useEffect, useState } from 'react'

import { Container, Image, Text } from './styles'
import Scene from '../../components/Scene'
import ErrorScreen from '../../components/ErrorScreen'

export function MainScreen() {
  const [containersList, setContainersList] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    handleGetContainers()
    registerEvents()
  }, [])

  function registerEvents() {
    window.Main.on('containers:list:response', (containers: any) => {
      if (!containers) {
        setError(true)

        return
      }

      setContainersList(containers)
    })
  }

  function handleGetContainers() {
    window.Main.emit('containers:list:request')
  }

  if (error) {
    return <ErrorScreen />
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
