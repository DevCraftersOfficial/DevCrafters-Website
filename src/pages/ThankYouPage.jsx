import { Helmet } from "react-helmet-async";

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | DevCrafters</title>
        <meta name="description" content="Thanks for reaching out to DevCrafters. We'll get back to you soon!" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-white via-[#fff3ef] to-[#ffece9] text-[#331b18] flex flex-col items-center justify-center px-6 py-20">

        <div className="text-center max-w-xl animate-fade-in">
          <h1 className="text-5xl font-extrabold mb-4">
            Thank You! <span className="inline-block animate-waving-hand">🙏</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-700">
            We’re thrilled to hear from you. Your message is now floating through the DevCrafters universe 🌌, and one of us will be reaching out soon.
          </p>
          <p className="text-md text-gray-600 mb-10">
            Until then, feel free to explore more of what we do or just sit back and relax. You’ve taken the first step. 🙌
          </p>
          <a
            href="/"
            className="inline-block bg-[#331b18] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#4d2a26] transition duration-200"
          >
            🏠 Back to Home
          </a>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
