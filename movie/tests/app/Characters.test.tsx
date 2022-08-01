import * as React from 'react'
import { render } from '@testing-library/react'
import Characters from '../../src/components/Characters'

describe('Tests in Component: <Characters />', () => {
  test('Must match the snapshot', () => {
    const { container } = render(<Characters lang="es" id={123} title="Vengadores" />)
    expect(container).toMatchSnapshot()
  })
})
