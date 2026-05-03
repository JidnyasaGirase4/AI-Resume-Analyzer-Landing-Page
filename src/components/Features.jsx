import { motion } from 'framer-motion'
import { BarChart3, Target, Lightbulb, Clock, FileSearch, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Resume Score',
    description: 'Get a comprehensive score out of 100 based on formatting, content, keywords, and overall impact.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    border: 'group-hover:border-cyan-300 dark:group-hover:border-cyan-700',
    glow: 'group-hover:shadow-cyan-500/10',
  },
  {
    icon: Target,
    title: 'Strengths Analysis',
    description: 'Discover what makes your resume stand out and the areas where you truly shine.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-700',
    glow: 'group-hover:shadow-emerald-500/10',
  },
  {
    icon: Lightbulb,
    title: 'Smart Suggestions',
    description: 'Receive actionable tips to improve your resume and increase your chances of landing interviews.',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    border: 'group-hover:border-violet-300 dark:group-hover:border-violet-700',
    glow: 'group-hover:shadow-violet-500/10',
  },
  {
    icon: Clock,
    title: 'Instant Results',
    description: 'No waiting around. Get your detailed resume analysis in under 30 seconds.',
    color: 'text-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    border: 'group-hover:border-pink-300 dark:group-hover:border-pink-700',
    glow: 'group-hover:shadow-pink-500/10',
  },
  {
    icon: FileSearch,
    title: 'ATS Compatibility',
    description: 'Ensure your resume passes Applicant Tracking Systems with optimized keywords and formatting.',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'group-hover:border-amber-300 dark:group-hover:border-amber-700',
    glow: 'group-hover:shadow-amber-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Get personalized advice aligned with industry standards to accelerate your career trajectory.',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    border: 'group-hover:border-rose-300 dark:group-hover:border-rose-700',
    glow: 'group-hover:shadow-rose-500/10',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 100 } },
}

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-violet-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Everything You Need to{' '}
            <span className="gradient-text">
              Perfect Your Resume
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Our AI analyzes every aspect of your resume to give you comprehensive, actionable feedback.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group p-5 sm:p-6 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200/80 dark:border-gray-800/50 ${feature.border} transition-all hover:shadow-xl ${feature.glow}`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color}`} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
