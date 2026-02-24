import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getWorkshop, workshops, categoryMeta, Workshop } from '@/data/workshops'
import CategoryBadge from '@/components/CategoryBadge'
import ContributeForm from '@/components/ContributeForm'
import CommunityContributions from '@/components/CommunityContributions'
import { createClient } from '@/lib/supabase-server'
import { parseCommunityWorkshop, CommunityWorkshopRow } from '@/lib/parse-community-workshop'
import DeleteCommunityWorkshopButton from '@/components/DeleteCommunityWorkshopButton'

export async function generateStaticParams() {
  return workshops.map((w) => ({ slug: w.slug }))
}

export const dynamicParams = true

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const workshop = getWorkshop(slug)
  if (!workshop) return {}
  return {
    title: `${workshop.name} | Workshop Selector`,
    description: workshop.description,
  }
}

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

async function getContributions(slug: string): Promise<Contribution[]> {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('contributions')
      .select('*')
      .eq('workshop_slug', slug)
      .order('created_at', { ascending: false })
    if (error) return []
    return (data as Contribution[]) ?? []
  } catch {
    return []
  }
}

async function getCommunityWorkshop(slug: string): Promise<Workshop | null> {
  if (!slug.startsWith('community-')) return null
  const id = slug.replace('community-', '')
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('workshop_suggestions')
      .select('id, suggester_name, workshop_name, description, category, duration, group_size, when_to_use, steps, materials, tips, tags, created_at')
      .eq('id', id)
      .eq('hidden', false)
      .single()
    if (error || !data) return null
    return parseCommunityWorkshop(data as CommunityWorkshopRow)
  } catch {
    return null
  }
}

export default async function WorkshopPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const workshop = getWorkshop(slug) ?? await getCommunityWorkshop(slug)
  if (!workshop) notFound()

  const contributions = await getContributions(slug)
  const meta = categoryMeta[workshop.category]

  return (
    <div className="min-h-screen">

      {/* Nav */}
      <nav className="bg-white border-b border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Link href="/" className="flex items-center gap-1.5 text-sm text-ink-400 hover:text-ink-900 transition-colors shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All workshops
            </Link>
            <span className="text-ink-200">/</span>
            <span className="text-sm text-ink-500 truncate">{workshop.name}</span>
          </div>
          {workshop.isCommunity && (
            <DeleteCommunityWorkshopButton id={slug.replace('community-', '')} />
          )}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Hero */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Category colour strip */}
          <div className={`h-1.5 w-full ${meta.bg.replace('bg-', 'bg-').replace('-50', '-400')}`}
            style={{ background: `var(--tw-${meta.color}-400, currentColor)` }}
          />
          <div className="p-8">
            <div className="flex items-center gap-3 flex-wrap">
              <CategoryBadge category={workshop.category} />
              {workshop.isCommunity && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-500 bg-ink-50 border border-ink-200 rounded-full px-2.5 py-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  Added by {workshop.suggesterName}
                </span>
              )}
            </div>
            <h1 className="mt-4 text-3xl font-bold text-ink-900 leading-tight">{workshop.name}</h1>
            <p className="mt-3 text-ink-500 text-lg leading-relaxed">{workshop.description}</p>

            <div className="mt-6 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-ink-600">
                <svg className="w-4 h-4 text-ink-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-ink-700">Duration</span>
                <span>{workshop.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-600">
                <svg className="w-4 h-4 text-ink-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span className="font-medium text-ink-700">Group size</span>
                <span>{workshop.groupSize} people</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {workshop.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-ink-50 border border-ink-200 text-xs text-ink-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* When to use */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-base font-semibold text-ink-900 mb-4">When to use this</h2>
              <ul className="space-y-3">
                {workshop.whenToUse.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                    <span className="text-sm text-ink-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Steps */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
                <h2 className="text-base font-semibold text-ink-900">How to run it</h2>
              </div>

              {/* One approach notice */}
              <div className="mb-6 flex items-start gap-3 rounded-lg bg-ink-50 border border-ink-200 px-4 py-3">
                <svg className="w-4 h-4 text-ink-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <p className="text-xs text-ink-500 leading-relaxed">
                  These steps show one proven way to run this session. Adapt freely based on your group, context, and time. Colleagues&apos; variations and templates are in the{' '}
                  <a href="#colleagues" className="text-brand-500 hover:underline">From colleagues</a> section below.
                </p>
              </div>

              <div className="space-y-0">
                {workshop.steps.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center pt-0.5">
                      <div className="w-7 h-7 rounded-full bg-brand-500 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-white">{i + 1}</span>
                      </div>
                      {i < workshop.steps.length - 1 && (
                        <div className="w-px flex-1 bg-ink-200 mt-2" style={{ minHeight: '2rem' }} />
                      )}
                    </div>
                    <div className="pb-7 flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                        <h3 className="font-semibold text-ink-900 text-sm">{step.title}</h3>
                        <span className="text-xs text-ink-400 bg-ink-50 border border-ink-200 px-2 py-0.5 rounded-full">{step.duration}</span>
                      </div>
                      <p className="text-sm text-ink-600 leading-relaxed">{step.description}</p>
                      {step.facilitatorNotes && (
                        <details className="mt-2 group">
                          <summary className="list-none flex items-center gap-1 cursor-pointer select-none w-fit">
                            <svg className="w-3 h-3 text-brand-400 transition-transform group-open:rotate-90 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-medium text-brand-500 group-open:text-brand-700">Facilitator notes</span>
                          </summary>
                          <p className="mt-2 text-sm text-ink-500 leading-relaxed border-l-2 border-ink-200 pl-3">{step.facilitatorNotes}</p>
                        </details>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Facilitator tips */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-base font-semibold text-ink-900 mb-4">Facilitator tips</h2>
              <div className="space-y-3">
                {workshop.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 bg-brand-50 border border-brand-100 rounded-lg p-4">
                    <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <p className="text-sm text-ink-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-5">

            {/* At a glance */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="text-sm font-semibold text-ink-900 mb-4">At a glance</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-ink-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <dt className="text-xs text-ink-400 font-medium uppercase tracking-wide">Duration</dt>
                    <dd className="text-ink-700 mt-0.5">{workshop.duration}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-ink-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.75a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  <div>
                    <dt className="text-xs text-ink-400 font-medium uppercase tracking-wide">Group size</dt>
                    <dd className="text-ink-700 mt-0.5">{workshop.groupSize} people</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-ink-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" />
                  </svg>
                  <div>
                    <dt className="text-xs text-ink-400 font-medium uppercase tracking-wide">Steps</dt>
                    <dd className="text-ink-700 mt-0.5">{workshop.steps.length} steps</dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Materials */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="text-sm font-semibold text-ink-900 mb-3">Materials needed</h3>
              <ul className="space-y-2">
                {workshop.materials.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <svg className="w-4 h-4 text-ink-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Community section */}
        <section id="colleagues" className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-6">
            <h2 className="text-base font-semibold text-ink-900">From colleagues</h2>
            <p className="text-sm text-ink-500 mt-1">
              Templates, resources, and people who&apos;ve run this workshop
              {contributions.length > 0 ? ` · ${contributions.length} contribution${contributions.length !== 1 ? 's' : ''}` : ''}
            </p>
          </div>
          <div className="space-y-6">
            <CommunityContributions contributions={contributions} />
            <ContributeForm workshopSlug={workshop.slug} workshopName={workshop.name} />
          </div>
        </section>

      </main>
    </div>
  )
}
