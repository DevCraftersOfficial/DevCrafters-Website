import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="max-w-4xl mx-auto py-24 px-6 text-[#331b18]">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: April 6, 2025</p>

      <div className="space-y-6 leading-relaxed">
        <p>
          At <strong>DevCrafters</strong>, accessible from <a href="https://devcrafters.in" className="text-[#FF725E] underline">https://devcrafters.in</a>, we value your privacy. This Privacy Policy outlines how we handle personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li>Name, Email, Company name</li>
          <li>Contact messages via forms</li>
          <li>Anonymous analytics (Google Analytics)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">2. How We Use Information</h2>
        <p>We use your data to provide services, improve our website, and communicate updates (only with consent).</p>

        <h2 className="text-2xl font-semibold mt-8">3. Third-Party Services</h2>
        <p>
          We may use services like Google Analytics, Zoho Mail, and email delivery services. These may collect data under their own privacy terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. Data Protection</h2>
        <p>We use HTTPS, backend validations, and secure storage to protect your information.</p>

        <h2 className="text-2xl font-semibold mt-8">5. Cookies</h2>
        <p>We use cookies for improving user experience. You can disable them in your browser settings.</p>

        <h2 className="text-2xl font-semibold mt-8">6. Your Rights</h2>
        <p>You can request access, correction, or deletion of your data by contacting us.</p>

        <h2 className="text-2xl font-semibold mt-8">7. Contact Us</h2>
        <p>📧 Email: <a href="mailto:contact@devcrafters.in" className="text-[#FF725E] underline">contact@devcrafters.in</a></p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
