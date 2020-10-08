import styled from 'styled-components'
import {
  FaTimes
} from 'react-icons/fa'

const iconsSize = '14px'

export const Container = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;

  background-color: #FFF;

  z-index: 9999;
`

export const Header = styled.div`
  height: 60px;
  width: 98%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const CloseIcon = styled(FaTimes)`
  font-size: ${iconsSize};
`

export const Content = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Event = styled.p`
  font-size: 16px;
  font-size: 1rem;
`
