import { FileText, Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Github, label: 'GitHub' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Mail, label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-950 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
        {/* Logo & tagline */}
        <div className="text-center mb-8 sm:mb-10">
          <a href="#" className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-cyan-500 via-violet-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">
              Resume<span className="gradient-text">AI</span>
            </span>
          </a>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto leading-relaxed px-2">
            AI-powered resume analysis to help you land your dream job. Get instant feedback and improve your resume today.
          </p>
        </div>

        {/* Navigation links */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 mb-8 sm:mb-10 text-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-500 after:to-violet-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6 sm:mb-8" />

        {/* Socials + CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:via-violet-500 hover:to-pink-500 flex items-center justify-center text-gray-400 hover:text-white transition-all hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white text-sm font-medium transition-all"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} ResumeAI. All rights reserved. Built with AI.
        </p>
      </div>
    </footer>
  )
}
