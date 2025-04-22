import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { SigmaSquare } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  date: string;
};

export default async function Home() {
  const postsDir = path.join(process.cwd(), "app/thoughts/posts");

  let postFiles: string[] = [];
  try {
    postFiles = await fs.readdir(postsDir);
    postFiles = postFiles.filter((file) => file.endsWith(".tsx"));
  } catch (error) {
    console.error("Error reading posts directory:", error);
  }

  const posts: Post[] = await Promise.all(
    postFiles.map(async (file) => {
      try {
        const module = await import(`./thoughts/posts/${file}`);
        const meta = module.meta || module.metadata || {};

        return {
          slug: meta.slug || file.replace(/\.tsx$/, ""),
          title: meta.title || "Untitled",
          date: meta.date || "1970-01-01",
        };
      } catch (error) {
        console.error(`Error importing ${file}:`, error);
        return {
          slug: file.replace(/\.tsx$/, ""),
          title: "Untitled",
          date: "1970-01-01",
        };
      }
    })
  );

  const latestPosts: Post[] = posts
    .filter((post) => post.title !== "Untitled")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="max-w-xl mx-auto">
      <div>
        <h1 className="text-lg font-normal mb-1">Bismark Arhinful</h1>
        <p className="text-sm text-amber-800/60 mb-6">Software Engineer</p>
      </div>

      <div className="space-y-5">
        <p className="text-sm">
          Building intuitive web products focused on user experience and
          interaction. Creating software that makes a difference in how people work
          and interact.
        </p>

        <p className="text-sm">
          I'm mostly interested in frontend tooling and infrastructure.
          Currently exploring the JavaScript/TypeScript ecosystem while learning UI
          design principles and system architecture.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-sm text-amber-800/60 mb-3">Recent posts</h2>

        <div className="space-y-0">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <div
                key={post.slug}
                className="border-t border-amber-700/10 py-3"
              >
                <div className="flex justify-between items-center">
                  <Link
                    href={`/thoughts/${post.slug}`}
                    className="text-sm hover:underline"
                  >
                    {post.title}
                  </Link>
                  <span className="text-xs text-amber-800/60">{post.date}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-amber-800/60">No posts available</p>
          )}

          <div className="pt-2 mt-1">
            <span className="text-sm">See </span>
            <Link href="/thoughts" className="text-sm">
              <span className="text-amber-800/60 underline">all posts</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="my-8">
        <Link href="/lesson">
          <div className="companion-banner border-2 border-dashed border-amber-700/40 mt-6 p-3 flex items-center gap-2 hover:bg-amber-50/50 transition-colors duration-200">
            <SigmaSquare size={14} className="text-amber-800/60" />
            <span className="text-sm font-normal">Lesson notes</span>
          </div>
        </Link>
        <p className="text-sm text-amber-800/60 mt-6">
          Tempus et fortuna omnia regunt.
          <br />
          Time and chance shape all <span className="underline decoration-dashed">great</span> outcomes.
        </p>
      </div>
    </div>
  );
}
