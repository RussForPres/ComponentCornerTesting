
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import HomePage from '../HomePage'

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
  })

  it('displays the main homepage content', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )

    expect(screen.getByText('Welcome to TechVault')).toBeInTheDocument()
    expect(screen.getByText('Quality technology for everyday life.')).toBeInTheDocument()
    expect(screen.getByText('Why Shop With Us?')).toBeInTheDocument()
  })
})

