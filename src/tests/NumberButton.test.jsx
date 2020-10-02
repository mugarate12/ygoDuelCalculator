import React from 'react'
import {
  unmountComponentAtNode,
  render
} from 'react-dom'
import {
  act
} from '@testing-library/react'

import NumberButton from './../components/NumberButton/index'

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

it('render a NumberButton based in props', () => {
  let number = 0
  while (number === 0) {
    number = Math.round(Math.random(1, 10) * 10)
  } 

  act(() => {
    render(<NumberButton number={number}/>, container)
  })

  expect(container.textContent).toBe(`${number}`)
})