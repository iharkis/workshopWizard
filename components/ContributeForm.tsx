'use client'

import { useState } from 'react'

interface ContributeFormProps {
  workshopSlug: string
  workshopName: string
}

export default function ContributeForm({ workshopSlug, workshopName }: ContributeFormProps) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<'template' | 'contact'>('contact')
  const [form, setForm] = useState({
    name: '',
    email: '',
    templateUrl: '',
    templateDescription: '',
    notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/contribute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workshopSlug,
          type,
          ...form,
        }),
      })

      if (!res.ok) throw new Error('Submit failed')
      setStatus('success')
      setForm({ name: '', email: '', templateUrl: '', templateDescription: '', notes: '' })
    } catch {
      setStatus('error')
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="btn-hippo text-sm"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Share your experience with this workshop
      </button>
    )
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-green-900">Thanks for sharing!</p>
            <p className="text-sm text-green-700 mt-0.5">Your contribution has been added and will help colleagues find what they need.</p>
          </div>
        </div>
        <button
          onClick={() => { setOpen(false); setStatus('idle') }}
          className="mt-4 text-sm text-green-700 hover:text-green-900 underline"
        >
          Add another
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-ink-200 bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-4 bg-ink-50 border-b border-ink-200 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-ink-900">Share your experience</h3>
          <p className="text-sm text-ink-500 mt-0.5">Help colleagues running {workshopName}</p>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="text-ink-400 hover:text-ink-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        {/* Type toggle */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-2">What are you sharing?</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setType('contact')}
              className={`px-4 py-3 rounded border text-sm font-medium text-left transition-all ${
                type === 'contact'
                  ? 'bg-brand-50 border-brand-500 text-brand-600'
                  : 'bg-white border-ink-200 text-ink-500 hover:bg-ink-50'
              }`}
            >
              <div className="font-medium">I can help</div>
              <div className="text-xs mt-0.5 opacity-70">I&apos;ve run this — contact me</div>
            </button>
            <button
              type="button"
              onClick={() => setType('template')}
              className={`px-4 py-3 rounded border text-sm font-medium text-left transition-all ${
                type === 'template'
                  ? 'bg-brand-50 border-brand-500 text-brand-600'
                  : 'bg-white border-ink-200 text-ink-500 hover:bg-ink-50'
              }`}
            >
              <div className="font-medium">Template or resource</div>
              <div className="text-xs mt-0.5 opacity-70">I have something to share</div>
            </button>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">Your name *</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="Jane Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">Work email *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="jane@example.gov.uk"
          />
        </div>

        {/* Template fields */}
        {type === 'template' && (
          <>
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">Link to template or resource *</label>
              <input
                required
                type="url"
                value={form.templateUrl}
                onChange={(e) => setForm({ ...form, templateUrl: e.target.value })}
                className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="https://..."
              />
              <p className="text-xs text-ink-400 mt-1">Miro board, Confluence page, Google Doc, etc.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">What does it contain?</label>
              <input
                type="text"
                value={form.templateDescription}
                onChange={(e) => setForm({ ...form, templateDescription: e.target.value })}
                className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="e.g. Miro template with agenda and facilitation notes"
              />
            </div>
          </>
        )}

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-ink-700 mb-1.5">
            {type === 'contact' ? 'Context about when you ran it (optional)' : 'Any other notes (optional)'}
          </label>
          <textarea
            rows={3}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
            placeholder={type === 'contact' ? 'e.g. Ran with a 12-person cross-departmental team for a service discovery kickoff' : ''}
          />
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
        )}

        <div className="flex items-center gap-3 pt-1">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-hippo text-sm"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-sm text-ink-500 hover:text-ink-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
