export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "No URL provided" });
  }

  // Dummy analysis – you can replace with real logic later
  const result = {
    hookScore: Math.floor(Math.random() * 100),
    retentionScore: Math.floor(Math.random() * 100),
    analyzedUrl: url,
  };

  return res.status(200).json(result);
}
