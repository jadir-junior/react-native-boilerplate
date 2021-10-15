import { Chip } from './Chip.component'
import React from 'react'
import { render } from '@testing-library/react-native'
// import { render } from '../../utils/test-utils'

describe('<Chip />', () => {
  it('should render the component', () => {
    const { getByText } = render(<Chip />)

    expect(getByText(/component/i)).toBeDefined()
  })
})
