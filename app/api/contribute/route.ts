import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { getWorkshop } from '@/data/workshops'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { workshopSlug, type, name, email, team, templateUrl, templateDescription, notes } = body

  // Validate required fields
  if (!workshopSlug || !type || !name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
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

  // If template type, require a URL
  if (type === 'template' && !templateUrl) {
    return NextResponse.json({ error: 'Template URL required' }, { status: 400 })
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
