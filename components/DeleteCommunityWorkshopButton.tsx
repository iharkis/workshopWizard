'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteCommunityWorkshopButton({ id }: { id: string }) {
  const [confirming, setConfirming] = useState(false)
  const [email, setEmail] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleDelete = async () => {
    setDeleting(true)
    setError('')
    try {
      const res = await fetch(`/api/community/${id}?email=${encodeURIComponent(email)}`, {
        method: 'DELETE',
      })
      if (res.status === 403) {
        setError("Email doesn't match the one used to submit this workshop.")
        setDeleting(false)
        return
      }
      if (!res.ok) throw new Error()
      router.push('/')
    } catch {
      setError('Something went wrong. Please try again.')
      setDeleting(false)
    }
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to confirm"
          className="px-2.5 py-1.5 text-sm border border-ink-200 rounded focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent w-56"
          autoFocus
        />
        <button
          onClick={handleDelete}
          disabled={deleting || !email}
          className="text-sm font-medium text-red-600 hover:text-red-700 disabled:opacity-40"
        >
          {deleting ? 'Removing…' : 'Confirm'}
        </button>
        <button
          onClick={() => { setConfirming(false); setEmail(''); setError('') }}
          className="text-sm text-ink-400 hover:text-ink-600"
        >
          Cancel
        </button>
        {error && <span className="text-xs text-red-600 w-full">{error}</span>}
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
