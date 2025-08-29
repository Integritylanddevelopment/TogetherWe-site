import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, source = "homepage" } = await request.json()

    // TODO: Connect to Supabase to store beta signups
    // For now, just log the signup
    console.log("Beta signup:", { email, source, timestamp: new Date().toISOString() })

    // Here you would typically:
    // 1. Insert into Supabase database
    // 2. Send welcome email
    // 3. Add to mailing list

    return NextResponse.json({ success: true, message: "Successfully signed up for beta!" })
  } catch (error) {
    console.error("Beta signup error:", error)
    return NextResponse.json({ error: "Failed to sign up" }, { status: 500 })
  }
}
