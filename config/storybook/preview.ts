/// <reference types="../../index.d.ts" />
import type { Preview } from '@storybook/react'
import { useEffect } from 'react'
import '../../src/styles/index.scss'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light'

      useEffect(() => {
        document.body.classList.remove('app', 'light', 'dark')
        document.body.classList.add('app', theme)
      }, [theme])

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
