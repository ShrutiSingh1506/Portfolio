import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // smtp.office365.com
  port: Number(process.env.SMTP_PORT || 587),
  secure: false, // MUST be false for 587 (STARTTLS)
  auth: {
    user: process.env.SMTP_USER, // your hotmail/outlook
    pass: process.env.SMTP_PASS,
  },
});

const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px;">
      <h2 style="color: #046a38;">New message from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #046a38; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Reply to this email to respond to the sender.</p>
    </div>
  </div>
`;

export async function POST(request) {
  try {
    const payload = await request.json();
    const name = (payload?.name || "").trim();
    const email = (payload?.email || "").trim();
    const userMessage = (payload?.message || "").trim();

    if (!name || !email || !userMessage) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic env validation
    const required = ["EMAIL_TO", "SMTP_HOST", "SMTP_USER", "SMTP_PASS"];
    const missing = required.filter((k) => !process.env[k]);
    if (missing.length) {
      return NextResponse.json(
        { success: false, message: `Missing env vars: ${missing.join(", ")}` },
        { status: 500 }
      );
    }

    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO, // shruti.singh1506@hotmail.com
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${userMessage}\n`,
      html: generateEmailTemplate(name, email, userMessage),
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred." },
      { status: 500 }
    );
  }
}
