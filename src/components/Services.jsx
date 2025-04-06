import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import webDev from "../assets/illustrations/web-dev.svg"
import saas from "../assets/illustrations/saas.svg"
import uiux from "../assets/illustrations/ui-ux.svg"
import apiAuto from "../assets/illustrations/api-auto.svg"

const services = [
  {
    title: "Custom Web Development",
    description:
      "Scalable, fast, and modern websites using React, Tailwind, and Go for backend.",
    image: webDev,
  },
  {
    title: "SaaS Platform Launch",
    description:
      "From concept to cloud — complete SaaS platform setup with CI/CD and production-ready infrastructure.",
    image: saas,
  },
  {
    title: "UI/UX Design",
    description:
      "Designs that not only look great but also enhance user experience and conversion.",
    image: uiux,
  },
  {
    title: "API & Automation",
    description:
      "Robust REST APIs and task automation to scale your business effortlessly.",
    image: apiAuto,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-[#fff5f3] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#331b18] mb-4">Our Services</h2>
        <p className="text-[#6b3f38] text-lg">
          We craft digital products with precision and passion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-40 mb-6 object-contain"
            />
            <h3 className="text-xl font-semibold text-[#331b18] mb-2">
              {service.title}
            </h3>
            <p className="text-[#6b3f38] text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
