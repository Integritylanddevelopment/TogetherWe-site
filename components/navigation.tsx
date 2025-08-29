"use client"

import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-white/90 border-b border-gray-300 w-full relative z-50 mt-4 mb-8">
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-6">
          {/* Desktop Navigation - Centered Group */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6 xl:gap-8">
            <Link 
              href="/" 
              className="text-orange-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 font-serif font-medium px-6 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-2"
              style={{ 
                fontFamily: 'Georgia, serif',
                color: '#d84315',
                fontSize: '1.3rem',
                fontWeight: '500'
              }}
            >
              TogetherWe
            </Link>

            <Link 
              href="/relationship-roadmap" 
              className="text-orange-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 font-serif font-medium px-6 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-2"
              style={{ 
                fontFamily: 'Georgia, serif',
                color: '#d84315',
                fontSize: '1.3rem',
                fontWeight: '500'
              }}
            >
              Relationship Roadmap
            </Link>

            <Link 
              href="/heart-behind-the-code" 
              className="text-orange-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 font-serif font-medium px-6 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-2"
              style={{ 
                fontFamily: 'Georgia, serif',
                color: '#d84315',
                fontSize: '1.3rem',
                fontWeight: '500'
              }}
            >
              Heart Behind the Code
            </Link>

            <Link 
              href="/context-injection" 
              className="text-orange-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 font-serif font-medium px-6 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-2"
              style={{ 
                fontFamily: 'Georgia, serif',
                color: '#d84315',
                fontSize: '1.3rem',
                fontWeight: '500'
              }}
            >
              How It Works
            </Link>

            <Link 
              href="/pricing" 
              className="text-orange-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 font-serif font-medium px-6 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-2"
              style={{ 
                fontFamily: 'Georgia, serif',
                color: '#d84315',
                fontSize: '1.3rem',
                fontWeight: '500'
              }}
            >
              Choose Your Journey
            </Link>
          </div>
        </div>

        {/* Mobile Navigation - Centered Stack */}
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-3 pb-4">
            {/* All buttons same style on mobile, center button first */}
            <Link 
              href="/heart-behind-the-code" 
              className="w-11/12 text-center text-orange-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 font-serif font-medium py-4 rounded-lg transition-all duration-300 hover:border-2"
              style={{ 
                fontFamily: 'Georgia, serif',
                color: '#d84315',
                fontSize: '1.2rem',
                fontWeight: '500'
              }}
            >
              Heart Behind the Code
            </Link>
            
            {/* Two columns for other buttons */}
            <div className="w-11/12 grid grid-cols-2 gap-3">
              <Link 
                href="/" 
                className="text-center text-orange-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 font-serif font-medium py-3 rounded-lg transition-all duration-300 hover:border-2"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#d84315',
                  fontSize: '1.1rem',
                  fontWeight: '500'
                }}
              >
                TogetherWe
              </Link>
              <Link 
                href="/pricing" 
                className="text-center text-orange-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 font-serif font-medium py-3 rounded-lg transition-all duration-300 hover:border-2"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#d84315',
                  fontSize: '1.1rem',
                  fontWeight: '500'
                }}
              >
                Choose Your Journey
              </Link>
            </div>
            
            <div className="w-11/12 grid grid-cols-2 gap-3">
              <Link 
                href="/relationship-roadmap" 
                className="text-center text-orange-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 font-serif font-medium py-3 rounded-lg transition-all duration-300 hover:border-2"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#d84315',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                Relationship Roadmap
              </Link>
              <Link 
                href="/context-injection" 
                className="text-center text-orange-600 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 font-serif font-medium py-3 rounded-lg transition-all duration-300 hover:border-2"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#d84315',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
