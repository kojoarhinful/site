import Link from "next/link"

const projects = [
  {
    title: "menso",
    description: "Simple theme for websites and blogs.",
    tech: "CSS",
    link: "https://github.com/kojoarhinful/menso",
  } 
]

export default function BuildPage() {
  return (
    <div>
      <h1 className="text-lg font-light mb-2">builds</h1>
      <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6">
        I like hacking on tiny side projects.
      </p>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <div key={project.title} className="border-t border-gray-800 py-4">
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <Link href={project.link} className="text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                  {project.title}
                </Link>
                <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">{project.tech}</span>
              </div>
              <p className="text-xs text-gray-300 dark:text-gray-300 light:text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

