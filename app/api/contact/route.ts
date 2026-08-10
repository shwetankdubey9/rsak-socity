import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Process contact submission (Logged or stored in Supabase contact_messages table)
    console.log("New Contact Form Submission:", { name, email, phone, subject, message });

    return NextResponse.json({ success: true, message: "Contact message recorded" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process contact submission" }, { status: 500 });
  }
}
