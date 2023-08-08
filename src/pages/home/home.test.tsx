import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './home.stories'

const { Primary } = composeStories(stories)

test('renders learn react link', () => {
  render(<Primary />)
  const linkElement = screen.getByText(/Portfolio coming soon/i)
  expect(linkElement).toBeInTheDocument()
})
