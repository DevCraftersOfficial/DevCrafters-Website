import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroIllustration from "../assets/illustrations/Programmer-amico.svg";

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#ffece9] via-white to-[#fff5f3] text-[#331b18] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div
          className="space-y-6 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build Better with <span className="text-[#FF725E]">DevCrafters</span>
          </h1>
          <p className="text-lg text-[#5c2e27]" data-aos="fade-up" data-aos-delay="200">
            We craft scalable, elegant, and secure Web & SaaS solutions tailored to your business.
          </p>

          <div
            className="flex justify-center md:justify-start space-x-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="/contact"
              className="bg-[#FF725E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e85b49] transition-all"
            >
              Get a Quote
            </a>
            <a
              href="/services"
              className="border border-[#FF725E] text-[#FF725E] px-6 py-3 rounded-full font-semibold hover:bg-[#ffece9] transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Image or Illustration */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="zoom-in-left"
          data-aos-delay="300"
        >
          <img
            src={heroIllustration}
            alt="DevCrafters illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
