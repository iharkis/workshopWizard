import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  if (req.cookies.get('auth')?.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { name, email, workshopName, description, category, duration, groupSize, whenToUse, steps, materials, tips, tags } = body

  if (!name || !email || !workshopName || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Input length limits
  if (
    typeof name !== 'string' || name.length > 100 ||
    typeof email !== 'string' || email.length > 254 ||
    typeof workshopName !== 'string' || workshopName.length > 200 ||
    typeof description !== 'string' || description.length > 2000 ||
    (category && (typeof category !== 'string' || category.length > 100)) ||
    (duration && (typeof duration !== 'string' || duration.length > 100)) ||
    (groupSize && (typeof groupSize !== 'string' || groupSize.length > 100)) ||
    (whenToUse && (typeof whenToUse !== 'string' || whenToUse.length > 5000)) ||
    (steps && (typeof steps !== 'string' || steps.length > 10000)) ||
    (materials && (typeof materials !== 'string' || materials.length > 2000)) ||
    (tips && (typeof tips !== 'string' || tips.length > 2000)) ||
    (tags && (typeof tags !== 'string' || tags.length > 500))
  ) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  // Validate email format
  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  try {
    const supabase = createClient()
    const { error } = await supabase.from('workshop_suggestions').insert({
      suggester_name: name.trim(),
      suggester_email: email.trim().toLowerCase(),
      workshop_name: workshopName.trim(),
      description: description.trim(),
      category: category?.trim() || null,
      duration: duration?.trim() || null,
      group_size: groupSize?.trim() || null,
      when_to_use: whenToUse?.trim() || null,
      steps: steps?.trim() || null,
      materials: materials?.trim() || null,
      tips: tips?.trim() || null,
      tags: tags?.trim() || null,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to save suggestion' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Suggest route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
