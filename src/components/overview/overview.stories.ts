import type { Meta, StoryObj } from '@storybook/react'

import Overview from '.'

const meta = {
  title: 'Components/Overview',
  component: Overview,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Overview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
