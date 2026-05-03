import { motion } from 'framer-motion'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { CheckCircle2, AlertTriangle, Lightbulb, RotateCcw } from 'lucide-react'

function getScoreColor(score) {
  if (score >= 80) return { main: '#10b981', trail: '#d1fae5', dark: '#065f46' }
  if (score >= 60) return { main: '#f59e0b', trail: '#fef3c7', dark: '#92400e' }
  return { main: '#ef4444', trail: '#fee2e2', dark: '#991b1b' }
}

function getScoreLabel(score) {
  if (score >= 90) return 'Excellent'
  if (score >= 80) return 'Very Good'
  if (score >= 70) return 'Good'
  if (score >= 60) return 'Fair'
  if (score >= 50) return 'Needs Work'
  return 'Poor'
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Results({ results, onReset }) {
  const { score, summary, strengths, weaknesses, suggestions } = results
  const colors = getScoreColor(score)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Your Resume Analysis
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 px-2">{summary}</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-5 sm:space-y-8">
          {/* Score Card */}
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
              <div className="w-28 h-28 sm:w-40 sm:h-40 shrink-0">
                <CircularProgressbar
                  value={score}
                  text={`${score}`}
                  styles={buildStyles({
                    textSize: '28px',
                    textColor: colors.main,
                    pathColor: colors.main,
                    trailColor: colors.trail,
                    pathTransitionDuration: 1.5,
                  })}
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3"
                  style={{ backgroundColor: colors.trail, color: colors.dark }}
                >
                  {getScoreLabel(score)}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                  Resume Score: {score}/100
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
                  Your resume has been evaluated across formatting, content quality, keyword optimization,
                  and overall impact. See the detailed breakdown below.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800/50 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 p-4 sm:p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Strengths</h3>
            </div>
            <ul className="space-y-2.5 sm:space-y-3">
              {strengths.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 shrink-0" />
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Weaknesses */}
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800/50 rounded-2xl border border-red-200 dark:border-red-800/50 p-4 sm:p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Weaknesses</h3>
            </div>
            <ul className="space-y-2.5 sm:space-y-3">
              {weaknesses.map((w, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 shrink-0" />
                  {w}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800/50 rounded-2xl border border-amber-200 dark:border-amber-800/50 p-4 sm:p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Suggestions</h3>
            </div>
            <ul className="space-y-2.5 sm:space-y-3">
              {suggestions.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="mt-0.5 sm:mt-1 text-amber-500 font-bold text-xs shrink-0">{i + 1}.</span>
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Reset button */}
          <motion.div variants={item} className="text-center pt-2 sm:pt-4">
            <button
              onClick={onReset}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 transition-all hover:shadow-md text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Analyze Another Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
