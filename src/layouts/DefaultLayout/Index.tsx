import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Index'
import { LayoutContainer } from './styles'

function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      conteúdo
    </LayoutContainer>
  )
}

export default DefaultLayout
