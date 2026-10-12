
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CartItem from '../CartItem'

describe('CartItem', () => {
  it('renders item information and quantity', () => {
    render(
      <CartItem
        name="Wireless Headphones"
        price={79.99}
        quantity={3}
        onRemove={vi.fn()}
      />
    )

    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument()
    expect(screen.getByText('$79.99 each')).toBeInTheDocument()
    expect(screen.getByText('Quantity: 3')).toBeInTheDocument()
    expect(screen.getByText('Subtotal: $239.97')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /remove one/i })).toBeInTheDocument()
  })

  it('calls onRemove when Remove One is clicked', () => {
    const onRemove = vi.fn()

    render(
      <CartItem
        name="Wireless Headphones"
        price={79.99}
        quantity={3}
        onRemove={onRemove}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: /remove one/i }))

    expect(onRemove).toHaveBeenCalledTimes(1)
  })
})