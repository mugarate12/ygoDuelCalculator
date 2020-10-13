import styled from 'styled-components'
import {
  FaBackspace,
  FaSync,
  FaChevronLeft,
  FaTasks
} from 'react-icons/fa'

const iconsSize = '24px'
const iconsSizeDesktop = '36px'

export const Container = styled.div`
  width: 100%;
  height: 37vh;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  transform: rotate(180deg);

  @media (min-width: 450px) {
    display: none;
  }
`

// icons
export const BackspaceIcon = styled(FaBackspace)`
  font-size: ${iconsSize};

  @media (min-width: 450px) {
    font-size: ${iconsSizeDesktop};
  }
`

export const ReloadIcon = styled(FaSync)`
  font-size: ${iconsSize};

  @media (min-width: 450px) {
    font-size: ${iconsSizeDesktop};
  }
`

export const BackIcon = styled(FaChevronLeft)`
  font-size: ${iconsSize};

  @media (min-width: 450px) {
    font-size: ${iconsSizeDesktop};
  }
`

export const HistoryIcon = styled(FaTasks)`
  font-size: ${iconsSize};

  @media (min-width: 450px) {
    font-size: ${iconsSizeDesktop};
  }
`