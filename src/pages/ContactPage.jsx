import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Please enter a valid name with letters only.";
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "That doesn’t look like a valid email address.";
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should be exactly 10 digits.";
    }

    if (!formData.service) {
      newErrors.service = "Please select the service you’re looking for.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "A brief message helps us understand your needs.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
    } else {
        setFormSubmitted(true);
    }
  };
  

  return (
    <>
      <Helmet>
        <title>Contact | DevCrafters</title>
        <meta
          name="description"
          content="Let’s bring your ideas to life. Contact DevCrafters for collaborations, queries, or a free consultation."
        />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-white via-[#fff3ef] to-[#ffece9] px-6 py-20 md:px-20 text-[#331b18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Let’s Talk <span className="inline-block animate-waving-hand">👋</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Whether it’s a question, idea, or a potential project—drop us a line. <br className="hidden sm:block" />
              We’re excited to connect with you!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all" data-aos="fade-up" data-aos-delay="200">
            {!formSubmitted ? (
              <form
                action="https://formsubmit.co/contact@devcrafters.in"
                method="POST"
                noValidate
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden fields for FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="/thank-you" />

                {/* Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone (Optional) */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Service */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">What service are you looking for?</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Backend API">Backend API</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us what you're building or how we can help..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#331b18] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#4d2a26] hover:cursor-pointer transition duration-200"
                >
                  🚀 Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-green-600 mb-4">✅ Message Sent!</h2>
                <p className="text-gray-700">We've received your message and will get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
