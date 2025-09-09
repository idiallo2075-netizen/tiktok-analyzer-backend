// api/upload.js

export default async function handler(req, res) {
  // ✅ Allow Webflow (or all domains)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ✅ Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST is allowed" });
  }

  try {
    // Get uploaded file from form-data
    // Right now, we just return dummy scores for testing
    const hookScore = Math.floor(Math.random() * 100);
    const retentionScore = Math.floor(Math.random() * 100);

    // 🔹 Add a second retention score (different calculation)
    const retentionScore2 = Math.min(
      100,
      Math.max(0, retentionScore + (Math.floor(Math.random() * 21) - 10)) // ±10 variation
    );

    return res.status(200).json({ hookScore, retentionScore, retentionScore2 });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Upload failed" });
  }
}
