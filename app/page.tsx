export const dynamic = 'force-dynamic'

import { createClient } from '@/lib/supabase-server'
import { workshops, Workshop } from '@/data/workshops'
import { parseCommunityWorkshop, CommunityWorkshopRow } from '@/lib/parse-community-workshop'
import WorkshopsClient, { ContributionCounts } from '@/components/WorkshopsClient'

async function getCommunityWorkshops(): Promise<Workshop[]> {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('workshop_suggestions')
      .select('id, suggester_name, workshop_name, description, category, duration, group_size, when_to_use, steps, materials, tips, tags, created_at')
      .order('created_at', { ascending: false })
    if (error || !data) return []
    return (data as CommunityWorkshopRow[]).map(parseCommunityWorkshop)
  } catch {
    return []
  }
}

async function getContributionCounts(): Promise<ContributionCounts> {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('contributions')
      .select('workshop_slug, type')
    if (error || !data) return {}
    const counts: ContributionCounts = {}
    for (const row of data as { workshop_slug: string; type: string }[]) {
      if (!counts[row.workshop_slug]) counts[row.workshop_slug] = { templates: 0, contacts: 0 }
      if (row.type === 'template') counts[row.workshop_slug].templates++
      else if (row.type === 'contact') counts[row.workshop_slug].contacts++
    }
    return counts
  } catch {
    return {}
  }
}

export default async function HomePage() {
  const [communityWorkshops, contributionCounts] = await Promise.all([
    getCommunityWorkshops(),
    getContributionCounts(),
  ])

  const allWorkshops = [...workshops, ...communityWorkshops]

  return <WorkshopsClient allWorkshops={allWorkshops} contributionCounts={contributionCounts} />
}
