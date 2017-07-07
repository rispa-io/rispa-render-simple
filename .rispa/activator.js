import { init } from '@rispa/core/events'
import { server } from '@rispa/server/events'
import render from './render'

const activator = on => {
  console.log('activator')
  on(init(server), registry => {
    registry.set('render', render)
  })
}

export default activator
