import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

export async function GET() {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db();
    const contacts = await db.collection("contacts").find().toArray();

    await client.close();

    return NextResponse.json({
      contacts: contacts.map(contact => ({
        _id: contact._id.toString(),
        name: contact.name,
        email: contact.email,
        message: contact.message,
        createdAt: contact.createdAt,
      })),
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db();
    const result = await db.collection("contacts").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    await client.close();

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      id: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 });
  }
}
