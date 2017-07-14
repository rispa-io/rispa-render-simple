import { endsWith } from 'ramda'

export default (stats, req, res) => {
  const { assets } = stats.entrypoints.main
  const jsFiles = assets.filter(endsWith('.js'))
  const cssFiles = assets.filter(endsWith('.css'))

  return `
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
  `
}
