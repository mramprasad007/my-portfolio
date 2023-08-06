import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './app.stories'

const { Primary } = composeStories(stories)

test('renders learn react link', () => {
  render(<Primary />)
  const linkElement = screen.getByText(/Portfolio coming soon/i)
  expect(linkElement).toBeInTheDocument()
})
