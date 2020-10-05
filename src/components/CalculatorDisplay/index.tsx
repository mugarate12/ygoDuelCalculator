import React from 'react'

import * as Styled from './styles'

interface CalculatorDisplayInterface {
  value?: string;
  onChange?: () => void;
}

const CalculatorDisplay: React.FC<CalculatorDisplayInterface> = ({ value, onChange }) => {
  return (
    <Styled.Input 
      value={value}
      onChange={() => !!onChange ? onChange() : {}}
      disabled={true}
    />
  )
}

export default CalculatorDisplay
