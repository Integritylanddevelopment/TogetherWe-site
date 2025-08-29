import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "../../../lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const { email, source = "homepage" } = await request.json()

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Insert into Supabase database
    const { data, error } = await supabase
      .from('beta_signups')
      .insert([
        {
          email: email.toLowerCase().trim(),
          source: source,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      
      // Handle duplicate email error
      if (error.code === '23505' || error.message?.includes('duplicate')) {
        return NextResponse.json({ 
          error: "This email is already registered for beta access!" 
        }, { status: 409 })
      }
      
      return NextResponse.json({ error: "Failed to sign up" }, { status: 500 })
    }

    console.log("Beta signup successful:", data)
    return NextResponse.json({ 
      success: true, 
      message: "Successfully signed up for beta! We'll be in touch soon." 
    })

  } catch (error) {
    console.error("Beta signup error:", error)
    return NextResponse.json({ error: "Failed to sign up" }, { status: 500 })
  }
}
