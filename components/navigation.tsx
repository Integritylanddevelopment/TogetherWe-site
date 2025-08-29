"use client"

import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold gradient-text">
            TogetherWe
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
              Pricing
            </Link>
            <Link href="/ai-explanation" className="text-gray-600 hover:text-purple-600 transition-colors">
              AI Technology
            </Link>
            <Link href="/emotional-roadmap" className="text-gray-600 hover:text-purple-600 transition-colors">
              Roadmap
            </Link>
            <Link href="/context-injection" className="text-gray-600 hover:text-purple-600 transition-colors">
              How It Works
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #9333ea, #ec4899, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </nav>
  )
}
