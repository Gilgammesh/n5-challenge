import * as React from 'react'
import { render } from '@testing-library/react'
import Navbar from '../../src/components/app/Navbar'

describe('Tests in Component: <Navbar />', () => {
  test('Must match the snapshot', () => {
    const { container } = render(<Navbar />)
    expect(container).toMatchSnapshot()
  })
})
