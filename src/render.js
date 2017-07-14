import fs from 'fs'
import defaultTemplate from './defaultTemplate'

const render = (app, registry) => {
  app.get('/', (req, res) => {
    const stats = res.locals.webpackStats.toJson()
    const template = registry.get('template') || defaultTemplate
    res.send(template(stats, req, res))
  })
}

export default render
