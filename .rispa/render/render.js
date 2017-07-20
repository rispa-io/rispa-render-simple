import R from 'ramda'
import routes from '../../src/routes'

const getLocation = R.compose(
  R.last,
  R.split('/'),
)

export default assets => (req, res) => {
  const location = getLocation(req.originalUrl)

  const route = routes.find(({ filename }) => location.indexOf(filename) !== -1)

  if (!route) {
    res.status(404)
    res.send('Not found')
    return
  }

  const { template, ...data } = route

  const html = template({
    ...data,
    assets
  })

  res.send(html)
}
