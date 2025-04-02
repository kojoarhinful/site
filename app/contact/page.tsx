export default function ContactPage() {
    return (
      <div>
        <h1 className="text-xl sm:text-lg font-light mb-5">contact</h1>
        <p className="text-base sm:text-sm mb-4">
          I'm always open to interesting conversations and opportunities. Feel free to reach out through any of the
          channels below.
        </p>
  
        <div className="space-y-3 sm:space-y-2 mt-6">
          <div className="flex items-baseline">
            <span className="text-sm sm:text-xs text-amber-800/60 w-20">Email:</span>
            <span className="text-base sm:text-sm">kojoarhinful@outlook.com</span>
          </div>
          <div className="flex items-baseline">
            <span className="text-sm sm:text-xs text-amber-800/60 w-20">Twitter:</span>
            <span className="text-base sm:text-sm">@kojoarhinful_</span>
          </div>
          <div className="flex items-baseline">
            <span className="text-sm sm:text-xs text-amber-800/60 w-20">GitHub:</span>
            <span className="text-base sm:text-sm">kojoarhinful</span>
          </div>
        </div>
      </div>
    )
  }
  
  