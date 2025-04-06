import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code,
  Server,
  Layout,
  Database,
  GitMerge,
  Cloud,
  Settings,
  Terminal,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: <Code size={32} className="text-[#FF725E]" />,
    title: "Custom Web Development",
    description:
      "We build fast, responsive, and maintainable web applications tailored to your business needs using React, Tailwind, and Go.",
    result: "From concept to production, we ensure every project is scalable, secure, and delightful to use.",
  },
  {
    icon: <Server size={32} className="text-[#FF725E]" />,
    title: "SaaS Product Engineering",
    description:
      "Build your next SaaS product with a team that understands architecture, CI/CD, and performance from day one.",
    result: "Launch MVPs faster, onboard users smoothly, and scale without tech debt.",
  },
  {
    icon: <Terminal size={32} className="text-[#FF725E]" />,
    title: "API & Backend Services",
    description:
      "Robust REST or GraphQL APIs with secure authentication, caching, and background job queues using Go or Node.",
    result: "Enable seamless integration, lightning-fast performance, and clean documentation.",
  },
  {
    icon: <Layout size={32} className="text-[#FF725E]" />,
    title: "UI/UX Design",
    description:
      "We design modern, intuitive interfaces that align with your brand and maximize user experience.",
    result: "Improve engagement, reduce bounce rate, and guide users toward conversion.",
  },
  {
    icon: <Cloud size={32} className="text-[#FF725E]" />,
    title: "DevOps & Cloud Setup",
    description:
      "Set up production-ready pipelines using GitHub Actions, Docker, and modern deployment strategies.",
    result: "Zero-downtime deployments, faster iterations, and fewer 'it works on my machine' moments.",
  },
  {
    icon: <Database size={32} className="text-[#FF725E]" />,
    title: "Database Design & Optimization",
    description:
      "Clean schemas, optimized queries, migrations, and backups using PostgreSQL and MongoDB.",
    result: "Ensure reliability, faster load times, and peace of mind for data integrity.",
  },
  {
    icon: <GitMerge size={32} className="text-[#FF725E]" />,
    title: "Third-party Integrations",
    description:
      "From payment gateways to CRMs and email tools — we integrate what matters to your business.",
    result: "Automate workflows, enhance user experience, and simplify your operations.",
  },
  {
    icon: <Settings size={32} className="text-[#FF725E]" />,
    title: "Code Audits & Refactoring",
    description:
      "Improve existing codebases through detailed reviews, modern patterns, and better architecture.",
    result: "Ship faster, reduce bugs, and make your code easier to maintain for years to come.",
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <>
        <Helmet>
            <title>Services | DevCrafters</title>
            <meta name="description" content="Explore our scalable SaaS and web development services tailored for startups and enterprises." />
            <meta name="keywords" content="DevCrafters services, SaaS development, full stack development, custom web apps" />
            <meta name="author" content="DevCrafters" />
            <meta property="og:title" content="Services | DevCrafters" />
            <meta property="og:description" content="From MVPs to enterprise-grade SaaS platforms, we craft digital products with precision." />
            <meta property="og:image" content="https://devcrafters.in/og-image.png" />
            <meta property="og:url" content="https://devcrafters.in/services" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="bg-white px-6 py-20 md:px-20">
          {/* HERO */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 text-[#FF725E] font-semibold text-sm uppercase tracking-wide">
              <Sparkles size={16} /> What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900">
              End-to-End Development Services
            </h1>
            <p className="text-gray-700 mt-5 text-lg max-w-2xl mx-auto">
              Whether you’re launching a new idea or upgrading an existing product — DevCrafters is your dedicated
              tech partner. We bring together design, development, and DevOps under one roof.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {services.map(({ icon, title, description, result }) => (
              <div
                key={title}
                className="bg-gray-50 hover:bg-white shadow-sm hover:shadow-md rounded-2xl p-6 transition duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-white shadow-inner">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-3">{description}</p>
                <p className="text-xs text-gray-500 italic">{result}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Let’s discuss how DevCrafters can bring your vision to life with the right tech stack, design,
              and deployment strategy.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#FF725E] text-white px-6 py-3 rounded-full shadow hover:bg-[#ff543f] transition font-medium"
            >
              Get in Touch
            </a>
          </div>
        </section>
    </>
  );
};

export default ServicesPage;
