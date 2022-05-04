import { useEffect, useState } from 'react'

import { Container, Image, Text } from './styles'
import Scene from '../../components/Scene'
import ErrorScreen from '../../components/ErrorScreen'
import LoadingScreen from '../../components/LoadingScreen'
import EmptyScreen from '../../components/EmptyScreen'

export function MainScreen() {
  const [containersList, setContainersList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    handleGetContainers()
    registerEvents()
  }, [])

  function registerEvents() {
    window.Main.on('containers:list:response', (containers: any) => {
      if (!containers) {
        setError(true)
      } else {
        setContainersList(containers)
      }

      setLoading(false)
    })
  }

  function handleGetContainers() {
    window.Main.emit('containers:list:request')
  }

  if (loading) {
    return <LoadingScreen />
  }

  if (error) {
    return <ErrorScreen />
  }

  return (
    <>
      <Container>
        {containersList.length === 0 && <EmptyScreen />}

        {containersList.length > 0 && <Scene containers={containersList} />}
      </Container>
    </>
  )
}
