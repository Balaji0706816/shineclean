import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:I",
    });

    const rows = response.data.values || [];

    const bookings = rows.slice(1).map((row) => ({
      submitted: row[0] || "-",
      name: row[1] || "-",
      email: row[2] || "-",
      phone: row[3] || "-",
      service: row[4] || "-",
      date: row[5] || "-",
      propertySize: row[6] || "-",
      message: row[7] || "-",
      status: row[8] || "New",
    }));

    return NextResponse.json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error("Admin bookings error:", error);

    return NextResponse.json(
      { success: false, bookings: [] },
      { status: 500 }
    );
  }
}