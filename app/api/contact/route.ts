import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      phone: phone || null,
      subject: subject || "Website enquiry",
      message,
    });

    if (error) {
      return NextResponse.json({ error: "Unable to record contact message" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Contact message recorded" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process contact submission" }, { status: 500 });
  }
}
