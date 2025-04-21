"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const marginTopClass =
    pathname === "/"
      ? "mt-10 sm:mt-12 md:mt-6 lg:mt-4"
      : "mt-20 sm:mt-48 md:mt-40 lg:mt-36";

  return (
    <footer
      className={`border-t border-amber-700/10 py-3 ${marginTopClass} bg-[#f0e9dd] bg-opacity-80 backdrop-blur-sm`}
    >
      <div className="max-w-xl mx-auto px-3 w-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/kojoarhinful/site"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              size={16}
              className="text-amber-800/60 hover:text-amber-900 transition-colors duration-200"
            />
          </Link>

          <Link href="/contact" className="group">
            <div className="text-sm">/contact</div>
          </Link>
        </div>

        <div className="text-amber-800/60 text-xs">MMXXV</div>
      </div>
    </footer>
  );
}
