import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Software Engineer',
    company: 'Google',
    content: 'This tool helped me identify gaps in my resume I never noticed. After making the suggested changes, I got 3x more interview callbacks!',
    rating: 5,
    avatar: 'AS',
    gradient: 'from-cyan-500 to-blue-500',
    border: 'hover:border-cyan-300 dark:hover:border-cyan-700',
  },
  {
    name: 'Meera Iyer',
    role: 'Product Manager',
    company: 'Meta',
    content: 'The AI analysis was incredibly detailed and accurate. It pointed out that my resume lacked quantified achievements — a game changer for my applications.',
    rating: 5,
    avatar: 'MI',
    gradient: 'from-violet-500 to-purple-500',
    border: 'hover:border-violet-300 dark:hover:border-violet-700',
  },
  {
    name: 'Priya Patel',
    role: 'Data Scientist',
    company: 'Netflix',
    content: 'I was skeptical at first, but the suggestions were spot-on. My resume score went from 62 to 89 after implementing the feedback.',
    rating: 5,
    avatar: 'PP',
    gradient: 'from-pink-500 to-rose-500',
    border: 'hover:border-pink-300 dark:hover:border-pink-700',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 100 } },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-violet-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Loved by <span className="gradient-text">Job Seekers</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            See what professionals say about our AI resume analysis
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 ${t.border} p-5 sm:p-6 hover:shadow-xl hover:shadow-violet-500/5 transition-all`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 sm:mb-6">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold shadow-md`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
