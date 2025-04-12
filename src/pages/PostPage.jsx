import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router";
import client from "../sanityClient";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import slugify from "slugify";
import { PortableText } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import logo from "../assets/images/logo_orange.avif";
import { urlFor } from "../imageUrls";

const estimateReadingTime = (blocks) => {
  const plainText = blocks
    .map((block) => block.children?.map((child) => child.text || "").join(" "))
    .join(" ");
  const wordCount = plainText.split(/\s+/).length;
  return Math.ceil(wordCount / 200); // ~200 words/min
};

const components = {
  types: {
    code: ({ value }) => (
      <div className="my-6">
        {value.filename && (
          <div className="px-4 py-2 text-sm font-mono bg-gray-800 text-gray-100 rounded-t-md">
            {value.filename}
          </div>
        )}
        <SyntaxHighlighter
          language={value.language || "text"}
          style={materialDark}
          customStyle={{ borderRadius: "0 0 0.5rem 0.5rem", padding: "1rem" }}
          wrapLongLines
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),
    image: ({ value }) => {
        
        const imageUrl = urlFor(value.asset)?.url();
        return (
          <img
            src={imageUrl}
            alt={value?.alt || 'Image'}
            className="rounded-xl shadow-md my-6 max-w-full"
          />
        );
      },
    callout: ({ value }) => (
      <div
        className={`border-l-4 p-4 my-4 rounded-lg ${
          value.tone === "critical"
            ? "bg-red-100 border-red-500"
            : "bg-orange-100 border-orange-400"
        }`}
      >
        <strong className="block mb-1">{value.title}</strong>
        <p>{value.body}</p>
      </div>
    ),
    collapsible: ({ value }) => (
      <details className="my-4 rounded-lg border border-gray-300 p-4">
        <summary className="cursor-pointer font-semibold">{value.title}</summary>
        <div className="mt-2 text-sm">{value.body}</div>
      </details>
    ),
    table: ({ value }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full text-left border border-gray-300">
          <tbody>
            {value.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-gray-300">
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  block: {
    h2: ({ children }) => {
      const rawText = children.map((c) => (typeof c === "string" ? c : c?.props?.children ?? "")).join(" ");
      const id = slugify(String(rawText), { lower: true, strict: true });
      return <h2 id={id} className="text-2xl font-bold mt-12 scroll-mt-20">{children}</h2>;
    },
    h3: ({ children }) => {
      const rawText = children.map((c) => (typeof c === "string" ? c : c?.props?.children ?? "")).join(" ");
      const id = slugify(String(rawText), { lower: true, strict: true });
      return <h3 id={id} className="text-xl font-semibold mt-10 scroll-mt-20">{children}</h3>;
    },
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => (
      <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        {children}
      </a>
    ),
  },
};

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [toc, setToc] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [adjacentPosts, setAdjacentPosts] = useState({ prev: null, next: null });

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });

    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == "${slug}"][0]{
        title,
        body,
        publishedAt,
        excerpt,
        "authorName": author->name,
        "authorBio": author->bio,
        "authorImage": author->image.asset->url,
        mainImage { asset-> { url }, alt },
        slug
      }`;

      try {
        const result = await client.fetch(query);
        if (!result) return;

        const tocItems = result.body
          .filter((block) => ["h2", "h3"].includes(block.style))
          .map((block) => {
            const text = block.children?.map((child) => child?.text || "").join(" ").trim() || "heading";
            return {
              text,
              level: block.style,
              id: slugify(String(text), { lower: true, strict: true }),
            };
          });

        const readTime = estimateReadingTime(result.body);

        setPost(result);
        setToc(tocItems);
        setReadingTime(readTime);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };

    const fetchAdjacentPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt asc) {
        title,
        slug,
        publishedAt
      }`;

      const posts = await client.fetch(query);
      const currentIndex = posts.findIndex((p) => p.slug.current === slug);
      setAdjacentPosts({
        prev: posts[currentIndex - 1] || null,
        next: posts[currentIndex + 1] || null,
      });
    };

    fetchPost();
    fetchAdjacentPosts();
  }, [slug]);

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };
    handleHashScroll();
  }, [toc]);

  const handleScrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!post) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-full bg-white">
        <img src={logo} alt="DevCrafters" className="h-32 w-32 animate-bounce" />
        <p className="mt-4 text-gray-800 text-md animate-pulse">Crafting your experience...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | DevCrafters Blogs</title>
        <meta name="description" content={post.excerpt || "Read this article from DevCrafters"} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || "Read this article from DevCrafters"} />
        <meta property="og:image" content={post.mainImage?.asset?.url} />
        <meta property="og:url" content={`https://devcrafters.in/post/${post.slug.current}`} />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-white via-[#fff3ef] to-[#ffece9] px-6 py-24 md:px-20 text-[#331b18] relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-3/4" data-aos="fade-up">
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-lg"
              />
            )}

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
              {post.authorImage && (
                <img
                  src={post.authorImage}
                  alt={post.authorName}
                  className="w-10 h-10 rounded-full object-cover border"
                />
              )}
              <div>
                <p className="font-semibold">{post.authorName || "DevCrafters"}</p>
                <p>{new Date(post.publishedAt).toLocaleDateString()} • {readingTime} min read</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-img:rounded-xl prose-a:text-blue-600">
              <PortableText value={post.body} components={components} />
            </div>

            {/* CTA */}
            <div className="mt-16 p-6 bg-orange-100 rounded-xl text-center">
              <h3 className="text-2xl font-semibold mb-2">Enjoyed this post?</h3>
              <p className="mb-4">Explore more insights or get in touch to build something amazing!</p>
              <Link to="/contact" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Contact DevCrafters
              </Link>
            </div>
            <Link to="/blog" className="text-orange-600 text-sm hover:underline my-4 inline-block">← Back to Blog</Link>

            {/* Author Bio */}
            <div className="mt-16 border-t pt-6 flex items-center gap-4">
              {post.authorImage && (
                <img
                  src={post.authorImage}
                  alt={post.authorName}
                  className="w-14 h-14 rounded-full object-cover border"
                />
              )}
              <div>
                <p className="text-lg font-bold">{post.authorName}</p>
                <p className="text-sm text-gray-600">{ post.authorBio ? post.authorBio : <span>Tech enthusiast, creator, and writer at DevCrafters.</span> }</p>
              </div>
            </div>

            {/* Prev/Next */}
            <div className="mt-12 flex justify-between text-sm">
              {adjacentPosts.prev ? (
                <Link to={`/post/${adjacentPosts.prev.slug.current}`} className="text-orange-600 hover:underline">
                  ← {adjacentPosts.prev.title}
                </Link>
              ) : <span />}
              {adjacentPosts.next ? (
                <Link to={`/post/${adjacentPosts.next.slug.current}`} className="text-orange-600 hover:underline">
                  {adjacentPosts.next.title} →
                </Link>
              ) : <span />}
            </div>
          </div>

          {/* TOC Sidebar */}
          {toc.length > 0 && (
            <aside className="lg:w-1/4 sticky top-32 self-start bg-white shadow p-4 rounded-xl border border-gray-200 h-fit">
              <h2 className="text-lg font-bold mb-3">On this page</h2>
              <ul className="text-sm space-y-2">
                {toc.map((item) => (
                  <li key={item.id} className={`ml-${item.level === "h3" ? "4" : "0"}`}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection(item.id);
                      }}
                      className="text-[#331b18] hover:text-orange-500 transition-colors duration-150"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>

        {/* Floating Share Buttons */}
        <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-full flex gap-2 p-2 border border-gray-200 z-50">
          {["twitter", "linkedin", "facebook"].map((platform) => (
            <a
              key={platform}
              href={`https://www.${platform}.com/share?url=https://devcrafters.in/post/${post.slug.current}`}
              target="_blank"
              rel="noreferrer"
              title={`Share on ${platform}`}
              className="hover:opacity-80 transition"
            >
              <img src={`/icons/${platform}.svg`} alt={platform} className="w-6 h-6" aria-label={`Share on ${platform}`} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default PostPage;
