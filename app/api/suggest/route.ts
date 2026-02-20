import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, workshopName, description, category, duration, groupSize, whenToUse, steps, materials, tips, tags } = body

  if (!name || !email || !workshopName || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
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
