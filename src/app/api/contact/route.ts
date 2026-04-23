import { NextResponse } from "next/server";
import transporter from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, course, type } = body;

    const isAdmission = type === "admission_inquiry";
    const emailSubject = isAdmission
      ? `🎓 New Admission Enquiry – ${name} | CCET Kondotty`
      : `📩 Website Contact Form – ${subject || name} | CCET Kondotty`;

    const html = `
      <div style="font-family:sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:12px; overflow:hidden;">
        <div style="background:#1a3a6b; color:white; padding:24px; text-align:center;">
          <h2 style="margin:0">CCET Kondotty</h2>
          <p style="margin:4px 0; font-size:13px; color:#bdd3f7">${isAdmission ? "New Admission Enquiry" : "Website Contact Message"}</p>
        </div>
        <div style="padding:24px;">
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:8px; color:#555; font-size:13px; width:140px"><strong>Name</strong></td><td style="padding:8px; font-size:13px">${name}</td></tr>
            ${email ? `<tr><td style="padding:8px; color:#555; font-size:13px"><strong>Email</strong></td><td style="padding:8px; font-size:13px">${email}</td></tr>` : ""}
            ${phone ? `<tr><td style="padding:8px; color:#555; font-size:13px"><strong>Phone</strong></td><td style="padding:8px; font-size:13px">${phone}</td></tr>` : ""}
            ${course ? `<tr><td style="padding:8px; color:#555; font-size:13px"><strong>Course</strong></td><td style="padding:8px; font-size:13px">${course}</td></tr>` : ""}
            ${subject ? `<tr><td style="padding:8px; color:#555; font-size:13px"><strong>Subject</strong></td><td style="padding:8px; font-size:13px">${subject}</td></tr>` : ""}
          </table>
          ${message ? `<div style="margin-top:16px; padding:16px; background:#f8fafc; border-radius:8px; font-size:13px; color:#374151;"><strong>Message:</strong><br/><br/>${message}</div>` : ""}
        </div>
        <div style="background:#f8fafc; padding:16px; text-align:center; font-size:11px; color:#9ca3af;">
          Sent from CCET Kondotty Website | coopcollegekondotty@gmail.com
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"CCET Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: emailSubject,
      html,
      replyTo: email || process.env.EMAIL_USER,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}