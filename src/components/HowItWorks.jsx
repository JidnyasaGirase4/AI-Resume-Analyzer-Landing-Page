import { motion } from 'framer-motion'
import { Upload, Cpu, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload Resume',
    description: 'Drag and drop your PDF or DOCX resume file into the upload area.',
    gradient: 'from-cyan-500 to-cyan-600',
    shadow: 'shadow-cyan-500/25',
    ring: 'border-cyan-500',
    text: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'AI Analysis',
    description: 'Our AI processes your resume and evaluates it across multiple criteria.',
    gradient: 'from-violet-500 to-violet-600',
    shadow: 'shadow-violet-500/25',
    ring: 'border-violet-500',
    text: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Get Results',
    description: 'Receive a detailed score with strengths, weaknesses, and actionable suggestions.',
    gradient: 'from-pink-500 to-pink-600',
    shadow: 'shadow-pink-500/25',
    ring: 'border-pink-500',
    text: 'text-pink-600 dark:text-pink-400',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-r from-cyan-400/5 via-violet-400/5 to-pink-400/5 rounded-full blur-3xl" />
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
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Three simple steps to a better resume
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="relative text-center"
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-violet-300/50 dark:from-violet-700/50 to-transparent" />
              )}

              <div className={`relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${s.gradient} rounded-2xl shadow-lg ${s.shadow} mb-4 sm:mb-6`}>
                <s.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                <span className={`absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-white dark:bg-gray-950 border-2 ${s.ring} rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold ${s.text}`}>
                  {s.step}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs mx-auto">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
