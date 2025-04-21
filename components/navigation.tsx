"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="py-4 mt-10 sm:mt-12 md:mt-6 lg:mt-4 max-w-xl mx-auto">
      <ul className="flex space-x-5 text-sm">
        <li>
          <Link
            href="/"
            className={
              pathname === "/" ? "underline text-amber-900 font-medium" : ""
            }
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/build"
            className={
              pathname === "/build" ? "underline text-amber-900 font-medium" : ""
            }
          >
            builds
          </Link>
        </li>
        <li>
          <Link
            href="/thoughts"
            className={
              pathname === "/thoughts" || pathname.startsWith("/thoughts/")
                ? "underline text-amber-900 font-medium"
                : ""
            }
          >
            thoughts
          </Link>
        </li>
        <li>
          <Link
            href="/lesson"
            className={
              pathname === "/lesson" || pathname.startsWith("/lesson/")
                ? "underline text-amber-900 font-medium"
                : ""
            }
          >
            lessons
          </Link>
        </li>
      </ul>
    </nav>
  );
}
