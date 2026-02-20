import { Workshop, Category } from '@/data/workshops'

const validCategories: Category[] = [
  'icebreaker', 'problem-framing', 'ideation', 'prioritisation',
  'retrospective', 'discovery', 'service-design', 'requirements',
  'planning', 'public-sector',
]

function parseLines(text: string | null): string[] {
  if (!text) return []
  return text.split('\n').map(l => l.trim()).filter(Boolean)
}

export interface CommunityWorkshopRow {
  id: string
  suggester_name: string
  workshop_name: string
  description: string
  category: string | null
  duration: string | null
  group_size: string | null
  when_to_use: string | null
  steps: string | null
  materials: string | null
  tips: string | null
  tags: string | null
  created_at: string
}

export function parseCommunityWorkshop(row: CommunityWorkshopRow): Workshop {
  const steps = parseLines(row.steps).map(line => {
    const parts = line.split('|').map(p => p.trim())
    return {
      title: parts[0] || '',
      duration: parts[1] || '',
      description: parts[2] || '',
    }
  })

  const category: Category = validCategories.includes(row.category as Category)
    ? (row.category as Category)
    : 'planning'

  return {
    slug: `community-${row.id}`,
    name: row.workshop_name,
    category,
    duration: row.duration || 'Varies',
    groupSize: row.group_size || 'Varies',
    description: row.description,
    whenToUse: parseLines(row.when_to_use),
    steps,
    materials: parseLines(row.materials),
    tips: parseLines(row.tips),
    tags: row.tags ? row.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
    isCommunity: true,
    suggesterName: row.suggester_name,
  }
}
