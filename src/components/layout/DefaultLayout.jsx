import { Toaster } from 'react-hot-toast'
import AppHeader from '../shared/AppHeader'
import AppFooter from '../shared/AppFooter'
import PagesMetaHead from '@/components/PagesMetaHead'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>
        <Toaster />
      </div>
      <div>{children}</div>
      <AppFooter />
    </>
  )
}

export default DefaultLayout
