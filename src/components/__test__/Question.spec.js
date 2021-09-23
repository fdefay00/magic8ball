import React from 'react'
import {render, screen} from '@testing-library/react'

import Question from '../Question'

describe('RestaurantList', () => {
  it('renders Question component', () => {
    render(<Question />)

    screen.debug()
  })
  // it('contains value typed', () => {})
})
