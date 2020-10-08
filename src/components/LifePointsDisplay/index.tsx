import React from 'react'

import * as Styled from './styles'

interface LifePointsDisplayIterface {
  playerLifePoints: number;
}

const LifePointsDisplay: React.FC<LifePointsDisplayIterface> = ({ playerLifePoints }) => {
  return (
    <Styled.Container>
      <Styled.LifePoints>{playerLifePoints}</Styled.LifePoints>
    </Styled.Container>
  )
}

export default LifePointsDisplay
