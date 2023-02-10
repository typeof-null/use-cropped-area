import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'

// The creating test in the process
describe('Common render', () => {
  it('renders without crashing', () => {
    render(<div></div>)
  })
})
