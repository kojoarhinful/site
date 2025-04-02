import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Ghana Made",
    description:
      "An e-commerce platform showcasing authentic Ghanaian craftsmanship. Built on my iPhone 6s, I don't have a laptop. 😕",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/kojoarhinful/GhanaMade",
    live: "https://ghanamade.vercel.app",
  },
  {
    title: "Intellect Assault",
    description:
      "This is a quiz shooter game where you snap pics of notes to generate questions. [ Unactive ]",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/kojoarhinful/intellect-assault",
    live: "https://intellectassault.vercel.app",
  },
]

export default function BuildPage() {
  return (
    <div>
      <h1 className="text-xl sm:text-lg font-light mb-2">builds</h1>
      <p className="text-base sm:text-sm text-amber-800/60 mb-6">
        I like hacking on tiny side projects.
      </p>

      <div className="space-y-6 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-amber-700/10 rounded-lg overflow-hidden bg-amber-50/30 p-5">
            <h2 className="text-lg sm:text-base font-medium mb-2">{project.title}</h2>
            <p className="text-base sm:text-sm text-amber-900/80 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-sm sm:text-xs px-2 py-1 bg-amber-100/80 text-amber-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <Link
                href={project.github}
                className="flex items-center text-sm sm:text-xs text-amber-800 hover:text-amber-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="sm:w-3.5 sm:h-3.5 mr-1" />
                Source Code
              </Link>
              <Link
                href={project.live}
                className="flex items-center text-sm sm:text-xs text-amber-800 hover:text-amber-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="sm:w-3.5 sm:h-3.5 mr-1" />
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

