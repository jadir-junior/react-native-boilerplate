import { Home } from './Home.component'
import React from 'react'
import { render } from '@testing-library/react-native'
// import { render } from '../../utils/test-utils'

describe('<Home />', () => {
  it('should render the component', () => {
    const { getByText } = render(<Home />)

    expect(getByText(/component/i)).toBeDefined()
  })
})
