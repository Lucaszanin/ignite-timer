import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      border-width: 1px;
      transition: all 0.2s ease-in-out;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        left: 0.8rem;
        bottom: 5px;
        background: ${(props) => props.theme['green-500']};
        transition: all 0.2s ease;
      }

      &:hover::before,
      &.active::before {
        width: 1.5rem;
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
