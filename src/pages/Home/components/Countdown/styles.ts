import { styled } from 'styled-components'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  width: 100%;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem;
    display: flex;
    align-items: center;

    @media (max-width: 400px) {
      padding: 1rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 7rem;
  }

  @media (max-width: 600px) {
    font-size: 5rem;
  }

  @media (max-width: 525px) {
    font-size: 4rem;
    line-height: 0;
  }

  @media (max-width: 480px) {
    max-width: 80vw;
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    max-width: 70vw;
    font-size: 1rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
