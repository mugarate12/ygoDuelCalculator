import React from 'react'

import * as Styled from './styles'

import IconButton from './../IconButton/index'

interface GameHistoryInterface {
  history: Array<string>;
  CloseFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameHistory: React.FC<GameHistoryInterface> = ({ history, CloseFunction }) => {
  function renderHistory() {
    // console.log(history)
    return history.map((value, index) => {
      return <Styled.Event key={index} >{value}</Styled.Event>
    })
  }
  
  return (
    <Styled.Container>
      <Styled.Header>
        <IconButton Icon={Styled.CloseIcon} onClick={() => CloseFunction(false)} />
      </Styled.Header>
      
      <Styled.Content>
        {renderHistory()}
      </Styled.Content>
    </Styled.Container>
  )
}

export default GameHistory
