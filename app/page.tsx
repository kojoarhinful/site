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
        <h2 className="text-base font-medium mb-3">Get in touch</h2>
        <p className="text-sm leading-relaxed">
          The quickest way to reach me is by messaging me on the bird app{" "}
          <Link
            href="https://twitter.com/kojoarhinful_"
            className="text-amber-800/60 hover:text-amber-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kojoarhinful_
          </Link>
          . If you prefer a more serious medium, feel free to send me an email at{" "}
          <Link href="mailto:kojoarhinful@outlook.com" className="text-amber-800/60 hover:text-amber-900">
            kojoarhinful@outlook.com
          </Link>
          .
          <br />I try to make a point to respond to every message I receive. Some of my closest friends were strangers I
          decided to message on a whim.
        </p>
      </div>
    </div>
  )
}
