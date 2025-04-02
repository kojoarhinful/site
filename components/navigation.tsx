"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="py-6 mt-6">
      <ul className="flex space-x-5 text-sm">
        <li>
          <Link href="/" className={pathname === "/" ? "underline text-amber-900 font-medium" : ""}>
            home
          </Link>
        </li>
        <li>
          <Link href="/build" className={pathname === "/build" ? "underline text-amber-900 font-medium" : ""}>
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
      </ul>
    </nav>
  )
}

