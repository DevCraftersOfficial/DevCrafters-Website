import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import logo from "./assets/images/logo_orange.avif"

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const MainLayout = lazy(() => import("./Layout/MainLayout"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex flex-col justify-center items-center h-screen w-full bg-white">
            <img
              src={logo}
              alt="DevCrafters"
              className="h-32 w-32 animate-bounce"
            />
            <p className="mt-4 text-gray-800 text-md animate-pulse">
              Crafting your experience...
            </p>
          </div>
        }
      >
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
