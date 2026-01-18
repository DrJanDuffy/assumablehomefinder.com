import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { AGENT_INFO } from '@/lib/constants'
import { generateArticleAuthorSchema } from '@/lib/author-info'
import AuthorBox from '../../components/author/AuthorBox'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: generateArticleAuthorSchema(`${baseUrl}/blog/${post.slug}`),
              publisher: {
                '@type': 'Organization',
                name: AGENT_INFO.brokerage,
              },
            }),
          }}
        />
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl mb-4">
            {post.metadata.title}
          </h1>
          <div className="mb-8">
            <AuthorBox variant="inline" className="mb-4" />
            <div className="text-sm text-neutral-500 mb-4">
              Published on {formatDate(post.metadata.publishedAt)}
            </div>
          </div>
          {post.metadata.summary && (
            <p className="text-xl text-neutral-600 mb-8 font-medium">
              {post.metadata.summary}
            </p>
          )}
          <CustomMDX source={post.content} />
        </article>
        
        {/* Author Box */}
        <div className="mt-12">
          <AuthorBox variant="full" />
        </div>
      </div>
    </div>
  )
}
