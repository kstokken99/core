import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from '@/components'

describe('Sidebar tests', () => {
  test('Sidebar render', () => {
    render(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Sidebar toggle', () => {
    render(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(sidebar).toHaveClass('root')
    fireEvent.click(toggleBtn)
    expect(sidebar).toHaveClass('open')
  })
})
