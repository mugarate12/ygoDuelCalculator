import React from 'react'
import { IconType } from 'react-icons'
import { StyledComponent } from 'styled-components'

import * as Styled from './styles'

import IconButton from './../../components/IconButton/index'
import NumberButton from './../../components/NumberButton/index'

interface PlayerTwoActionsInterface {
  backSpaceFunction: (player: 1 | 2) => void;
  reloadFunction: () => void;
  undoFunction: () => void;
  historyFunction: () => void;
  changeDiceFunction: (player: 1 | 2) => void;
  handleCalculateFunction: (number: number, player: 1 | 2) => void;
  diceIcon: StyledComponent<IconType, any>;
}

const PlayerTwoActions: React.FC<PlayerTwoActionsInterface> = ({
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
      <IconButton Icon={Styled.HistoryIcon} onClick={() => historyFunction()} />
      <IconButton Icon={Styled.BackIcon} onClick={() => undoFunction()} />
      <IconButton Icon={diceIcon} onClick={() => changeDiceFunction(2)} />
      <IconButton Icon={Styled.ReloadIcon} onClick={() => reloadFunction()} />
      <IconButton Icon={Styled.BackspaceIcon} onClick={() => backSpaceFunction(2)} />
      
      <NumberButton number={0} onClick={() => handleCalculateFunction(0, 2)} />
      <NumberButton number={1} onClick={() => handleCalculateFunction(1, 2)} />
      <NumberButton number={2} onClick={() => handleCalculateFunction(2, 2)} />
      <NumberButton number={3} onClick={() => handleCalculateFunction(3, 2)} />
      <NumberButton number={4} onClick={() => handleCalculateFunction(4, 2)} />

      <NumberButton number={5} onClick={() => handleCalculateFunction(5, 2)} />
      <NumberButton number={6} onClick={() => handleCalculateFunction(6, 2)} />
      <NumberButton number={7} onClick={() => handleCalculateFunction(7, 2)} />
      <NumberButton number={8} onClick={() => handleCalculateFunction(8, 2)} />
      <NumberButton number={9} onClick={() => handleCalculateFunction(9, 2)} />
    </Styled.Container>
  )
}

export default PlayerTwoActions
