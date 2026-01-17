import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  if (allBlogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-neutral-600">
          Blog posts coming soon! Check back for expert insights on assumable mortgages.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md hover:border-[var(--color-primary)]"
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-500 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 tracking-tight hover:text-[var(--color-primary)] transition-colors">
                {post.metadata.title}
              </h3>
              {post.metadata.summary && (
                <p className="text-neutral-600 line-clamp-2">
                  {post.metadata.summary}
                </p>
              )}
            </div>
          </Link>
        ))}
    </div>
  )
}
