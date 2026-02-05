import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 5151;

const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
  : [];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["POST"],
  })
);

app.use(express.json());

app.post("/proxy/:collection", async (req, res) => {
  try {
    const collectionName = req.params.collection;
    const targetUrl = `${process.env.PROXY_TARGET_URL}/${collectionName}`;
    const webstudioData = req.body;
    console.log("📥 Received from Webstudio:", webstudioData);
    console.log(`🔀 Proxying request to collection: "${collectionName}"`);
    console.log(`🔗 Target URL: ${targetUrl}`);
    const strapiPayload = {
      data: webstudioData,
    };
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strapiPayload),
    });
    const responseData = await response.json();
    if (!response.ok) {
      console.error("❌ Strapi Error:", responseData);
      return res.status(response.status).json({
        error: responseData.error || "Failed to submit to Strapi",
      });
    }
    console.log("✅ Success from Strapi. documentId: ", responseData?.data['documentId']);
    res.status(200).json({ success: true, data: responseData });
  } catch (error) {
    console.error("❌ Network/Server Error:", error.message);
    res.status(500).json({ error: "Internal Proxy Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running at http://localhost:${PORT}`);
  console.log(`🔗 Proxying to: ${process.env.PROXY_TARGET_URL}`);
});
