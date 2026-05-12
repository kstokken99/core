/// <reference types="../../index.d.ts" />
import type { Preview } from '@storybook/react'
import { useEffect } from 'react'
import '../../src/styles/index.scss'

const preview: Preview = {
  decorators: [
    (Story) => {
      useEffect(() => {
        document.body.classList.add('app', 'light')
        return () => {
          document.body.classList.remove('app', 'light')
        }
      }, [])

      return Story()
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
