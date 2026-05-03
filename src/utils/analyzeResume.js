import OpenAI from 'openai'

const SYSTEM_PROMPT = `You are an expert resume analyst and career coach. Analyze the given resume text and provide a detailed evaluation. You must respond with valid JSON only, no markdown or extra text.

Response format:
{
  "score": <number 0-100>,
  "summary": "<brief 1-2 sentence overall assessment>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "suggestions": ["<suggestion 1>", "<suggestion 2>", "<suggestion 3>", "<suggestion 4>"]
}

Scoring criteria:
- Formatting & Structure (20 points): Clear sections, consistent formatting, appropriate length
- Work Experience (25 points): Quantified achievements, relevant experience, action verbs
- Skills & Keywords (20 points): Relevant technical/soft skills, ATS-friendly keywords
- Education & Certifications (15 points): Relevant qualifications, certifications
- Overall Impact (20 points): Professional summary, clarity, readability

Be specific and actionable in your feedback. Reference actual content from the resume.`

export async function analyzeResume(resumeText, apiKey) {
  if (!apiKey) {
    throw new Error('Please enter your OpenAI API key to analyze your resume.')
  }

  const client = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  })

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: `Please analyze this resume:\n\n${resumeText}` },
    ],
    temperature: 0.3,
    max_tokens: 1500,
  })

  const content = response.choices[0].message.content.trim()

  try {
    // Try to parse directly first
    return JSON.parse(content)
  } catch {
    // Try to extract JSON from markdown code blocks
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[1].trim())
    }
    throw new Error('Failed to parse AI response. Please try again.')
  }
}
