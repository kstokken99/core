import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui'

describe('Button tests', () => {
  test('Button render', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('Button with additional class', () => {
    render(<Button className="additional">Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('additional')
  })
})
