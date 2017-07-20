import createRender from './render'

export default parameters => {
  const chunks = parameters.chunks()

  return createRender(chunks)
}
