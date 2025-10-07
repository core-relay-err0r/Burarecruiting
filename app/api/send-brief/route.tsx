import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { jobDescription, email, fullName, companyName, phone } = await request.json()

    // Send email to your company email
    const { data, error } = await resend.emails.send({
      from: "Burarecruiting <onboarding@resend.dev>", // Replace with your verified domain
      to: ["info@burakornpartners.com"], // Your company email
      subject: `New CV Request from ${companyName}`,
      html: `
        <h2>New CV Delivery Request</h2>
        <p><strong>From:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Job Description:</h3>
        <p style="white-space: pre-wrap;">${jobDescription}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
