import React from 'react'
import { IconType } from 'react-icons'
import { StyledComponent } from 'styled-components'

import * as Styled from './styles'

import IconButton from './../../components/IconButton/index'
import NumberButton from './../../components/NumberButton/index'

interface PlayerOneActionsInterface {
  backSpaceFunction: (player: 1 | 2) => void;
  reloadFunction: () => void;
  undoFunction: () => void;
  historyFunction: () => void;
  changeDiceFunction: (player: 1 | 2) => void;
  handleCalculateFunction: (number: number, player: 1 | 2) => void;
  diceIcon: StyledComponent<IconType, any>;
}

const PlayerOneActions: React.FC<PlayerOneActionsInterface> = ({
  diceIcon,
  backSpaceFunction,
  reloadFunction,
  undoFunction,
  historyFunction,
  changeDiceFunction,
  handleCalculateFunction
}) => {
  return (
    <Styled.Container>
      <IconButton Icon={Styled.HistoryIcon} onClick={() => historyFunction()} color='#42C1C1' />
      <IconButton Icon={Styled.BackIcon} onClick={() => undoFunction()} color='#42C1C1' />
      <IconButton Icon={diceIcon} onClick={() => changeDiceFunction(1)} color='#D8D81C' />
      <IconButton Icon={Styled.ReloadIcon} onClick={() => reloadFunction()} color='#B92727' />
      <IconButton Icon={Styled.BackspaceIcon} onClick={() => backSpaceFunction(1)} color='#B92727' />
      
      <NumberButton number={0} onClick={() => handleCalculateFunction(0, 1)} player={1} />
      <NumberButton number={1} onClick={() => handleCalculateFunction(1, 1)} player={1} />
      <NumberButton number={2} onClick={() => handleCalculateFunction(2, 1)} player={1} />
      <NumberButton number={3} onClick={() => handleCalculateFunction(3, 1)} player={1} />
      <NumberButton number={4} onClick={() => handleCalculateFunction(4, 1)} player={1} />

      <NumberButton number={5} onClick={() => handleCalculateFunction(5, 1)} player={1} />
      <NumberButton number={6} onClick={() => handleCalculateFunction(6, 1)} player={1} />
      <NumberButton number={7} onClick={() => handleCalculateFunction(7, 1)} player={1} />
      <NumberButton number={8} onClick={() => handleCalculateFunction(8, 1)} player={1} />
      <NumberButton number={9} onClick={() => handleCalculateFunction(9, 1)} player={1} />
    </Styled.Container>
  )
}

export default PlayerOneActions
