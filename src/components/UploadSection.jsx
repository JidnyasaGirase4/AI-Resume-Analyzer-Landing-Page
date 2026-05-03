import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, FileText, X, Key, Loader2, AlertCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { parseResume } from '../utils/parseResume'
import { analyzeResume } from '../utils/analyzeResume'

export default function UploadSection({ onResults, isAnalyzing, setIsAnalyzing }) {
  const [file, setFile] = useState(null)
  const [apiKey, setApiKey] = useState('')
  const [showApiKey, setShowApiKey] = useState(false)

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      toast.error('Invalid file. Please upload a PDF or DOCX file.')
      return
    }
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0])
      toast.success(`${acceptedFiles[0].name} uploaded successfully!`)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
  })

  const removeFile = () => {
    setFile(null)
  }

  const handleAnalyze = async () => {
    if (!file) {
      toast.error('Please upload a resume first.')
      return
    }
    if (!apiKey.trim()) {
      toast.error('Please enter your OpenAI API key.')
      setShowApiKey(true)
      return
    }

    setIsAnalyzing(true)
    try {
      const text = await parseResume(file)
      const results = await analyzeResume(text, apiKey.trim())
      onResults(results)
      toast.success('Resume analyzed successfully!')
    } catch (error) {
      toast.error(error.message || 'Failed to analyze resume. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <section id="upload" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-violet-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Analyze Your <span className="gradient-text">Resume</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Upload your resume and get instant AI-powered feedback
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-violet-500/5 transition-all"
        >
          {/* API Key input */}
          <div className="mb-5 sm:mb-6">
            <button
              onClick={() => setShowApiKey(!showApiKey)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-2"
            >
              <Key className="w-4 h-4" />
              {showApiKey ? 'Hide' : 'Enter'} OpenAI API Key
            </button>
            <AnimatePresence>
              {showApiKey && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-..."
                    className="w-full px-3 sm:px-4 py-2.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                  />
                  <div className="flex items-start gap-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>Your API key is used client-side only and never stored on any server.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dropzone */}
          <div
            {...getRootProps()}
            className={`relative border-2 border-dashed rounded-xl p-6 sm:p-8 md:p-12 text-center cursor-pointer transition-all ${
              isDragActive
                ? 'border-violet-500 bg-violet-50/50 dark:bg-violet-950/30'
                : file
                ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50/50 dark:bg-emerald-950/20'
                : 'border-gray-300 dark:border-gray-600 hover:border-violet-400 dark:hover:border-violet-600 hover:bg-violet-50/30 dark:hover:bg-violet-950/10'
            }`}
          >
            <input {...getInputProps()} />

            <AnimatePresence mode="wait">
              {file ? (
                <motion.div
                  key="file"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1 truncate max-w-full px-2">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatFileSize(file.size)}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile()
                    }}
                    className="mt-3 inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                    Remove file
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-gray-700/50 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Upload className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 dark:text-gray-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume here'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    or click to browse — PDF or DOCX, up to 10MB
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Analyze button */}
          <button
            onClick={handleAnalyze}
            disabled={!file || isAnalyzing}
            className="mt-5 sm:mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 hover:from-cyan-600 hover:via-violet-600 hover:to-pink-600 disabled:from-gray-300 disabled:via-gray-300 disabled:to-gray-300 dark:disabled:from-gray-700 dark:disabled:via-gray-700 dark:disabled:to-gray-700 text-white disabled:text-gray-500 dark:disabled:text-gray-400 font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/25 disabled:shadow-none hover:shadow-xl hover:shadow-violet-500/30"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing Resume...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Analyze My Resume
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function Sparkles(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  )
}
