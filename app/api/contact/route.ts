import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Resend, or AWS SES
    // 2. Store the contact request in a database
    // 3. Send a confirmation email to the user

    // For now, we'll just log it and return success
    console.log("Contact form submission:", { name, email, message })

    return NextResponse.json(
      {
        message: "Thank you for your message! We'll get back to you soon.",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ message: "Something went wrong. Please try again later." }, { status: 500 })
  }
}
