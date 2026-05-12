import webpack from 'webpack'
import { BuildOptions } from './types'
import { buildCssLoader } from './loaders/buildCssLoader'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const fileLoader = {
    test: /\.(jpe?g|png|webp|gif)$/i,
    type: 'asset/resource',
  }

  const svgLoader = {
    test: /.svg$/,
    use: ['@svgr/webpack'],
  }

  const cssLoader = buildCssLoader(options.isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [fileLoader, svgLoader, typescriptLoader, cssLoader]
}
