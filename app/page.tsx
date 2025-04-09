import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-lg font-normal mb-1">Bismark Arhinful</h1>
        <p className="text-sm text-amber-800/60 mb-6">Software Engineer</p>
      </div>

      <div className="space-y-5">
        <p className="text-sm">
          Building intuitive web products focused on user experience and interaction. Creating software that makes a
          difference in how people work and interact.
        </p>

        <p className="text-sm">
          I'm passionate about frontend tooling and infrastructure. Currently exploring the JavaScript/TypeScript
          ecosystem while learning UI design principles and system architecture.
        </p>
      </div>

      <div className="my-8">
        <div className="companion-banner border-2 border-dashed border-amber-700/40">build things that matter</div>
        <p className="text-sm text-amber-800/60 mt-6">
          Unicus modus ad opus magnum faciendum est amare quod facis.
          <br />
          The only way to do great work is to love what you do.
        </p>
      </div>

      <div className="mt-10">
        <p className="text-sm">
          find me here:{" "}
          <Link
            href="https://twitter.com/kojoarhinful_"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </Link>{" "}
          /{" "}
          <Link href="#" className="underline" target="_blank" rel="noopener noreferrer">
            linkedin
          </Link>{" "}
          /{" "}
          <Link href="https://github.com/kojoarhinful" className="underline" target="_blank" rel="noopener noreferrer">
            github
          </Link>
        </p>
        <p className="text-sm">
          reach out to me:{" "}
          <Link href="mailto:kojoarhinful@outlook.com" className="underline">
            kojoarhinful@outlook.com
          </Link>
        </p>
      </div>
    </div>
  )
}
