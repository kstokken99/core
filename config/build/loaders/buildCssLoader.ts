import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const buildCssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          namedExport: false,
          auto: (path: string) => Boolean(path.includes('.module.')),
          localIdentName: isDev ? '[path][name]__[local]' : '[hash]',
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sassOptions: {
          loadPaths: [path.resolve(__dirname, '..', '..', 'src', 'styles')],
        },
      },
    },
  ],
})
