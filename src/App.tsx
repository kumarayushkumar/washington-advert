import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import Layout from './layouts/Layout'
import { WebDesigning } from './pages/services/WebDesigning'
import { SEO } from './pages/services/SEO'
import { SocialMediaMarketing } from './pages/services/SocialMediaMarketing'
import { PPC } from './pages/services/PPC'
import { LocalSEO } from './pages/services/LocalSEO'
import { GMB } from './pages/services/GMB'
import { Packages } from './pages/Packages'
import { Review } from './pages/Review'
import { Industries } from './pages/Industries'
import { ContactUs } from './pages/ContactUs'
import { AboutUs } from './pages/AboutUs'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />

      <Route element={<Layout />}>
        <Route path="services">
          <Route path="web-designing" element={<WebDesigning />} />
          <Route path="seo" element={<SEO />} />
          <Route path="ppc" element={<PPC />} />
          <Route
            path="social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route path="local-seo" element={<LocalSEO />} />
          <Route path="gmb" element={<GMB />} />
        </Route>
        <Route path="packages" element={<Packages />} />
        <Route path="review" element={<Review />} />
        <Route path="industries" element={<Industries />} />

        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
