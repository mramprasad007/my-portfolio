import type { Meta, StoryObj } from '@storybook/react'

import App from './app'

const meta = {
  title: 'Pages/App',
  component: App,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
