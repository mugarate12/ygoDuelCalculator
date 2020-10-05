import React from 'react'
import { StyledComponent } from 'styled-components'
import { IconType } from 'react-icons'

import * as Styled from './styles'

interface IconButtonInterface {
  onClick?: () => void;
  Icon?: StyledComponent<IconType, any>;
}

const IconButton: React.FC<IconButtonInterface> = ({ onClick, Icon }) => {
  return (
    <Styled.ButtonContainer
      onClick={() => !!onClick ? onClick() : {}}
    >
      {!!Icon ? <Icon /> : null}      
    </Styled.ButtonContainer>
  )
}

export default IconButton
