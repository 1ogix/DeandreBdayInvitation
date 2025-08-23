import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!googleScriptUrl) {
    console.error("Google Script URL is not defined.");
    return res.status(500).json({ error: "Server configuration error." });
  }

  try {
    const googleRes = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!googleRes.ok) {
      const errorText = await googleRes.text();
      console.error("Google Script Error:", errorText);
      throw new Error("Failed to submit to Google Script.");
    }

    return res.status(200).json({ message: "RSVP submitted successfully!" });
  } catch (error) {
    console.error("Error submitting RSVP:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return res.status(500).json({ error: errorMessage });
  }
}
