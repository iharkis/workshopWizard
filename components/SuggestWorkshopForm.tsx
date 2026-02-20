'use client'

import { useState } from 'react'
import { categoryMeta } from '@/data/workshops'

export default function SuggestWorkshopForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    workshopName: '',
    description: '',
    category: '',
    duration: '',
    groupSize: '',
    whenToUse: '',
    steps: '',
    materials: '',
    tips: '',
    tags: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Submit failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-ink-900 mb-2">Workshop added!</h3>
          <p className="text-sm text-ink-500">It&apos;s now live in the directory. Refresh the home page to see it.</p>
          <button
            onClick={onClose}
            className="mt-6 btn-hippo text-sm"
          >
            Done
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="px-6 py-4 border-b border-ink-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <h2 className="font-semibold text-ink-900">Suggest a workshop</h2>
            <p className="text-xs text-ink-500 mt-0.5">The more detail you add, the easier it is to include it</p>
          </div>
          <button onClick={onClose} className="text-ink-400 hover:text-ink-700 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="divide-y divide-ink-100">

          {/* ── Section 1: Basics ── */}
          <div className="px-6 py-5 space-y-4">
            <h3 className="text-xs font-semibold text-ink-400 uppercase tracking-wide">About the workshop</h3>

            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">Workshop name *</label>
              <input
                required
                type="text"
                value={form.workshopName}
                onChange={set('workshopName')}
                className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="e.g. Six Thinking Hats"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">Description *</label>
              <textarea
                required
                rows={3}
                value={form.description}
                onChange={set('description')}
                className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                placeholder="One or two sentences covering what the workshop does and why it's useful."
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">Category</label>
                <select
                  value={form.category}
                  onChange={set('category')}
                  className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                >
                  <option value="">Not sure</option>
                  {Object.entries(categoryMeta).map(([key, meta]) => (
                    <option key={key} value={key}>{meta.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">Duration</label>
                <input
                  type="text"
                  value={form.duration}
                  onChange={set('duration')}
                  className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="e.g. 60–90 mins"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">Group size</label>
                <input
                  type="text"
                  value={form.groupSize}
                  onChange={set('groupSize')}
                  className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="e.g. 4–12"
                />
              </div>
            </div>
          </div>

          {/* ── Section 2: When to use ── */}
          <div className="px-6 py-5 space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-ink-400 uppercase tracking-wide mb-0.5">When to use it</h3>
              <p className="text-xs text-ink-400">One scenario per line</p>
            </div>
            <textarea
              rows={4}
              value={form.whenToUse}
              onChange={set('whenToUse')}
              className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
              placeholder={
                'When you need to align a team on competing priorities before a sprint.\n' +
                'When stakeholders have very different mental models of the problem.\n' +
                'When you want to make hidden assumptions visible.'
              }
            />
          </div>

          {/* ── Section 3: Steps ── */}
          <div className="px-6 py-5 space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-ink-400 uppercase tracking-wide mb-0.5">How to run it</h3>
              <p className="text-xs text-ink-400">One step per line — include a title, suggested time, and what to do</p>
            </div>
            <textarea
              rows={6}
              value={form.steps}
              onChange={set('steps')}
              className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
              placeholder={
                'Set the context | 5 mins | Explain the challenge and why this session matters.\n' +
                'Silent generation | 10 mins | Everyone writes ideas individually before sharing.\n' +
                'Share and cluster | 20 mins | Each person reads their ideas aloud; group similar ones.\n' +
                'Vote and prioritise | 10 mins | Dot-vote on the clusters that feel most promising.'
              }
            />
          </div>

          {/* ── Section 4: Materials ── */}
          <div className="px-6 py-5 space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-ink-400 uppercase tracking-wide mb-0.5">Materials needed</h3>
              <p className="text-xs text-ink-400">One item per line</p>
            </div>
            <textarea
              rows={3}
              value={form.materials}
              onChange={set('materials')}
              className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
              placeholder={'Sticky notes and markers\nWhiteboard or large paper\nDot stickers for voting'}
            />
          </div>

          {/* ── Section 5: Tips ── */}
          <div className="px-6 py-5 space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-ink-400 uppercase tracking-wide mb-0.5">Facilitator tips</h3>
              <p className="text-xs text-ink-400">One tip per line — things you wish you&apos;d known before running it</p>
            </div>
            <textarea
              rows={3}
              value={form.tips}
              onChange={set('tips')}
              className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
              placeholder={
                'Keep the silent generation phase strict — talking before this kills divergence.\n' +
                'If energy dips during clustering, take a 5-minute break rather than pushing through.'
              }
            />
          </div>

          {/* ── Section 6: Tags ── */}
          <div className="px-6 py-5 space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-ink-400 uppercase tracking-wide mb-0.5">Tags</h3>
              <p className="text-xs text-ink-400">Comma-separated keywords that help people find it</p>
            </div>
            <input
              type="text"
              value={form.tags}
              onChange={set('tags')}
              className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              placeholder="e.g. remote-friendly, ideation, diverge, team, sticky notes"
            />
          </div>

          {/* ── Section 7: Your details ── */}
          <div className="px-6 py-5 space-y-4">
            <h3 className="text-xs font-semibold text-ink-400 uppercase tracking-wide">Your details</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">Your name *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={set('name')}
                  className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">Work email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  className="w-full px-3 py-2.5 rounded border border-ink-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="jane@example.gov.uk"
                />
              </div>
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
                {status === 'submitting' ? 'Submitting...' : 'Submit suggestion'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-sm text-ink-500 hover:text-ink-700"
              >
                Cancel
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}
