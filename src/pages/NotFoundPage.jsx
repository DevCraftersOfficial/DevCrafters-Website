import { Helmet } from "react-helmet-async"
import { Link } from "react-router"
import { motion } from "framer-motion"
import NotFoundIllustration from "../assets/illustrations/404.svg"

const NotFoundPage = () => {
  return (
    <>
        <Helmet>
          <title>404 | Page Not Found - DevCrafters</title>
          <meta name="description" content="Oops! The page you're looking for doesn’t exist. Let’s get you back to something awesome." />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="author" content="DevCrafters" />
          <meta property="og:title" content="404 | Not Found - DevCrafters" />
          <meta property="og:description" content="This page is missing, but the creativity isn’t. Head back to DevCrafters’ homepage." />
          <meta property="og:image" content="https://devcrafters.in/og-image.png" />
          <meta property="og:url" content="https://devcrafters.in/404" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

    <motion.section
      className="min-h-screen bg-gradient-to-br from-[#fff0ec] via-white to-[#fffaf7] flex items-center justify-center px-6 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-xl text-center space-y-8">
        {/* Animated Illustration */}
        <motion.img
          src={NotFoundIllustration}
          alt="404 Not Found"
          className="w-full max-w-xs mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-5xl font-extrabold text-[#FF725E]">404</h1>
          <p className="text-lg text-[#44221e]">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-[#FF725E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e85b49] transition-all"
        >
          Back to Homepage
        </Link>
      </div>
    </motion.section>
    </>
  )
}

export default NotFoundPage
