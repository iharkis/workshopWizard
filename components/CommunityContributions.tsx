interface Contribution {
  id: string
  contributor_name: string
  contributor_team: string | null
  contributor_email: string
  type: 'template' | 'contact'
  template_url: string | null
  template_description: string | null
  notes: string | null
  created_at: string
}

interface CommunityContributionsProps {
  contributions: Contribution[]
}

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 30) return `${diffDays} days ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

export default function CommunityContributions({ contributions }: CommunityContributionsProps) {
  if (contributions.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-200 p-8 text-center">
        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
        <p className="text-sm font-medium text-stone-600">No contributions yet</p>
        <p className="text-sm text-stone-400 mt-1">Be the first to share a template or let colleagues know you&apos;ve run this workshop.</p>
      </div>
    )
  }

  const templates = contributions.filter((c) => c.type === 'template')
  const contacts = contributions.filter((c) => c.type === 'contact')

  return (
    <div className="space-y-4">
      {templates.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-stone-700 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            Templates & resources ({templates.length})
          </h4>
          <div className="space-y-3">
            {templates.map((c) => (
              <div key={c.id} className="rounded-xl border border-stone-200 bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {c.template_description && (
                      <p className="text-sm font-medium text-stone-900">{c.template_description}</p>
                    )}
                    <a
                      href={c.template_url ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-amber-700 hover:text-amber-800 underline mt-1 transition-colors"
                    >
                      Open resource
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                    {c.notes && (
                      <p className="text-xs text-stone-500 mt-2 leading-relaxed">{c.notes}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-stone-100">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium text-amber-700">
                      {c.contributor_name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-xs text-stone-500">
                    {c.contributor_name}
                    {c.contributor_team ? ` · ${c.contributor_team}` : ''}
                    {' · '}
                    {timeAgo(c.created_at)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {contacts.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-stone-700 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.75a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-4.5 0 2.625 2.625 0 014.5 0z" />
            </svg>
            People who&apos;ve run this ({contacts.length})
          </h4>
          <div className="space-y-2">
            {contacts.map((c) => (
              <div key={c.id} className="rounded-xl border border-stone-200 bg-white p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                  <span className="text-sm font-medium text-stone-600">
                    {c.contributor_name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-sm font-medium text-stone-900">{c.contributor_name}</span>
                    {c.contributor_team && (
                      <span className="text-xs text-stone-500">{c.contributor_team}</span>
                    )}
                  </div>
                  {c.notes && (
                    <p className="text-sm text-stone-600 mt-1 leading-relaxed">{c.notes}</p>
                  )}
                  <a
                    href={`mailto:${c.contributor_email}`}
                    className="inline-flex items-center gap-1 text-xs text-amber-700 hover:text-amber-800 mt-2 transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Get in touch
                  </a>
                </div>
                <span className="text-xs text-stone-400 shrink-0">{timeAgo(c.created_at)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
