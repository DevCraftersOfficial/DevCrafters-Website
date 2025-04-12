import React, { useEffect, useState } from "react";
import client from "../sanityClient";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/logo_orange.avif";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });

    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        title,
        slug,
        excerpt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        body,
        publishedAt
      }`;
      try {
        const result = await client.fetch(query);
        setPosts(result);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Blogs | DevCrafters</title>
        <meta
          name="description"
          content="Explore technical articles, product updates, and software engineering tips from DevCrafters."
        />
        <link rel="canonical" href="https://devcrafters.in/blog" />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-white via-[#fff3ef] to-[#ffece9] px-6 py-20 md:px-20 text-[#331b18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              DevCrafters Blog 🛠️
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Stories, insights, and tutorials from the DevCrafters team.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-white shadow-xl rounded-2xl overflow-hidden"
                >
                  <div className="w-full h-56 bg-gray-300" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
                    <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-center text-gray-500">No posts available</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <div
                    key={post.slug.current}
                    className="bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-101 hover:shadow-2xl transition-all duration-900 ease-in-out"
                    data-aos="fade-up"
                  >
                    {post.mainImage?.asset?.url && (
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.category}
                        className="w-full h-56 object-cover rounded-t-xl"
                        loading="lazy"
                      />
                    )}
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold text-[#331b18] mb-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        {new Date(post.publishedAt).toLocaleDateString()} |
                        DevCrafters Blog
                      </p>

                      <p className="text-gray-600 mb-4">
                        {post.excerpt ||
                          post.body?.[0]?.children?.[0]?.text ||
                          "No preview available"}
                      </p>
                      <Link
                        to={`/post/${post.slug.current}`}
                        className="text-[#331b18] font-semibold hover:text-[#e57b0d] hover:underline transition"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10 gap-2">
                <button
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                      scrollToTop();
                    }
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-white text-[#331b18] border-gray-300 hover:border-[#331b18]"
                  }`}
                >
                  Previous
                </button>

                {[...Array(Math.ceil(posts.length / postsPerPage))].map(
                  (_, idx) => {
                    const page = idx + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => {
                          setCurrentPage(page);
                          scrollToTop();
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                          currentPage === page
                            ? "bg-[#331b18] text-white border-[#331b18]"
                            : "bg-white text-[#331b18] border-gray-300 hover:border-[#331b18]"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                )}

                <button
                  onClick={() => {
                    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
                      setCurrentPage(currentPage + 1);
                      scrollToTop();
                    }
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                    currentPage === Math.ceil(posts.length / postsPerPage)
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-white text-[#331b18] border-gray-300 hover:border-[#331b18]"
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
