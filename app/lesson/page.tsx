import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

type Lesson = {
  slug: string;
  title: string;
  date: string;
};

async function getLessons(): Promise<Lesson[]> {
  const lessonsDir = path.join(process.cwd(), "app/lesson/posts");

  let lessonFiles: string[] = [];
  try {
    lessonFiles = await fs.readdir(lessonsDir);
    lessonFiles = lessonFiles.filter((file) => file.endsWith(".mdx"));
  } catch (error) {
    console.error("Error reading lessons directory:", error);
    return [];
  }

  const lessons: Lesson[] = await Promise.all(
    lessonFiles.map(async (file) => {
      try {
        const filePath = path.join(lessonsDir, file);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data } = matter(fileContent);

        return {
          slug: data.slug || file.replace(/\.mdx$/, ""),
          title: data.title || "Untitled",
          date: data.date || "1970-01-01",
        };
      } catch (error) {
        console.error(`Error reading ${file}:`, error);
        return {
          slug: file.replace(/\.mdx$/, ""),
          title: "Untitled",
          date: "1970-01-01",
        };
      }
    })
  );

  return lessons.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default async function LessonPage() {
  const lessons = await getLessons();

  return (
    <div className="max-w-xl mx-auto mb-48 sm:mb-128 md:mb-96 lg:mb-80">
      <h1 className="text-lg font-light mb-2">lessons</h1>
      <p className="text-sm text-amber-800/60 mb-6">
        These are my lesson notes, sharing what I’ve learned.
      </p>

      <div className="mt-8">
        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <div
              key={lesson.slug}
              className="border-t border-amber-700/10 py-3"
            >
              <div className="flex justify-between items-center">
                <Link
                  href={`/lesson/${lesson.slug}`}
                  className="text-sm hover:underline"
                >
                  {lesson.title}
                </Link>
                <span className="text-xs text-amber-800/60">
                  {lesson.date}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-amber-800/60">No lessons available</p>
        )}
      </div>
    </div>
  );
}
