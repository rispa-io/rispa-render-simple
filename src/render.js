import fs from 'fs'
import { endsWith } from 'ramda'

const render = (app, registry) => {
  app.get('/', (req, res) => {
    const stats = res.locals.webpackStats.toJson()
    const { assets } = stats.entrypoints.main
    const jsFiles = assets.filter(endsWith('.js'))
    const cssFiles = assets.filter(endsWith('.css'))

    res.send(`
      <html>
        <head>
          <title>Test</title>
          ${jsFiles.map(file => `<link rel="stylesheet" href="/${file}">`).join('')}
        </head>
        <body>
          <div id="app">Loading...</div>
          ${jsFiles.map(file => `<script src="/${file}"></script>`).join('')}
        </body>
      </html>
    `)
  })
}

export default render
