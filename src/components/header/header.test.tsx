import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './header.stories'

const { Default } = composeStories(stories)

test('renders learn react link', () => {
  render(<Default />)
  const linkElement = screen.getByText(/About Me/i)
  expect(linkElement).toBeInTheDocument()
})
