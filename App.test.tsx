import App from './App'
import React from 'react'
import { render } from './src/utils/test-utils'

describe('<App />', () => {
  it('should render the component', () => {
    const { getByText, toJSON } = render(<App />)

    expect(
      getByText(/open up app\.tsx to start working on your app/i)
    ).toBeDefined()
  })
})
