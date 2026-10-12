
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../ProductCard'

describe('ProductCard', () => {
  const product = {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: '/headphones.jpg',
    description: 'High-quality wireless headphones',
  }

  it('renders product information', () => {
    render(
      <MemoryRouter>
        <ProductCard {...product} onAddToCart={vi.fn()} />
      </MemoryRouter>
    )

    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument()
    expect(screen.getByText('$79.99')).toBeInTheDocument()
    expect(screen.getByText('High-quality wireless headphones')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })

  it('calls onAddToCart when the button is clicked', () => {
    const onAddToCart = vi.fn()

    render(
      <MemoryRouter>
        <ProductCard {...product} onAddToCart={onAddToCart} />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }))

    expect(onAddToCart).toHaveBeenCalledTimes(1)
  })
})
