import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does the AI resume analysis work?',
    answer: 'Our tool uses GPT-4o to analyze your resume across multiple criteria including formatting, content quality, keyword optimization, and ATS compatibility. It provides a detailed score along with actionable feedback.',
  },
  {
    question: 'Is my resume data safe and private?',
    answer: 'Absolutely. Your resume is processed entirely on the client side and sent directly to the OpenAI API using your own API key. We never store your resume or personal data on any server.',
  },
  {
    question: 'What file formats are supported?',
    answer: 'We currently support PDF and DOCX file formats. Simply drag and drop your resume file or click to browse. The maximum file size is 10MB.',
  },
  {
    question: 'Do I need an OpenAI API key?',
    answer: 'Yes, you need your own OpenAI API key to use the analyzer. This ensures your data stays private and goes directly from your browser to OpenAI without passing through our servers.',
  },
  {
    question: 'How accurate is the resume score?',
    answer: 'The AI evaluates your resume based on industry best practices, ATS requirements, and hiring manager preferences. While no score is perfect, our users report significant improvements in interview callbacks after implementing the suggestions.',
  },
  {
    question: 'Can I analyze multiple resumes?',
    answer: 'Yes! You can analyze as many resumes as you want. Simply upload a new file after reviewing your results. This is great for tailoring resumes to different job positions.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-violet-300 dark:hover:border-violet-700 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 text-left bg-white dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-900/80 transition-colors"
      >
        <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white pr-3 sm:pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-4 sm:px-6 pb-3.5 sm:pb-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-pink-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-36 sm:w-48 h-36 sm:h-48 bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about our AI resume analyzer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2.5 sm:space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
