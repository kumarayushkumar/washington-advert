import { Outlet } from 'react-router-dom'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'

export default function Layout() {
  return (
    <div>
      <Header toggleZIndex={() => {}} />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  )
}
