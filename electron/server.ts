import Docker from 'dockerode'
import { BrowserWindow } from 'electron'
import fs from 'fs'

const socket = process.env.DOCKER_SOCKET || '/var/run/docker.sock'
const stats = fs.statSync(socket)

if (!stats.isSocket()) {
  throw new Error('Are you sure the docker is running?')
}

const dockerConnection = new Docker({ socketPath: '/var/run/docker.sock' })

export async function listDockerContainers(mainWindow: BrowserWindow) {
  dockerConnection.listContainers({ all: true }, function (_err, containers) {
    mainWindow.webContents.send('containers:list:response', containers)
  })
}
