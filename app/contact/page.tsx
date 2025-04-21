export default function ContactPage() {
  return (
      
    <div className="max-w-xl mx-auto mb-48 sm:mb-128 md:mb-96 lg:mb-80">
      <h1 className="text-lg font-light mb-2">contact</h1>
      <p className="text-sm mb-6">
        I'm always open to interesting conversations and opportunities. Feel free to reach out through any of the
        channels below.
      </p>

      <div className="space-y-3 sm:space-y-2 mt-8">
        <div className="flex items-baseline">
          <span className="text-sm sm:text-xs text-amber-800/60 w-20">Email:</span>
          <a
            href="mailto:kojoarhinful@outlook.com"
            className="text-base sm:text-sm border-b border-dashed border-amber-800/60 hover:text-amber-900"
          >
            kojoarhinful@outlook.com
          </a>
        </div>
        <div className="flex items-baseline">
          <span className="text-sm sm:text-xs text-amber-800/60 w-20">Twitter:</span>
          <a
            href="https://twitter.com/kojoarhinful_"
            className="text-base sm:text-sm border-b border-dashed border-amber-800/60 hover:text-amber-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kojoarhinful_
          </a>
        </div>
        <div className="flex items-baseline">
          <span className="text-sm sm:text-xs text-amber-800/60 w-20">GitHub:</span>
          <a
            href="https://github.com/kojoarhinful"
            className="text-base sm:text-sm border-b border-dashed border-amber-800/60 hover:text-amber-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            kojoarhinful
          </a>
        </div>
      </div>
    </div>
  );
}
