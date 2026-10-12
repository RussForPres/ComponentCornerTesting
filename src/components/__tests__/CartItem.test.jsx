
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CartItem from '../CartItem'

describe('CartItem', () => {
  it('renders item information', () => {
    render(
      <CartItem
        name="Wireless Headphones"
        price={79.99}
        onRemove={vi.fn()}
      />
    )

    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument()
    expect(screen.getByText('$79.99')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument()
  })

  it('calls onRemove when the Remove button is clicked', () => {
    const onRemove = vi.fn()

    render(
      <CartItem
        name="Wireless Headphones"
        price={79.99}
        onRemove={onRemove}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: /remove/i }))

    expect(onRemove).toHaveBeenCalledTimes(1)
  })
})
