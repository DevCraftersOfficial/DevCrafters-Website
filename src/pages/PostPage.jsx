import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import client from '../sanityClient'
import { Helmet } from 'react-helmet-async'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PortableText } from '@portabletext/react'
import logo from "../assets/images/logo_orange.avif"

const PostPage = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 })

    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == "${slug}"][0]{
        title,
        body,
        publishedAt,
        excerpt,
        "authorName": author->name,
        "authorImage": author->image.asset->url,
        mainImage {
          asset -> {
            url
          },
          alt
        },
        slug
      }`

      try {
        const result = await client.fetch(query)
        setPost(result)
      } catch (err) {
        console.error('Error fetching post:', err)
      }
    }

    fetchPost()
  }, [slug])

  if (!post) {
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
    )
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | DevCrafters Blogs</title>
        <meta name="description" content={post.excerpt || 'Read this article from DevCrafters'} />
        
        {/* Only set Open Graph tags if post data is available */}
        {post.slug && post.mainImage?.asset?.url && (
          <>
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.excerpt || 'Read this article from DevCrafters'} />
            <meta property="og:image" content={post.mainImage?.asset?.url} />
            <meta property="og:url" content={`https://devcrafters.in/post/${post.slug.current}`} />
          </>
        )}
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-white via-[#fff3ef] to-[#ffece9] px-6 py-20 md:px-20 text-[#331b18]">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          {/* Banner Image */}
          {post.mainImage?.asset?.url && (
            <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-lg"
            />
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{post.title}</h1>

          {/* Metadata */}
          <div className="flex items-center gap-4 mb-10 text-sm text-gray-600">
            {post.authorImage && (
              <img
                src={post.authorImage}
                alt={post.authorName}
                className="w-10 h-10 rounded-full object-cover border"
              />
            )}
            <div>
              <p className="font-semibold">{post.authorName || 'DevCrafters'}</p>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Body */}
          <div className="prose prose-lg max-w-none prose-img:rounded-xl prose-a:text-blue-600">
            <PortableText value={post.body} />
          </div>
        </div>
      </section>
    </>
  )
}

export default PostPage
