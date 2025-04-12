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
        body
      }`;
      try {
        const result = await client.fetch(query);
        setPosts(result);
        setLoading(false); // Set loading to false once posts are fetched
      } catch (err) {
        console.error("Error fetching posts:", err);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-full bg-white">
        <img
          src={logo}
          alt="DevCrafters"
          className="h-32 w-32 animate-bounce"
        />
        <p className="mt-4 text-gray-800 text-md animate-pulse">
          Crafting your experience...
        </p>
      </div>
    );
  }

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

          {posts.length === 0 ? (
            <p className="text-center text-gray-500">No posts available</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div
                  key={post.slug.current}
                  className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition"
                  data-aos="fade-up"
                >
                  {post.mainImage?.asset?.url && (
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt || post.title}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt ||
                        post.body?.[0]?.children?.[0]?.text ||
                        "No preview available"}
                    </p>
                    <Link
                      to={`/post/${post.slug.current}`}
                      className="text-[#331b18] font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>

                  <Helmet>
                    <meta property="og:title" content={post.title} />
                    <meta
                      property="og:description"
                      content={
                        post.excerpt ||
                        post.body?.[0]?.children?.[0]?.text ||
                        "No preview available"
                      }
                    />
                    <meta
                      property="og:image"
                      content={post.mainImage?.asset?.url}
                    />
                    <meta
                      property="og:url"
                      content={`https://devcrafters.in/blog/${post.slug.current}`}
                    />
                  </Helmet>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
