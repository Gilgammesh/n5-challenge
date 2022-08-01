import * as React from 'react'
import { render } from '@testing-library/react'
import List from '../../src/components/app/List'

describe('Tests in Component: <List />', () => {
  test('Must match the snapshot', () => {
    const type = 'movie'
    const title: string = 'Thor and Thunder'
    const { container } = render(<List type={type} title={title} />)
    expect(container).toMatchSnapshot()
  })
})
