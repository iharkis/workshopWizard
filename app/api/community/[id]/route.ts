import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const email = new URL(req.url).searchParams.get('email')

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 })
  }

  try {
    const supabase = createClient()

    // Fetch the row first to verify the email matches
    const { data, error: fetchError } = await supabase
      .from('workshop_suggestions')
      .select('suggester_email')
      .eq('id', id)
      .single()

    if (fetchError || !data) {
      return NextResponse.json({ error: 'Workshop not found' }, { status: 404 })
    }

    if (data.suggester_email.toLowerCase() !== email.trim().toLowerCase()) {
      return NextResponse.json({ error: 'Email does not match' }, { status: 403 })
    }

    const { error: deleteError } = await supabase
      .from('workshop_suggestions')
      .update({ hidden: true })
      .eq('id', id)

    if (deleteError) {
      console.error('Supabase update error:', deleteError)
      return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Delete route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
