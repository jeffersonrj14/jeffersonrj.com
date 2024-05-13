import AppHeader from '../shared/AppHeader'
import AppFooter from '../shared/AppFooter'
import PagesMetaHead from '@/components/PagesMetaHead'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  )
}

export default DefaultLayout
