import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './overview.stories'

const { Default } = composeStories(stories)

test('renders learn react link', () => {
  render(<Default />)
  const linkElement = screen.getByText(/About/i)
  expect(linkElement).toBeInTheDocument()
})
