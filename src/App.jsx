import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import MainLayout from "./Layout/MainLayout"
import NotFoundPage from "./pages/NotFoundPage"
import AboutUsPage from "./pages/AboutUsPage"
import ServicesPage from "./pages/ServicesPage"
import ContactPage from "./pages/ContactPage"
import ThankYouPage from "./pages/ThankYouPage"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
