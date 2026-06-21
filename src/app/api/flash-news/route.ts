import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ccet");
    const doc = await db.collection("settings").findOne({ type: "flashnews" });
    return NextResponse.json(doc || { items: [] });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch flash news" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("ccet");
    await db.collection("settings").updateOne(
      { type: "flashnews" },
      { $set: { type: "flashnews", items: body.items } },
      { upsert: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update flash news" }, { status: 500 });
  }
}
