import { useEffect } from "react"
import { useLocation } from "react-router"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // ← Smooth animation
    })
  }, [pathname])

  return null
}

export default ScrollToTop
