import { Helmet } from "react-helmet-async"
import Hero from "../components/Hero"
import Services from "../components/Services"
import TechStack from "../components/TeckStack"

const HomePage = () => {
  return (
    <>
        <Helmet>
            <title>DevCrafters | Scalable SaaS & Web Solutions</title>
            <meta name="description" content="DevCrafters builds modern, scalable, and secure SaaS and web solutions for startups and businesses." />
            <meta name="keywords" content="DevCrafters, SaaS development, Web development, startup solutions, scalable software" />
            <meta name="author" content="DevCrafters" />
            <meta property="og:title" content="DevCrafters | Build Better" />
            <meta property="og:description" content="Elegant and scalable web solutions crafted for startups and businesses." />
            <meta property="og:image" content="https://devcrafters.in/og-image.png" />
            <meta property="og:url" content="https://devcrafters.in" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Hero />
        <Services />
        <TechStack />
    </>
  )
}

export default HomePage