'use client'

import { Category, categoryMeta } from '@/data/workshops'

interface WorkshopFiltersProps {
  search: string
  onSearchChange: (v: string) => void
  selectedCategory: Category | 'all'
  onCategoryChange: (v: Category | 'all') => void
  selectedDuration: string
  onDurationChange: (v: string) => void
  totalCount: number
  filteredCount: number
}

const durations = [
  { label: 'Any length', value: 'all' },
  { label: 'Under 30 mins', value: 'short' },
  { label: '30–60 mins', value: 'medium' },
  { label: '60+ mins', value: 'long' },
]

export default function WorkshopFilters({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedDuration,
  onDurationChange,
  totalCount,
  filteredCount,
}: WorkshopFiltersProps) {
  const categories: Array<{ value: Category | 'all'; label: string }> = [
    { value: 'all', label: 'All workshops' },
    ...Object.entries(categoryMeta).map(([k, v]) => ({
      value: k as Category,
      label: v.label,
    })),
  ]

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="text"
          placeholder="Search workshops..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded border border-ink-200 bg-white text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
        />
        {search && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Category filter */}
      <div>
        <p className="text-xs font-medium text-ink-500 uppercase tracking-wide mb-2">Category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value
            const meta = cat.value !== 'all' ? categoryMeta[cat.value as Category] : null
            return (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  isActive
                    ? meta
                      ? `${meta.bg} ${meta.border} ${meta.text}`
                      : 'bg-ink-900 border-ink-900 text-white'
                    : 'bg-white border-ink-200 text-ink-500 hover:border-ink-300 hover:bg-ink-50'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Duration filter */}
      <div>
        <p className="text-xs font-medium text-ink-500 uppercase tracking-wide mb-2">Duration</p>
        <div className="flex flex-wrap gap-2">
          {durations.map((d) => (
            <button
              key={d.value}
              onClick={() => onDurationChange(d.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                selectedDuration === d.value
                  ? 'bg-ink-900 border-ink-900 text-white'
                  : 'bg-white border-ink-200 text-ink-500 hover:border-ink-300 hover:bg-ink-50'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="text-xs text-ink-400">
        Showing {filteredCount} of {totalCount} workshops
      </p>
    </div>
  )
}
