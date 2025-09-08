export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST is allowed" });
  }

  // Dummy response
  res.status(200).json({ hookScore: 64, retentionScore: 91 });
}
