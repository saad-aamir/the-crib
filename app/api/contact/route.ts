import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function formatDate(d: string) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function emailTemplate({ name, email, checkin, checkout, apartment, note }: Record<string, string>) {
  const nights = checkin && checkout
    ? Math.round((new Date(checkout).getTime() - new Date(checkin).getTime()) / 86400000)
    : null;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>New Booking Inquiry · The Crib</title>
</head>
<body style="margin:0;padding:0;background:#EDE4D3;font-family:Georgia,serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#EDE4D3;padding:48px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#1F3D2E;padding:48px 48px 36px;text-align:center;">
            <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.35em;text-transform:uppercase;color:#B8895A;">Murree Hills · Pakistan</p>
            <h1 style="margin:0;font-family:Georgia,serif;font-style:italic;font-weight:700;font-size:36px;line-height:1.1;color:#F5EFE6;letter-spacing:-0.01em;">The Crib</h1>
            <div style="width:40px;height:1px;background:#B8895A;margin:20px auto 0;"></div>
          </td>
        </tr>

        <!-- Gold bar -->
        <tr><td style="background:#B8895A;height:3px;"></td></tr>

        <!-- Eyebrow -->
        <tr>
          <td style="background:#F5EFE6;padding:36px 48px 0;text-align:center;">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.32em;text-transform:uppercase;color:#B8895A;">New Booking Inquiry</p>
            <h2 style="margin:12px 0 0;font-family:Georgia,serif;font-style:italic;font-weight:700;font-size:28px;color:#1F3D2E;">A guest would like to stay.</h2>
          </td>
        </tr>

        <!-- Guest intro -->
        <tr>
          <td style="background:#F5EFE6;padding:20px 48px 32px;">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;line-height:1.7;color:#2B4A39;">
              <strong>${name}</strong> has submitted an inquiry through the website. Their details are below — reply to this email to reach them directly.
            </p>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="background:#F5EFE6;padding:0 48px;"><div style="height:1px;background:#EDE4D3;"></div></td></tr>

        <!-- Details -->
        <tr>
          <td style="background:#F5EFE6;padding:32px 48px;">

            <!-- Row: Name -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
              <tr>
                <td width="130" style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#B8895A;padding-top:3px;">Guest</td>
                <td style="font-family:Georgia,serif;font-size:17px;color:#1F3D2E;font-style:italic;">${name}</td>
              </tr>
            </table>

            <!-- Row: Email -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
              <tr>
                <td width="130" style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#B8895A;padding-top:3px;">Email</td>
                <td style="font-family:Arial,sans-serif;font-size:14px;color:#1F3D2E;"><a href="mailto:${email}" style="color:#1F3D2E;text-decoration:underline;">${email}</a></td>
              </tr>
            </table>

            <!-- Divider -->
            <div style="height:1px;background:#EDE4D3;margin-bottom:20px;"></div>

            <!-- Row: Check-in / Check-out -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
              <tr>
                <td width="50%" style="padding-right:12px;">
                  <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#B8895A;">Check-in</p>
                  <p style="margin:0;font-family:Georgia,serif;font-size:17px;color:#1F3D2E;font-style:italic;">${formatDate(checkin)}</p>
                </td>
                <td width="50%">
                  <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#B8895A;">Check-out</p>
                  <p style="margin:0;font-family:Georgia,serif;font-size:17px;color:#1F3D2E;font-style:italic;">${formatDate(checkout)}</p>
                </td>
              </tr>
            </table>

            ${nights !== null ? `
            <!-- Nights badge -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
              <tr>
                <td width="130" style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#B8895A;padding-top:3px;">Duration</td>
                <td>
                  <span style="display:inline-block;background:#1F3D2E;color:#F5EFE6;font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;padding:5px 14px;">${nights} night${nights !== 1 ? "s" : ""}</span>
                </td>
              </tr>
            </table>
            ` : ""}

            <!-- Divider -->
            <div style="height:1px;background:#EDE4D3;margin-bottom:20px;"></div>

            <!-- Row: Apartment -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
              <tr>
                <td width="130" style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#B8895A;padding-top:3px;">Apartment</td>
                <td style="font-family:Georgia,serif;font-size:17px;color:#1F3D2E;font-style:italic;">${apartment || "Not specified"}</td>
              </tr>
            </table>

            ${note ? `
            <!-- Divider -->
            <div style="height:1px;background:#EDE4D3;margin-bottom:24px;"></div>

            <!-- Note -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#B8895A;">Guest note</p>
                  <div style="border-left:2px solid #B8895A;padding:14px 20px;background:#EDE4D3;">
                    <p style="margin:0;font-family:Georgia,serif;font-style:italic;font-size:15px;line-height:1.7;color:#1F3D2E;">${note}</p>
                  </div>
                </td>
              </tr>
            </table>
            ` : ""}

          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#F5EFE6;padding:0 48px 40px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background:#1F3D2E;color:#F5EFE6;font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.28em;text-transform:uppercase;padding:16px 36px;text-decoration:none;">Reply to ${name} →</a>
          </td>
        </tr>

        <!-- Gold bar -->
        <tr><td style="background:#B8895A;height:2px;"></td></tr>

        <!-- Footer -->
        <tr>
          <td style="background:#1F3D2E;padding:32px 48px;text-align:center;">
            <p style="margin:0 0 8px;font-family:Georgia,serif;font-style:italic;font-size:16px;color:#F5EFE6;opacity:0.9;">The Crib · Murree Hills</p>
            <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#B8895A;letter-spacing:0.1em;">+92 306 544 0665 &nbsp;·&nbsp; thecribmurree@gmail.com</p>
            <p style="margin:12px 0 0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#F5EFE6;opacity:0.35;">Made slowly, in the pines</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const { name, email, checkin, checkout, apartment, note } = await req.json();

  if (!name || !email || !checkin || !checkout) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"The Crib · Murree Hills" <${process.env.SMTP_USER}>`,
    to: "thecribmurree@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name} · The Crib`,
    html: emailTemplate({ name, email, checkin, checkout, apartment: apartment || "", note: note || "" }),
  });

  return NextResponse.json({ ok: true });
}
