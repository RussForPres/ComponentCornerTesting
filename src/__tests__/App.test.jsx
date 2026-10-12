
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import App from '../App'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the homepage', () => {
    render(<App />)

    expect(screen.getByText('Welcome to TechVault')).toBeInTheDocument()
  })

  it('loads cart data from localStorage', () => {
    const savedCart = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 79.99,
        image: 'https://placehold.co/600x400',
        description: 'Comfortable wireless headphones with great sound.',
      },
    ]

    vi.spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(JSON.stringify(savedCart))

    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

    render(<App />)

    expect(setItemSpy).toHaveBeenCalledWith(
      'cart',
      JSON.stringify(savedCart)
    )
  })

  it('saves cart data to localStorage when a product is added', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

    render(<App />)

    fireEvent.click(screen.getByRole('link', { name: /shop now/i }))
    fireEvent.click(
      screen.getAllByRole('button', { name: /add to cart/i })[0]
    )

    expect(setItemSpy).toHaveBeenCalledWith(
      'cart',
      expect.stringContaining('Wireless Headphones')
    )
  })
})
