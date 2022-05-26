type Status = 'exited' | 'running'

const colors = {
  exited: 'gray',
  running: '#113b8c',
}

export default function getContainerColor(status: Status) {
  return colors[status]
}
