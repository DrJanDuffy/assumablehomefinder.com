import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email using a service like Resend, SendGrid, etc.
    // 2. Save to CRM like Follow Up Boss
    // 3. Save to database
    // For now, just log it
    console.log('Contact form submission:', body)

    // TODO: Replace with actual email/CRM integration
    // Example:
    // await sendEmail({
    //   to: 'DrJanDuffy@bhhsnv.com',
    //   subject: `New Lead: ${body.name}`,
    //   body: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message}`,
    // })

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
