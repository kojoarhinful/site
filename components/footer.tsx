import { Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-amber-700/10 py-3 fixed bottom-0 left-0 right-0 bg-[#f0e9dd] bg-opacity-80 backdrop-blur-sm z-10">
      <div className="max-w-3xl mx-auto px-4 w-full flex justify-between items-center">
        <Link href="https://github.com/kojoarhinful/site" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <Github size={16} className="text-amber-800/60 hover:text-amber-900" />
        </Link>
        <div className="text-amber-800/60 text-xs">MMXXV</div>
      </div>
    </footer>
  )
}

