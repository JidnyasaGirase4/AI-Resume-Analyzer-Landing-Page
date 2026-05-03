import * as pdfjsLib from 'pdfjs-dist'
import mammoth from 'mammoth'

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`

export async function parseResume(file) {
  const extension = file.name.split('.').pop().toLowerCase()

  if (extension === 'pdf') {
    return parsePDF(file)
  } else if (extension === 'docx') {
    return parseDOCX(file)
  } else {
    throw new Error('Unsupported file format. Please upload a PDF or DOCX file.')
  }
}

async function parsePDF(file) {
  const arrayBuffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
  let text = ''

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    const pageText = content.items.map((item) => item.str).join(' ')
    text += pageText + '\n'
  }

  if (!text.trim()) {
    throw new Error('Could not extract text from this PDF. It may be image-based.')
  }

  return text.trim()
}

async function parseDOCX(file) {
  const arrayBuffer = await file.arrayBuffer()
  const result = await mammoth.extractRawText({ arrayBuffer })
  const text = result.value

  if (!text.trim()) {
    throw new Error('Could not extract text from this DOCX file.')
  }

  return text.trim()
}
