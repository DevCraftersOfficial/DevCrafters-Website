import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Logos
import react from "../assets/logos/react.svg";
import tailwind from "../assets/logos/tailwind.svg";
import nodejs from "../assets/logos/nodejs.svg";
import go from "../assets/logos/go.svg";
import postgresql from "../assets/logos/postgresql.svg";
import mongodb from "../assets/logos/mongodb.svg";
import docker from "../assets/logos/docker.svg";
import git from "../assets/logos/git.svg";
import linux from "../assets/logos/linux.svg";

const techStack = [
  { name: "React", logo: react },
  { name: "Tailwind CSS", logo: tailwind },
  { name: "Node.js", logo: nodejs },
  { name: "Go", logo: go },
  { name: "PostgreSQL", logo: postgresql },
  { name: "MongoDB", logo: mongodb },
  { name: "Docker", logo: docker },
  { name: "Git", logo: git },
  { name: "Linux", logo: linux },
];

const TechStack = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-50 px-6 py-20 md:px-20">
      <div data-aos="fade-up" className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF725E]">
          Our Tech Stack
        </h2>
        <p className="text-gray-700 mt-3 text-lg max-w-xl mx-auto">
          We build scalable, secure, and modern apps using a battle-tested stack of technologies.
        </p>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center md:px-32 py-6"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {techStack.map(({ name, logo }) => (
          <div
            key={name}
            className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105 w-36 md:w-42"
          >
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img src={logo} alt={name} className="w-full h-full object-contain" />
            </div>
            <span className="text-sm font-medium text-gray-800 text-center">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
