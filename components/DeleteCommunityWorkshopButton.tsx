'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteCommunityWorkshopButton({ id }: { id: string }) {
  const [confirming, setConfirming] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleDelete = async () => {
    setDeleting(true)
    setError('')
    try {
      const res = await fetch(`/api/community/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error()
      router.push('/')
    } catch {
      setError('Something went wrong. Please try again.')
      setDeleting(false)
    }
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm text-ink-500">Remove this workshop?</span>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="text-sm font-medium text-red-600 hover:text-red-700 disabled:opacity-40"
        >
          {deleting ? 'Removing…' : 'Yes, delete'}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="text-sm text-ink-400 hover:text-ink-600"
        >
          Cancel
        </button>
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    )
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="text-sm text-ink-400 hover:text-red-600 transition-colors"
    >
      Delete workshop
    </button>
  )
}
