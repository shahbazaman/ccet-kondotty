import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET - Fetch all jobs (public can see active jobs only)
export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("ccet");
    
    const jobs = await db.collection("jobs").find({}).sort({ postedDate: -1 }).toArray();
    
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}

// POST - Create new job (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const client = await clientPromise;
    const db = client.db("ccet");
    
    const newJob = {
      ...body,
      postedDate: new Date().toISOString(),
      isActive: true,
    };
    
    const result = await db.collection("jobs").insertOne(newJob);
    
    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Failed to create job:", error);
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}

// PUT - Update job
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { _id, ...updateData } = body;
    
    const client = await clientPromise;
    const db = client.db("ccet");
    
    await db.collection("jobs").updateOne(
      { _id: new ObjectId(_id) },
      { $set: updateData }
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update job:", error);
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
  }
}

// DELETE - Delete job
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json({ error: "Job ID required" }, { status: 400 });
    }
    
    const client = await clientPromise;
    const db = client.db("ccet");
    
    await db.collection("jobs").deleteOne({ _id: new ObjectId(id) });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete job:", error);
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}