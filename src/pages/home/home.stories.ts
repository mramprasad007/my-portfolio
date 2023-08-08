import type { Meta, StoryObj } from '@storybook/react'

import Home from './'

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
