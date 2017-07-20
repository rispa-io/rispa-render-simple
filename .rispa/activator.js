import { init, build, prepare } from '@rispa/core/events'
import { server } from '@rispa/server/events'
import { createConfig } from '@webpack-blocks/webpack2'
import webpackClientConfig from './webpack/client.wpc'
import renderMiddleware from './render/middleware'
import universalSettings from './universal-webpack-settings'
import clientConfiguration from './configuration/client'

const activator = on => {
  on(init(server), registry => {
    registry.set('render', renderMiddleware)
  })

  const handler = registry => {
    registry.add('webpack.client', webpackClientConfig)
  }
  on(init(server), handler)
  on(init(build), handler)


  const prepareHandler = registry => {
    const webpackConfig = createConfig(registry.get('webpack.client') || [])
    registry.set('webpack.client', [() => clientConfiguration(
      webpackConfig,
      universalSettings,
    )])
  }
  on(prepare(server), prepareHandler)
  on(prepare(build), prepareHandler)
}

export default activator
