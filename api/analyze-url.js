// api/analyze-url.js

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
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "No URL provided" });
    }

    // For now, return dummy values (you can later replace with real analysis logic)
    const hookScore = Math.floor(Math.random() * 100);
    const retentionScore = Math.floor(Math.random() * 100);

    return res.status(200).json({ hookScore, retentionScore });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Analysis failed" });
  }
}
