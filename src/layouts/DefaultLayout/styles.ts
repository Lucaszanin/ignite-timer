import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 80vw;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 90vw;
    padding: 1.5rem;
  }
`
