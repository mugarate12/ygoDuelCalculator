import React, { useState } from 'react'

import GlobalStyle from './../../styles/global'

import * as Styled from './styles'

import LifePointsDisplay from './../../components/LifePointsDisplay/index'
import CalculatorDisplay from './../../components/CalculatorDisplay/index'
import NumberButton from './../../components/NumberButton/index'
import IconButton from './../../components/IconButton/index'

export default function Home() {
  const [calculatorValue, setCalculatorValue] = useState<string>('00')

  function handleCalculatorValue(number: number) {
    const isLessThanHundred = calculatorValue.length < 4
    const isThousand = calculatorValue.length === 4
    const isThirdNumberIsZero = Number(calculatorValue[2]) === 0
    const isFourthNumberIsZero = Number(calculatorValue[3]) === 0

    if (isLessThanHundred) {
      setCalculatorValue(`${number}${calculatorValue}`)

    } else if (isThousand && isThirdNumberIsZero){
      setCalculatorValue(`${calculatorValue.slice(0, 2)}${number}0`)

    } else if (isThousand && isFourthNumberIsZero){
      setCalculatorValue(`${calculatorValue.slice(0, 3)}${number}`)

    } else {
      setCalculatorValue(`${calculatorValue}${number}`)
    }
  }

  function handleDeleteCalculatorValue() {
    const biggerThanThousand = calculatorValue.length > 4
    const isThousand = calculatorValue.length === 4
    const isHundred = calculatorValue.length === 3
    const isThirdNumberIsZero = Number(calculatorValue[2]) === 0
    const isFourthNumberIsZero = Number(calculatorValue[3]) === 0

    if (biggerThanThousand) {
      setCalculatorValue(calculatorValue.slice(0, calculatorValue.length - 1))
    
    } else if (isThousand && !isThirdNumberIsZero && isFourthNumberIsZero) {
      setCalculatorValue(`${calculatorValue.slice(0, 2)}00`)
    
    } else if (isThousand && !isThirdNumberIsZero && !isFourthNumberIsZero) {
      setCalculatorValue(`${calculatorValue.slice(0, 3)}0`)
      
    } else if (isThousand && isThirdNumberIsZero && isFourthNumberIsZero) {
      setCalculatorValue(`${calculatorValue[0]}00`)

    } else if (isHundred) {
      setCalculatorValue('00')
    }
  }

  return (
    <>
      <GlobalStyle />

      <LifePointsDisplay playerLifePoints={8000} />
      <NumberButton number={1} onClick={() => handleCalculatorValue(1)} />
      <NumberButton number={2} onClick={() => handleCalculatorValue(2)} />

      <CalculatorDisplay value={calculatorValue} />

      <IconButton Icon={Styled.BackspaceIcon} onClick={() => handleDeleteCalculatorValue()} />
      <IconButton Icon={Styled.PlusIcon}/>
    </>
  )
}
