import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'

export default function Hero({ onUploadClick }) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-40 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-violet-400/20 dark:bg-violet-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-pink-400/15 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 dark:via-cyan-500/20 to-transparent" />
      </div>

      {/* Floating geometric shapes - hidden on small screens */}
      <div className="hidden sm:block absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-[10%] w-3 h-3 bg-cyan-400/40 rounded-full animate-float" />
        <div className="absolute top-48 right-[15%] w-2 h-2 bg-violet-400/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-64 left-[20%] w-4 h-4 border border-pink-400/30 rounded rotate-45 animate-float-slow" />
        <div className="absolute bottom-32 right-[25%] w-3 h-3 border border-cyan-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 left-[60%] w-2 h-2 bg-pink-400/40 rounded-full animate-float-slow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-gradient-to-r from-cyan-50 to-violet-50 dark:from-cyan-950/50 dark:to-violet-950/50 border border-cyan-200 dark:border-cyan-800 rounded-full text-xs sm:text-sm font-medium text-cyan-700 dark:text-cyan-300 mb-6 sm:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Powered by GPT-4o AI
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight"
        >
          Get Your Resume{' '}
          <span className="gradient-text">
            AI-Analyzed
          </span>{' '}
          in Seconds
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-2"
        >
          Upload your resume and receive an instant AI-powered analysis with a detailed score,
          strengths, weaknesses, and actionable improvement suggestions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={onUploadClick}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 hover:from-cyan-600 hover:via-violet-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 animate-gradient"
          >
            Upload Your Resume
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600 transition-all hover:-translate-y-0.5"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-500" />
            <span>Your data stays private</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-violet-500" />
            <span>Results in under 30 seconds</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>Powered by GPT-4o</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
