import * as React from 'react'
import { render } from '@testing-library/react'
import Home from '../../src/components/app/Home'

describe('Tests in Component: <Home />', () => {
  test('Must match the snapshot', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
