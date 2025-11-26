import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import crypto from "crypto";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!audienceId) {
      return NextResponse.json(
        { error: "Mailchimp configuration missing" },
        { status: 500 }
      );
    }

    // Split name into first and last name
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Create subscriber hash (MD5 of lowercase email)
    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    // Try to add or update the subscriber
    try {
      const response = await mailchimp.lists.setListMember(
        audienceId,
        subscriberHash,
        {
          email_address: email,
          status_if_new: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
          tags: ["mt-early-interest"],
        }
      );

      return NextResponse.json(
        { success: true, message: "Successfully subscribed!" },
        { status: 200 }
      );
    } catch (mailchimpError: any) {
      console.error("Mailchimp error:", mailchimpError);

      // Handle specific Mailchimp errors
      if (mailchimpError.status === 400) {
        return NextResponse.json(
          { error: "Invalid email address or already subscribed" },
          { status: 400 }
        );
      }

      throw mailchimpError;
    }
  } catch (error: any) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
