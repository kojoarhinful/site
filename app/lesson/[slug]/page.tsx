import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

type Lesson = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  readTime?: string;
  content: string;
};

async function getLessonBySlug(slug: string): Promise<Lesson | null> {
  const lessonsDir = path.join(process.cwd(), "app/lesson/posts");
  console.log(`Looking for file in directory: ${lessonsDir}`);
  console.log(`Slug received: ${slug}`);

  let lessonFiles: string[] = [];
  try {
    lessonFiles = await fs.readdir(lessonsDir);
    console.log(`Files found in directory: ${lessonFiles.join(", ")}`);
    lessonFiles = lessonFiles.filter((file) => file.endsWith(".mdx"));
  } catch (error) {
    console.error("Error reading lessons directory:", error);
    return null;
  }

  for (const file of lessonFiles) {
    try {
      const filePath = path.join(lessonsDir, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const fileSlug = data.slug || file.replace(/\.mdx$/, "");
      if (fileSlug === slug) {
        console.log(`Match found: ${filePath}`);
        return {
          slug: fileSlug,
          title: data.title || "Untitled",
          date: data.date || "1970-01-01",
          updated: data.updated,
          readTime: data.readTime,
          content,
        };
      }
    } catch (error) {
      console.error(`Error reading ${file}:`, error);
      continue;
    }
  }

  console.log(`No lesson found with slug: ${slug}`);
  return null;
}

export default async function LessonDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const lesson = await getLessonBySlug(params.slug);

  if (!lesson) {
    console.log(`Lesson not found for slug: ${params.slug}`);
    return notFound();
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-lg font-light mb-2">{lesson.title}</h1>
      <div className="flex items-center text-amber-800/60 mb-6">
        <span className="text-xs">{lesson.date}</span>
        {lesson.updated && (
          <>
            <span className="mx-2 text-xs">•</span>
            <span className="text-xs">Updated {lesson.updated}</span>
          </>
        )}
        {lesson.readTime && (
          <>
            <span className="mx-2 text-xs">•</span>
            <span className="text-xs">{lesson.readTime}</span>
          </>
        )}
      </div>

      <div>
        <MDXRemote
          source={lesson.content}
          options={{
            mdxOptions: {
              remarkPlugins: [],
              rehypePlugins: [],
            },
          }}
        />
      </div>

      <div className="mt-8 pt-4 border-t border-amber-700/10">
        <Link href="/lesson" className="text-sm text-amber-800/60">
          ← Back to lessons
        </Link>
      </div>
    </div>
  );
}
