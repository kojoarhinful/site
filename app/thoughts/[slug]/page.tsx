import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "../posts";
import ReactMarkdown from "react-markdown";

export default function ThoughtPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-lg font-light mb-2">{post.title}</h1>
      <div className="flex items-center text-amber-800/60 mb-6">
        <span className="text-xs">{post.date}</span>
        <span className="mx-2 text-xs">•</span>
        <span className="text-xs">{post.readTime}</span>
      </div>

      <div>
        <ReactMarkdown className="prose prose-sm text-amber-900/80">
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="mt-8 pt-4 border-t border-amber-700/10">
        <Link href="/thoughts" className="text-sm text-amber-800/60">
          ← Back to thoughts
        </Link>
      </div>
    </div>
  );
}
