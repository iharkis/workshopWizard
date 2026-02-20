'use client'

import { useState, useMemo } from 'react'
import { Workshop, Category } from '@/data/workshops'
import WorkshopCard from '@/components/WorkshopCard'
import WorkshopFilters from '@/components/WorkshopFilters'
import Wizard from '@/components/Wizard'
import SuggestWorkshopForm from '@/components/SuggestWorkshopForm'

export type ContributionCounts = Record<string, { templates: number; contacts: number }>

interface WorkshopsClientProps {
  allWorkshops: Workshop[]
  contributionCounts: ContributionCounts
}

function parseDurationMins(duration: string): number {
  const match = duration.match(/(\d+)/)
  return match ? parseInt(match[1]) : 60
}

function matchesDurationFilter(duration: string, filter: string): boolean {
  if (filter === 'all') return true
  const mins = parseDurationMins(duration)
  if (filter === 'short') return mins < 30
  if (filter === 'medium') return mins >= 30 && mins <= 60
  if (filter === 'long') return mins > 60
  return true
}

export default function WorkshopsClient({ allWorkshops, contributionCounts }: WorkshopsClientProps) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
  const [selectedDuration, setSelectedDuration] = useState('all')
  const [wizardOpen, setWizardOpen] = useState(false)
  const [suggestOpen, setSuggestOpen] = useState(false)

  const filtered = useMemo(() => {
    return allWorkshops.filter((w) => {
      const matchesSearch =
        search === '' ||
        w.name.toLowerCase().includes(search.toLowerCase()) ||
        w.description.toLowerCase().includes(search.toLowerCase()) ||
        w.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
        w.whenToUse.some((u) => u.toLowerCase().includes(search.toLowerCase()))

      const matchesCategory = selectedCategory === 'all' || w.category === selectedCategory
      const matchesDuration = matchesDurationFilter(w.duration, selectedDuration)

      return matchesSearch && matchesCategory && matchesDuration
    })
  }, [search, selectedCategory, selectedDuration])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded bg-brand-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-ink-400 uppercase tracking-wide">BA Tools</span>
            </div>
            <h1 className="text-3xl font-bold text-ink-900">Workshop Selector</h1>
            <p className="mt-2 text-ink-500 text-lg leading-relaxed">
              Find the right technique for your session. Browse 39 facilitation methods used across public sector UCD and BA practice.
            </p>
            <p className="mt-3 text-sm text-ink-400">
              Have you run one of these? Share a template or let colleagues know they can reach out.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button onClick={() => setWizardOpen(true)} className="btn-hippo">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                Help me choose
              </button>
              <span className="text-sm text-ink-400">or browse all {allWorkshops.length} below</span>
              <button
                onClick={() => setSuggestOpen(true)}
                className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Suggest a workshop
              </button>
            </div>
          </div>
        </div>
      </header>

      {wizardOpen && <Wizard onClose={() => setWizardOpen(false)} />}
      {suggestOpen && <SuggestWorkshopForm onClose={() => setSuggestOpen(false)} />}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <WorkshopFilters
            search={search}
            onSearchChange={setSearch}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedDuration={selectedDuration}
            onDurationChange={setSelectedDuration}
            totalCount={allWorkshops.length}
            filteredCount={filtered.length}
          />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-12 h-12 rounded-lg bg-ink-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-ink-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <p className="text-ink-700 font-medium">No workshops found</p>
            <p className="text-ink-400 text-sm mt-1">Try adjusting your search or filters</p>
            <button
              onClick={() => { setSearch(''); setSelectedCategory('all'); setSelectedDuration('all') }}
              className="mt-4 text-sm text-brand-500 hover:text-brand-600 underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((workshop) => {
              const counts = contributionCounts[workshop.slug]
              return (
                <WorkshopCard
                  key={workshop.slug}
                  workshop={workshop}
                  templateCount={counts?.templates ?? 0}
                  contactCount={counts?.contacts ?? 0}
                />
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
