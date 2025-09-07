export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  // In a real app, you'd handle file uploads (e.g., to Cloudinary/S3)
  // For now, just return a success response
  return res.status(200).json({
    message: "File upload endpoint is working!",
    status: "ok",
  });
}
