'use client'

import { useState } from 'react'
import Link from 'next/link'
import { wizardQuestions, ROOT_QUESTION, WizardOption } from '@/data/wizard'
import { getWorkshop } from '@/data/workshops'
import CategoryBadge from './CategoryBadge'

interface HistoryEntry {
  questionId: string
  chosenOption: WizardOption
}

const durations = [
  { label: 'Any length', value: 'all' },
  { label: 'Under 30 mins', value: 'short' },
  { label: '30–60 mins', value: 'medium' },
  { label: 'Over an hour', value: 'long' },
]

function parseDurationMins(duration: string): number {
  const match = duration.match(/(\d+)/)
  return match ? parseInt(match[1]) : 60
}

function matchesDuration(duration: string, filter: string): boolean {
  if (filter === 'all') return true
  const mins = parseDurationMins(duration)
  if (filter === 'short') return mins < 30
  if (filter === 'medium') return mins >= 30 && mins <= 60
  if (filter === 'long') return mins > 60
  return true
}

export default function Wizard({ onClose }: { onClose: () => void }) {
  const [currentQuestionId, setCurrentQuestionId] = useState(ROOT_QUESTION)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [results, setResults] = useState<string[] | null>(null)
  const [duration, setDuration] = useState('all')

  const currentQuestion = wizardQuestions[currentQuestionId]

  const handleOption = (option: WizardOption) => {
    const entry: HistoryEntry = { questionId: currentQuestionId, chosenOption: option }
    if (option.next) {
      setHistory([...history, entry])
      setCurrentQuestionId(option.next)
    } else if (option.workshops) {
      setHistory([...history, entry])
      setResults(option.workshops)
    }
  }

  const handleBack = () => {
    if (results !== null) {
      setResults(null)
      return
    }
    if (history.length === 0) return
    const prev = history[history.length - 1]
    setHistory(history.slice(0, -1))
    setCurrentQuestionId(prev.questionId)
  }

  const handleReset = () => {
    setCurrentQuestionId(ROOT_QUESTION)
    setHistory([])
    setResults(null)
    setDuration('all')
  }

  const filteredResults = results
    ? results.map((slug) => getWorkshop(slug)).filter((w) => w && matchesDuration(w.duration, duration))
    : []

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
        style={{ borderRadius: 12, boxShadow: '0 24px 64px rgba(12,35,64,0.2)' }}>

        {/* Header */}
        <div className="px-7 pt-6 pb-5 border-b border-ink-100 flex items-center justify-between shrink-0">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-ink-400 mb-1">Workshop selector</p>
            <h2 className="text-xl font-semibold text-ink-900">Help me choose</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-ink-50 text-ink-400 hover:bg-ink-100 hover:text-ink-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Breadcrumb */}
        {history.length > 0 && (
          <div className="px-7 py-3 bg-ink-50 border-b border-ink-100 flex items-center gap-2 flex-wrap shrink-0">
            {history.map((h, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <svg className="w-3 h-3 text-ink-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                )}
                <span className="text-xs text-ink-500 bg-white border border-ink-200 rounded-full px-3 py-1">
                  {h.chosenOption.label}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-7 py-6">
          {results !== null ? (
            /* Results */
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-ink-900">Suggested workshops</h3>
                <p className="text-sm text-ink-500 mt-1">Based on your answers — click any to see the full guide.</p>
              </div>

              {/* Duration filter */}
              <div className="flex flex-wrap gap-2">
                {durations.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setDuration(d.value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                      duration === d.value
                        ? 'bg-ink-900 border-ink-900 text-white'
                        : 'bg-white border-ink-200 text-ink-500 hover:border-ink-300'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              {filteredResults.length === 0 ? (
                <div className="text-center py-10 text-ink-400 text-sm">
                  No workshops match that duration. Try &quot;Any length&quot;.
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredResults.map((workshop, i) => {
                    if (!workshop) return null
                    return (
                      <Link
                        key={workshop.slug}
                        href={`/${workshop.slug}`}
                        onClick={onClose}
                        className="group block card-hippo border border-ink-100 p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                              <h4 className="font-semibold text-ink-900 group-hover:text-brand-500 transition-colors">
                                {workshop.name}
                              </h4>
                              {i === 0 && (
                                <span className="text-xs font-medium bg-brand-50 text-brand-600 border border-brand-100 rounded-full px-2.5 py-0.5">
                                  Best match
                                </span>
                              )}
                              <CategoryBadge category={workshop.category} />
                            </div>
                            <p className="text-sm text-ink-500 leading-relaxed line-clamp-2">{workshop.description}</p>
                            <div className="flex items-center gap-3 mt-2.5 text-xs text-ink-400">
                              <span>{workshop.duration}</span>
                              <span>·</span>
                              <span>{workshop.groupSize} people</span>
                            </div>
                          </div>
                          <svg className="w-5 h-5 text-ink-300 group-hover:text-brand-500 transition-colors mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Question */
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-ink-900 leading-snug">
                {currentQuestion.question}
              </h3>
              <div className="space-y-2.5">
                {currentQuestion.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(option)}
                    className="w-full text-left group"
                  >
                    <div className="card-hippo border border-ink-100 px-5 py-4 group-hover:border-brand-500 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-medium text-ink-900 group-hover:text-brand-600 transition-colors">
                          {option.label}
                        </p>
                        {option.description && (
                          <p className="text-sm text-ink-400 mt-0.5 leading-relaxed">
                            {option.description}
                          </p>
                        )}
                      </div>
                      <svg className="w-4 h-4 text-ink-300 group-hover:text-brand-500 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-7 py-4 border-t border-ink-100 flex items-center justify-between shrink-0 bg-ink-50">
          <div className="flex items-center gap-4">
            {(history.length > 0 || results !== null) && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back
              </button>
            )}
            {history.length > 0 && (
              <button onClick={handleReset} className="text-sm text-ink-400 hover:text-ink-700 transition-colors">
                Start over
              </button>
            )}
          </div>
          <button onClick={onClose} className="text-sm text-ink-400 hover:text-ink-700 transition-colors">
            Browse all instead
          </button>
        </div>

      </div>
    </div>
  )
}
