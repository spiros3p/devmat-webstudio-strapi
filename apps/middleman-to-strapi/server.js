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

app.post("/proxy/submit-contact-form", async (req, res) => {
  try {
    const webstudioData = req.body;
    const targetUrl = process.env.PROXY_TARGET_URL;
    console.log("📥 Received from Webstudio:", webstudioData);
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
    console.log("✅ Success from Strapi:", responseData);
    res.status(200).json({ success: true, data: responseData });
  } catch (error) {
    console.error("❌ Network/Server Error:", error.message);
    res.status(500).json({ error: "Internal Proxy Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running at http://localhost:${PORT}`);
  console.log('Available endpoints: \n- /proxy/submit-contact-form');
  console.log(`🔗 Proxying to: ${process.env.PROXY_TARGET_URL}`);
});
