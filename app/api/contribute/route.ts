import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { getWorkshop } from '@/data/workshops'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  if (req.cookies.get('auth')?.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { workshopSlug, type, name, email, team, templateUrl, templateDescription, notes } = body

  // Validate required fields
  if (!workshopSlug || !type || !name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Input length limits
  if (
    typeof name !== 'string' || name.length > 100 ||
    typeof email !== 'string' || email.length > 254 ||
    typeof workshopSlug !== 'string' || workshopSlug.length > 100 ||
    (team && (typeof team !== 'string' || team.length > 100)) ||
    (templateUrl && (typeof templateUrl !== 'string' || templateUrl.length > 2048)) ||
    (templateDescription && (typeof templateDescription !== 'string' || templateDescription.length > 500)) ||
    (notes && (typeof notes !== 'string' || notes.length > 2000))
  ) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  // Validate email format
  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  // Validate workshop exists (hardcoded or community)
  const isCommunity = workshopSlug.startsWith('community-')
  if (!isCommunity && !getWorkshop(workshopSlug)) {
    return NextResponse.json({ error: 'Invalid workshop' }, { status: 400 })
  }

  // Validate type
  if (!['template', 'contact'].includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  // If template type, require a URL and validate its scheme
  if (type === 'template') {
    if (!templateUrl) {
      return NextResponse.json({ error: 'Template URL required' }, { status: 400 })
    }
    try {
      const parsed = new URL(templateUrl)
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        return NextResponse.json({ error: 'Invalid URL: only http and https are allowed' }, { status: 400 })
      }
    } catch {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 })
    }
  }

  try {
    const supabase = createClient()
    const { error } = await supabase.from('contributions').insert({
      workshop_slug: workshopSlug,
      type,
      contributor_name: name.trim(),
      contributor_email: email.trim().toLowerCase(),
      contributor_team: team?.trim() || null,
      template_url: templateUrl?.trim() || null,
      template_description: templateDescription?.trim() || null,
      notes: notes?.trim() || null,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to save contribution' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contribute route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
