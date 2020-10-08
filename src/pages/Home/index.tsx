import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { StyledComponent } from 'styled-components'

import GlobalStyle from './../../styles/global'

import * as Styled from './styles'

import LifePointsDisplay from './../../components/LifePointsDisplay/index'
import CalculatorDisplay from './../../components/CalculatorDisplay/index'
import NumberButton from './../../components/NumberButton/index'
import IconButton from './../../components/IconButton/index'
import GameHistory from './../../components/GameHistory/index'

export default function Home() {
  const [calculatorValue, setCalculatorValue] = useState<string>('00')
  const [playerOneLifePoints, setPlayerOneLifePoints] = useState<number>(8000)
  const [playerTwoLifePoints, setPlayerTwoLifePoints] = useState<number>(8000)
  const [dice, setDice] = useState<StyledComponent<IconType, any>>(Styled.GenericDice)
  const [eventList, setEventList] = useState<Array<string>>([])
  const [showGameHistory, setShowGameHistory] = useState<boolean>(false)

  function addEventToList(eventDescription: string) {
    setEventList([eventDescription, ...eventList])
  }

  function renderGameHistoryComponent() {
    if (showGameHistory) {
      return <GameHistory history={eventList} CloseFunction={setShowGameHistory} />
    }
  }

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
        addEventToList(`Player 1: ${playerOneLifePoints} + ${number} = ${playerOneLifePoints + number}`)
      
      } else {
        setPlayerTwoLifePoints(playerTwoLifePoints + number)
        addEventToList(`Player 2: ${playerTwoLifePoints} + ${number} = ${playerTwoLifePoints + number}`)
      }
    } else {
      if (player === 1) {
        const newlifePoints = zeroLifePoints(playerOneLifePoints - number)
        setPlayerOneLifePoints(newlifePoints)
        if (newlifePoints > 0) addEventToList(`Player 1: ${playerOneLifePoints} - ${number} = ${playerOneLifePoints - number}`)
        
      
      } else {
        const newlifePoints = zeroLifePoints(playerTwoLifePoints - number)
        setPlayerTwoLifePoints(zeroLifePoints(playerTwoLifePoints - number))
        if (newlifePoints > 0) addEventToList(`Player 2: ${playerTwoLifePoints} - ${number} = ${playerTwoLifePoints - number}`)
      }
    }

    setCalculatorValue('00')
  }

  function reloadLifePoints() {
    setPlayerOneLifePoints(8000)
    setPlayerTwoLifePoints(8000)

    addEventToList('Life Points Reset!')
  }

  function undoEvent() {
    let event = eventList[0] || ''

    const isPlayerPointsChange = event.includes('Player')
    const isPlayerOne = event.includes('Player 1')
    const isPlayerTwo = event.includes('Player 2')
    
    if (isPlayerPointsChange) {
      const lifePoints = event.split(' ')[2]

      if (isPlayerOne) setPlayerOneLifePoints(Number(lifePoints))
      if (isPlayerTwo) setPlayerTwoLifePoints(Number(lifePoints))

      setEventList(eventList.slice(1))
      return
    } else {
      setEventList(eventList.slice(1))
    }
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

    let diceNumber = -1
    while (diceNumber < 0 || diceNumber > 5) {
      diceNumber = Math.round(Math.random() * 10)
    }

    addEventToList(`rolled dice: ${diceNumber + 1}`)
    setDice(diceNumbers[diceNumber])
  }

  return (
    <>
      <GlobalStyle />

      {renderGameHistoryComponent()}

      <LifePointsDisplay playerLifePoints={playerOneLifePoints} />
      <LifePointsDisplay playerLifePoints={playerTwoLifePoints} />

      <NumberButton number={1} onClick={() => handleCalculatorValue(1)} />
      <NumberButton number={2} onClick={() => handleCalculatorValue(2)} />

      <CalculatorDisplay value={calculatorValue} />

      <IconButton Icon={Styled.BackspaceIcon} onClick={() => handleDeleteCalculatorValue()} />

      <IconButton Icon={Styled.Reload} onClick={() => reloadLifePoints()} />

      <IconButton Icon={dice} onClick={() => handleChangeDice()} />

      <IconButton Icon={Styled.BackIcon} onClick={() => undoEvent()} />

      <IconButton Icon={Styled.HistoryIcon} onClick={() => setShowGameHistory(true)} />
      
      <IconButton Icon={Styled.PlusIcon} onClick={() => handleChangeCalcalatorValue(Number(calculatorValue), 1, 'plus')} />
      <IconButton Icon={Styled.MinusIcon} onClick={() => handleChangeCalcalatorValue(Number(calculatorValue), 1, 'minus')} />

      <IconButton Icon={Styled.PlusIcon} onClick={() => handleChangeCalcalatorValue(Number(calculatorValue), 2, 'plus')} />
      <IconButton Icon={Styled.MinusIcon} onClick={() => handleChangeCalcalatorValue(Number(calculatorValue), 2, 'minus')} />
    </>
  )
}
