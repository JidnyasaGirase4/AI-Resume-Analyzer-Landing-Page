import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Clock } from 'lucide-react'

const posts = [
  {
    title: '10 Resume Mistakes That Cost You the Interview',
    excerpt: 'Discover the most common resume pitfalls that recruiters notice instantly and learn how to avoid them to land more interviews.',
    date: 'Mar 15, 2026',
    readTime: '5 min read',
    tag: 'Tips',
    tagColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-400',
  },
  {
    title: 'How AI Is Transforming the Job Search in 2026',
    excerpt: 'From AI resume builders to automated screening, explore how artificial intelligence is reshaping every stage of the hiring process.',
    date: 'Mar 10, 2026',
    readTime: '7 min read',
    tag: 'Industry',
    tagColor: 'bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-400',
  },
  {
    title: 'The Ultimate Guide to Beating ATS Systems',
    excerpt: 'Learn the insider secrets to formatting your resume so it passes through Applicant Tracking Systems every single time.',
    date: 'Mar 5, 2026',
    readTime: '6 min read',
    tag: 'Guide',
    tagColor: 'bg-pink-100 text-pink-700 dark:bg-pink-950/50 dark:text-pink-400',
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } },
}

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-pink-400/5 rounded-full blur-3xl" />
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
            Latest from Our <span className="gradient-text">Blog</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Career tips, resume advice, and industry insights
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-300 dark:hover:border-violet-700 transition-all cursor-pointer"
            >
              {/* Gradient top bar */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500" />

              <div className="p-5 sm:p-6">
                {/* Tag */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${post.tagColor} mb-3 sm:mb-4`}>
                  {post.tag}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-violet-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
