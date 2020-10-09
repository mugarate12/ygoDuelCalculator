import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { StyledComponent } from 'styled-components'

import GlobalStyle from './../../styles/global'

import * as Styled from './styles'

import LifePointsDisplay from './../../components/LifePointsDisplay/index'
import CalculatorDisplay from './../../components/CalculatorDisplay/index'
import IconButton from './../../components/IconButton/index'
import GameHistory from './../../components/GameHistory/index'

import PlayerOneActions from './../../containers/PlayerOneActions/index'
import PlayerTwoActions from './../../containers/PlayerTwoActions/index'

export default function Home() {
  const [calculatorValue, setCalculatorValue] = useState<string>('00')
  const [calculatorPlayerTwoValue, setCalculatorPlayerTwoValue] = useState<string>('00')
  const [playerOneLifePoints, setPlayerOneLifePoints] = useState<number>(8000)
  const [playerTwoLifePoints, setPlayerTwoLifePoints] = useState<number>(8000)
  const [dice, setDice] = useState<StyledComponent<IconType, any>>(Styled.GenericDice)
  const [dice2, setDice2] = useState<StyledComponent<IconType, any>>(Styled.GenericDice)
  const [eventList, setEventList] = useState<Array<string>>([])
  const [showGameHistory, setShowGameHistory] = useState<boolean>(false)
  const [time] = useState<string>('40:00')

  // setInterval(() => {
  //   let [minutes, seconds] = time.split(':')
  //   let numberMinutes = Number(minutes)
  //   let numberSeconds = Number(seconds)
    
  //   if (numberMinutes === 0 && numberSeconds === 0) {
  //     setTime('TIME')

  //   } else if (numberSeconds === 0) {
  //     numberMinutes -= 1
  //     numberSeconds = 60
    
  //   } else {
  //     numberSeconds -= 1  
  //   }
    
  //   setTime(`${numberMinutes}:${numberSeconds}`)
  // }, 10000)
  
  function addEventToList(eventDescription: string) {
    setEventList([eventDescription, ...eventList])
  }

  function renderGameHistoryComponent() {
    if (showGameHistory) {
      return <GameHistory history={eventList} CloseFunction={setShowGameHistory} />
    }
  }

  function calculatorMobileOrNot(player: 1 | 2) {
    let setStateOnCalculatorValue: React.Dispatch<React.SetStateAction<string>>
    let playerCalculatorValue: string

    if (player === 1 || window.innerWidth > 450) {
      playerCalculatorValue = calculatorValue
      setStateOnCalculatorValue = setCalculatorValue

    } else {
      playerCalculatorValue = calculatorPlayerTwoValue
      setStateOnCalculatorValue = setCalculatorPlayerTwoValue
    }

    return { playerCalculatorValue, setStateOnCalculatorValue }
  }

  function handleCalculatorValue(number: number, player: 1 | 2) {
    const { playerCalculatorValue, setStateOnCalculatorValue } = calculatorMobileOrNot(player)

    const isLessThanHundred = playerCalculatorValue.length < 4
    const isThousand = playerCalculatorValue.length === 4
    const isThirdNumberIsZero = Number(playerCalculatorValue[2]) === 0
    const isFourthNumberIsZero = Number(playerCalculatorValue[3]) === 0

    if (isLessThanHundred) {
      setStateOnCalculatorValue(`${number}${playerCalculatorValue}`)

    } else if (isThousand && isThirdNumberIsZero){
      setStateOnCalculatorValue(`${playerCalculatorValue.slice(0, 2)}${number}0`)

    } else if (isThousand && isFourthNumberIsZero){
      setStateOnCalculatorValue(`${playerCalculatorValue.slice(0, 3)}${number}`)

    } else {
      setStateOnCalculatorValue(`${playerCalculatorValue}${number}`)
    }
  }

  function handleDeleteCalculatorValue(player: 1 | 2) {
    const { playerCalculatorValue, setStateOnCalculatorValue } = calculatorMobileOrNot(player)

    const biggerThanThousand = playerCalculatorValue.length > 4
    const isThousand = playerCalculatorValue.length === 4
    const isHundred = playerCalculatorValue.length === 3
    const isThirdNumberIsZero = Number(playerCalculatorValue[2]) === 0
    const isFourthNumberIsZero = Number(playerCalculatorValue[3]) === 0

    if (biggerThanThousand) {
      setStateOnCalculatorValue(playerCalculatorValue.slice(0, playerCalculatorValue.length - 1))
    
    } else if (isThousand && !isThirdNumberIsZero && isFourthNumberIsZero) {
      setStateOnCalculatorValue(`${playerCalculatorValue.slice(0, 2)}00`)
    
    } else if (isThousand && !isThirdNumberIsZero && !isFourthNumberIsZero) {
      setStateOnCalculatorValue(`${playerCalculatorValue.slice(0, 3)}0`)
      
    } else if (isThousand && isThirdNumberIsZero && isFourthNumberIsZero) {
      setStateOnCalculatorValue(`${playerCalculatorValue[0]}00`)

    } else if (isHundred) {
      setStateOnCalculatorValue('00')
    }
  }

  function handleChangeCalcalatorValue(player: 1 | 2, operation: 'plus' | 'minus') {
    const { playerCalculatorValue, setStateOnCalculatorValue } = calculatorMobileOrNot(player)

    const number = Number(playerCalculatorValue)

    if (number <= 0) {
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

    setStateOnCalculatorValue('00')
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

  function handleChangeDice(player: 1 | 2) {
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
    if (player === 1 || window.innerWidth > 450) {
      setDice(diceNumbers[diceNumber])
    } else {
      setDice2(diceNumbers[diceNumber])
    }
  }

  return (
    <>
      <GlobalStyle />

      {renderGameHistoryComponent()}

      <PlayerTwoActions
        historyFunction={() => setShowGameHistory(true)}
        undoFunction={undoEvent}
        reloadFunction={reloadLifePoints}
        backSpaceFunction={handleDeleteCalculatorValue}
        changeDiceFunction={handleChangeDice}
        handleCalculateFunction={handleCalculatorValue}
        diceIcon={dice2} 
      />

      <Styled.CalculatorValueDesktopContainer>
        <CalculatorDisplay value={calculatorValue} />
        
        <Styled.TimerContainer>
          <Styled.TimerContent>{time}</Styled.TimerContent>
        </Styled.TimerContainer>
      </Styled.CalculatorValueDesktopContainer>
      
      <Styled.PlayerTwoPointsContainer>
        <LifePointsDisplay playerLifePoints={playerTwoLifePoints} />

        <Styled.ButtonsContainer>
          <Styled.CalculatorValueMobileContainer>
            <CalculatorDisplay value={calculatorPlayerTwoValue} />
          </Styled.CalculatorValueMobileContainer>

          <Styled.ActionButtonsContainer>
            <IconButton Icon={Styled.PlusIcon} onClick={() => handleChangeCalcalatorValue(2, 'plus')} />
            <IconButton Icon={Styled.MinusIcon} onClick={() => handleChangeCalcalatorValue(2, 'minus')} />
          </Styled.ActionButtonsContainer>
        </Styled.ButtonsContainer>
      </Styled.PlayerTwoPointsContainer>

      <Styled.PlayerOnePointsContainer>
        <LifePointsDisplay playerLifePoints={playerOneLifePoints} />

        <Styled.ButtonsContainer>
          <Styled.CalculatorValueMobileContainer>
            <CalculatorDisplay value={calculatorValue} />
          </Styled.CalculatorValueMobileContainer>

          <Styled.ActionButtonsContainer>
            <IconButton Icon={Styled.PlusIcon} onClick={() => handleChangeCalcalatorValue(1, 'plus')} />
            <IconButton Icon={Styled.MinusIcon} onClick={() => handleChangeCalcalatorValue(1, 'minus')} />
          </Styled.ActionButtonsContainer>
        </Styled.ButtonsContainer>
      </Styled.PlayerOnePointsContainer>

      <PlayerOneActions
        historyFunction={() => setShowGameHistory(true)}
        undoFunction={undoEvent}
        reloadFunction={reloadLifePoints}
        backSpaceFunction={handleDeleteCalculatorValue}
        changeDiceFunction={handleChangeDice}
        handleCalculateFunction={handleCalculatorValue}
        diceIcon={dice} 
      />
      
    </>
  )
}
