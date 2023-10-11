import { styled } from 'styled-components'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  width: 100%;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  justify-content: center;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1.5rem;
    display: flex;
    align-items: center;

    @media (max-width: 624px) {
      padding: 1rem;
    }
  }
  @media (max-width: 624px) {
    font-size: 7rem;
    line-height: 7rem;
  }

  @media (max-width: 450px) {
    font-size: 5rem;
    line-height: 5rem;
  }
  @media (max-width: 375px) {
    font-size: 4rem;
    line-height: 4rem;
  }
  @media (max-width: 320px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
