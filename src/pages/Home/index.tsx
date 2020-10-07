import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { StyledComponent } from 'styled-components'

import GlobalStyle from './../../styles/global'

import * as Styled from './styles'

import LifePointsDisplay from './../../components/LifePointsDisplay/index'
import CalculatorDisplay from './../../components/CalculatorDisplay/index'
import NumberButton from './../../components/NumberButton/index'
import IconButton from './../../components/IconButton/index'

export default function Home() {
  const [calculatorValue, setCalculatorValue] = useState<string>('00')
  const [playerOneLifePoints, setPlayerOneLifePoints] = useState<number>(8000)
  const [playerTwoLifePoints, setPlayerTwoLifePoints] = useState<number>(8000)
  const [dice, setDice] = useState<StyledComponent<IconType, any>>(Styled.GenericDice)

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

  function handleChangeCalcalatorValue(number: number, player: 1 | 2, operation: 'plus' | 'minus') {
    if (Number(calculatorValue) <= 0) {
      return
    }

    function zeroLifePoints(number: number) {
      if (number < 0) {
        return 0
      } else {
        return number
      }
    }
    
    if (operation === 'plus') {
      if (player === 1) {
        setPlayerOneLifePoints(playerOneLifePoints + number)
      
      } else {
        setPlayerTwoLifePoints(playerTwoLifePoints + number)
      }
    } else {
      if (player === 1) {
        setPlayerOneLifePoints(zeroLifePoints(playerOneLifePoints - number))
      
      } else {
        setPlayerTwoLifePoints(zeroLifePoints(playerTwoLifePoints - number))
      }
    }

    setCalculatorValue('00')
  }

  function reloadLifePoints() {
    setPlayerOneLifePoints(8000)
    setPlayerTwoLifePoints(8000)
  }

  function handleChangeDice() {
    const diceNumbers = [
      Styled.DiceOne,
      Styled.DiceTwo,
      Styled.DiceThree,
      Styled.DiceFour,
      Styled.DiceFive,
      Styled.DiceSix
    ]

    let diceNumber = 0
    while (diceNumber < 1 || diceNumber > 5) {
      diceNumber = Math.round(Math.random() * 10)
    }

    setDice(diceNumbers[diceNumber])
  }

  return (
    <>
      <GlobalStyle />

      <LifePointsDisplay playerLifePoints={playerOneLifePoints} />
      <LifePointsDisplay playerLifePoints={playerTwoLifePoints} />

      <NumberButton number={1} onClick={() => handleCalculatorValue(1)} />
      <NumberButton number={2} onClick={() => handleCalculatorValue(2)} />

      <CalculatorDisplay value={calculatorValue} />

      <IconButton Icon={Styled.BackspaceIcon} onClick={() => handleDeleteCalculatorValue()} />

      <IconButton Icon={Styled.Reload} onClick={() => reloadLifePoints()} />

      <IconButton Icon={dice} onClick={() => handleChangeDice()} />
      
      <IconButton Icon={Styled.PlusIcon} onClick={() => handleChangeCalcalatorValue(Number(calculatorValue), 1, 'plus')} />
      <IconButton Icon={Styled.MinusIcon} onClick={() => handleChangeCalcalatorValue(Number(calculatorValue), 1, 'minus')} />

      <IconButton Icon={Styled.PlusIcon} onClick={() => handleChangeCalcalatorValue(Number(calculatorValue), 2, 'plus')} />
      <IconButton Icon={Styled.MinusIcon} onClick={() => handleChangeCalcalatorValue(Number(calculatorValue), 2, 'minus')} />
    </>
  )
}
