import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, MessageCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'support@resumeai.com',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    detail: 'Available Mon-Fri, 9am-6pm',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
  },
  {
    icon: MapPin,
    title: 'Location',
    detail: 'Bengaluru, India',
    color: 'text-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields.')
      return
    }
    toast.success('Message sent! We will get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent" />
        <div className="absolute top-1/3 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-violet-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Have a question or feedback? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-5"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 p-4 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 ${item.bg} rounded-lg flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5 truncate">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 sm:p-8 space-y-4 sm:space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-3 sm:px-4 py-2.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-3 sm:px-4 py-2.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 hover:from-cyan-600 hover:via-violet-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
