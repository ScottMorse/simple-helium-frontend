import React from 'react'
import { mount } from 'enzyme'

import { App } from './App'

describe('Test App', () => {
    it('Renders without crashing', () => {
        mount(<App/>)
    })
})