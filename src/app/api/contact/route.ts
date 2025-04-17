import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "../../../lib/supabaseClient";

export async function POST(request: Request) {
  try {
    // Parse request body as JSON
    const { name, email, subject, message } = await request.json();

    // Insert into Supabase
    const { data, error } = await supabase
      .from("contact-form")
      .insert([{ name, email, subject, message }]);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Configure nodemailer transporter (example using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New contact form submission: ${subject}`,
      text: `You received a new message from ${name} (${email}):\n\n${message}`,
    };

    // Wrap sendMail in a Promise so we await it properly
    await new Promise<void>((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Email send error:", err);
          reject(err);
        } else {
          console.log("Email sent:", info.response);
          resolve();
        }
      });
    });

    return NextResponse.json(
      { message: "Contact information saved and notification sent!", data },
      { status: 200 }
    );
    
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("General error:", err);
      return NextResponse.json({ error: err.message || "An error occurred" }, { status: 500 });
    }
    console.error("Unknown error:", err);
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}