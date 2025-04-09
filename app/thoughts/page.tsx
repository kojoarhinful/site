import Link from "next/link"
import { sortedPosts } from "./posts"

export default function ThoughtsPage() {
  return (
    <div>
      <h1 className="text-lg font-light mb-2">thoughts</h1>
      <p className="text-sm text-amber-800/60 mb-6">
        These are my own words.
      </p>

      <div>
        {sortedPosts.map((post) => (
          <div key={post.slug} className="border-t border-amber-700/10 py-3">
            <div className="flex justify-between items-center">
              <Link href={`/thoughts/${post.slug}`} className="text-sm">
                {post.title}
              </Link>
              <span className="text-xs text-amber-800/60">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

