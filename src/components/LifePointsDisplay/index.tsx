import React from 'react'

interface LifePointsDisplayIterface {
  playerLifePoints: number;
}

const LifePointsDisplay: React.FC<LifePointsDisplayIterface> = ({ playerLifePoints }) => {
  return (
    <h1>{playerLifePoints}</h1>
  )
}

export default LifePointsDisplay
