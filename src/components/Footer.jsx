import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#331b18] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-[#FF725E] mb-4">DevCrafters</h3>
          <p className="text-sm text-gray-300">
            We craft scalable, secure, and modern digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-[#FF725E] transition">Home</a></li>
            <li><a href="services" className="hover:text-[#FF725E] transition">Services</a></li>
            <li><a href="/projects" className="hover:text-[#FF725E] transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-[#FF725E] transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">What We Do</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Custom Web Development</li>
            <li>SaaS Product Engineering</li>
            <li>UI/UX Design</li>
            <li>API Development</li>
            <li>DevOps & Deployment</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <p className="text-sm text-gray-300 mb-4">contact@devcrafters.in</p>
          <div className="flex space-x-4 text-2xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF725E] transition"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF725E] transition"><FaGithub /></a>
            <a href="mailto:contact@devcrafters.in" className="hover:text-[#FF725E] transition"><FaEnvelope /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-[#553832] pt-6 text-center text-sm text-gray-400 space-y-1">
        <div>© {new Date().getFullYear()} DevCrafters. All rights reserved.</div>
        <div className="space-x-4">
          <a href="/privacy-policy" className="hover:text-[#FF725E] transition underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-[#FF725E] transition underline">
            Terms of Service
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
