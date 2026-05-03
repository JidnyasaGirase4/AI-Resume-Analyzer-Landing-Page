import { motion } from 'framer-motion'
import { Users, Rocket, Heart } from 'lucide-react'

const values = [
  {
    icon: Rocket,
    title: 'Our Mission',
    description: 'To empower job seekers with AI-driven tools that make resume building effortless and effective, helping everyone put their best foot forward.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
  },
  {
    icon: Users,
    title: 'Who We Are',
    description: 'A passionate team of engineers, designers, and career coaches dedicated to bridging the gap between talent and opportunity using cutting-edge AI.',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
  },
  {
    icon: Heart,
    title: 'Why We Care',
    description: 'We believe everyone deserves a fair shot at their dream job. A great resume should never be the barrier — and with AI, it does not have to be.',
    color: 'text-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute top-1/3 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-violet-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-pink-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="gradient-text">ResumeAI</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            We are on a mission to make job hunting less stressful and more successful for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="text-center p-5 sm:p-6 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:shadow-violet-500/5 transition-all"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5`}>
                <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color}`} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: '50K+', label: 'Resumes Analyzed' },
            { value: '92%', label: 'User Satisfaction' },
            { value: '3x', label: 'More Interviews' },
            { value: '30s', label: 'Avg. Analysis Time' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-3 sm:p-4">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
