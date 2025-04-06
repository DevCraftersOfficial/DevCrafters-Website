import React from "react";

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-gray-800">
      <h1 className="text-3xl font-bold text-[#FF725E] mb-6">Terms of Service</h1>

      <p className="mb-4 text-sm text-gray-500">Effective Date: April 6, 2025</p>

      <section className="space-y-4 text-sm leading-6">
        <p>
          Welcome to DevCrafters. By accessing or using our website or services,
          you agree to be bound by the following Terms of Service. If you do not
          agree to these terms, please do not use our services.
        </p>

        <h2 className="font-semibold mt-6 text-lg">1. Overview</h2>
        <p>
          DevCrafters ("we", "our", or "us") offers custom software development,
          SaaS solutions, and related digital services. These Terms govern your
          use of our website and any services provided directly or indirectly
          through it.
        </p>

        <h2 className="font-semibold mt-6 text-lg">2. Use of Our Website</h2>
        <p>
          You agree to use our site and services only for lawful purposes and in
          accordance with these Terms. You must not:
        </p>
        <ul className="list-disc list-inside">
          <li>Violate any laws</li>
          <li>Attempt to hack or misuse any part of our services</li>
          <li>Send any harmful code or malware</li>
        </ul>

        <h2 className="font-semibold mt-6 text-lg">3. Intellectual Property</h2>
        <p>
          All content on this website — including code, designs, graphics, and
          logos — is the property of DevCrafters unless otherwise stated. You may
          not reproduce, distribute, or use our materials for commercial purposes
          without prior written permission.
        </p>

        <h2 className="font-semibold mt-6 text-lg">4. Services and Deliverables</h2>
        <p>
          When you engage us for services, we strive to deliver high-quality
          results tailored to your needs. Project scope and payment details will
          be handled via a separate agreement or proposal.
        </p>

        <h2 className="font-semibold mt-6 text-lg">5. Payments</h2>
        <p>
          Payments must be made as agreed upon in your project contract or
          invoice. Refunds are provided only in accordance with the agreed scope
          of work and timeline.
        </p>

        <h2 className="font-semibold mt-6 text-lg">6. Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to our services if
          you violate these Terms or act in a harmful manner.
        </p>

        <h2 className="font-semibold mt-6 text-lg">7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, DevCrafters is not liable for
          any indirect or consequential damages resulting from your use of our
          services or site.
        </p>

        <h2 className="font-semibold mt-6 text-lg">8. Modifications</h2>
        <p>
          We may revise these Terms at any time. Updates will reflect in the
          "Last Updated" section above. Continued use indicates acceptance.
        </p>

        <h2 className="font-semibold mt-6 text-lg">9. Contact</h2>
        <p>
          If you have any questions about these Terms, contact us at:{" "}
          <strong>contact@devcrafters.in</strong>
        </p>
      </section>
    </div>
  );
};

export default TermsPage;
