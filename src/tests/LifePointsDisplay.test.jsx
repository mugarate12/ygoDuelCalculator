import React from 'react'
import {
  unmountComponentAtNode,
  render
} from 'react-dom'
import {
  act
} from '@testing-library/react'

import LifePointsDisplay from './../components/LifePointsDisplay/index'

let container = null

// configura elemento como alvo do teste
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

// limpa a dom quando terminar cada teste pra encapulsar cada comportamento de cada teste a si mesmo
// ou seja, pra não haver intereferência entre os testes
afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('render a player life points based in props', () => {
  act(() => {
    render(<LifePointsDisplay playerLifePoints={8000}/>, container)
  })

  expect(container.textContent).toBe('8000')
})