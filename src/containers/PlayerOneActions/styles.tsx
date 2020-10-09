import styled from 'styled-components'
import {
  FaBackspace,
  FaSync,
  FaChevronLeft,
  FaTasks
} from 'react-icons/fa'

const iconsSize = '24px'

export const Container = styled.div`
  width: 100%;
  height: 40vh;
  

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (min-width: 450px) {
    height: 80vh;
  }
`

// icons
export const BackspaceIcon = styled(FaBackspace)`
  font-size: ${iconsSize};
`

export const ReloadIcon = styled(FaSync)`
  font-size: ${iconsSize};
`

export const BackIcon = styled(FaChevronLeft)`
  font-size: ${iconsSize};
`

export const HistoryIcon = styled(FaTasks)`
  font-size: ${iconsSize};
`