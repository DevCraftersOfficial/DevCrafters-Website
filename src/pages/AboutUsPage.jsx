import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutIllustration from "../assets/illustrations/teamwork.svg";
import MissionIllustration from "../assets/illustrations/mission.svg";
import ValuesIllustration from "../assets/illustrations/values.svg";

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | DevCrafters</title>
        <meta name="description" content="Meet the team behind DevCrafters — passionate developers building powerful digital solutions." />
        <meta name="keywords" content="DevCrafters team, about devcrafters, software company vision, web development agency" />
        <meta name="author" content="DevCrafters" />
        <meta property="og:title" content="About Us | DevCrafters" />
        <meta property="og:description" content="We're a team of dreamers, designers, and developers building the future of tech." />
        <meta property="og:image" content="https://devcrafters.in/og-image.png" />
        <meta property="og:url" content="https://devcrafters.in/about-us" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>


      <div className="bg-white text-gray-800">

        {/* Hero Section */}
        <section className="px-6 py-16 md:px-20">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="max-w-xl space-y-6" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-[#FF725E]">
                Who We Are
              </h1>
              <p className="text-lg text-gray-700">
                At <span className="text-[#FF725E] font-semibold">DevCrafters</span>, we craft digital experiences that are built to perform. From backend systems to beautiful frontends, we empower businesses and individuals with high-quality, scalable solutions.
              </p>
              <p className="text-base text-gray-600">
                We don't just deliver code. We deliver <strong>value</strong>, <strong>trust</strong>, and <strong>a partner you can count on</strong>.
              </p>
            </div>

            <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200">
              <img
                src={AboutIllustration}
                alt="About DevCrafters"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-orange-50 px-6 py-16 md:px-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="100">
              <img
                src={MissionIllustration}
                alt="Our Mission"
                className="w-full h-auto"
              />
            </div>

            <div className="max-w-xl space-y-6" data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FF725E]">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700">
                To help startups, solo founders, and businesses build world-class software with clean code, modern design, and meaningful collaboration.
              </p>
              <p className="text-base text-gray-600">
                We believe that <strong>technology should be empowering</strong>, not overwhelming — and that’s exactly what we bring to the table.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-6 py-16 md:px-20">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="max-w-xl space-y-6" data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FF725E]">
                Our Core Values
              </h2>
              <ul className="list-disc ml-5 text-gray-700 text-lg space-y-2">
                <li><strong>Clarity Over Clutter:</strong> Simplicity in code and communication.</li>
                <li><strong>Client-First Approach:</strong> Your goals guide every step.</li>
                <li><strong>Pixel-Perfect Craft:</strong> Design and dev working hand-in-hand.</li>
                <li><strong>Always Learning:</strong> We evolve with tech, so you stay ahead.</li>
                <li><strong>Ownership:</strong> We treat your project like our own.</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="100">
              <img
                src={ValuesIllustration}
                alt="Core Values"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#FF725E] px-6 py-12 md:px-20 text-white text-center">
          <div data-aos="zoom-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Something Great Together</h3>
            <p className="text-lg mb-6">Have a project in mind or just want to say hello?</p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#FF725E] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutUsPage;
