import { init } from '@rispa/core/events'
import { server } from '@rispa/server/events'
import render from '../src/render'

const activator = on => {
  on(init(server), registry => {
    registry.set('render', render)
  })
}

export default activator
