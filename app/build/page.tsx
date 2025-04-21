import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Ghana Made",
    description:
      "An e-commerce platform showcasing authentic Ghanaian craftsmanship. Built on my iPhone 6s, no laptop. 😕",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/kojoarhinful/ghanamade",
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
];

export default function BuildPage() {
  return (
  
    <div className="max-w-xl mx-auto">
      <h1 className="text-lg font-light mb-2">builds</h1>
      <p className="text-sm text-amber-800/60 mb-6">
        These are the ones I could showcase for now.
      </p>

      <div className="mt-8">
        {projects.map((project, index) => (
          <div key={index} className="border-t border-amber-700/10 py-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">{project.title}</h2>
            </div>
            <p className="text-sm mt-1">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mt-2 mb-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-sm px-1.5 py-0.5 bg-amber-50/80 text-amber-800 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <Link
                href={project.github}
                className="flex items-center text-sm text-amber-800 hover:text-amber-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} className="mr-1" />
                Source Code
              </Link>
              <Link
                href={project.live}
                className="flex items-center text-sm text-amber-800 hover:text-amber-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} className="mr-1" />
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
