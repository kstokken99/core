import webpack from 'webpack'
import { BuildPaths } from '../build/types'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  config.resolve = config.resolve || {}
  config.resolve.modules = config.resolve.modules || []
  config.resolve.modules.push(paths.src)

  config.resolve.extensions = config.resolve.extensions || []
  config.resolve.extensions.push('.ts', '.tsx')

  if (!config.resolve.alias || Array.isArray(config.resolve.alias)) {
    config.resolve.alias = {}
  }
  config.resolve.alias['@'] = paths.src

  config.module = config.module || {}
  config.module.rules = config.module.rules || []
  config.module.rules.push(buildCssLoader(true))

  return config
}
