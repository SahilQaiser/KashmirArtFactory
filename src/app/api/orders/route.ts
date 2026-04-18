import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, product_type, description } = body;

    if (!name || !email || !product_type || !description) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { env } = getRequestContext();
    await env.DB.prepare(
      "INSERT INTO custom_orders (id, name, email, phone, product_type, description) VALUES (?, ?, ?, ?, ?, ?)"
    )
      .bind(crypto.randomUUID(), name, email, phone || null, product_type, description)
      .run();

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Order submission error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
