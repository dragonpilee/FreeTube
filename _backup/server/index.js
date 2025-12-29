import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// DEBUG: Log all requests
app.use((req, res, next) => {
    console.log(`[Request] ${req.method} ${req.url}`);
    next();
});

// DEBUG: Check if dist exists
import fs from "fs";
try {
    const distPath = path.join(__dirname, "../dist");
    console.log("Checking dist path:", distPath);
    console.log("Dist contents:", fs.readdirSync(distPath));
} catch (err) {
    console.error("Error reading dist:", err);
}

// Serve static files from the build directory FIRST
app.use(express.static(path.join(__dirname, "../dist")));

// Proxy API requests
app.use(
    "/api",
    createProxyMiddleware({
        target: "https://youtube-v31.p.rapidapi.com",
        changeOrigin: true,
        // Note: Express strips '/api' from the URL before passing to middleware
        // So /api/search becomes /search. No rewrite needed usually,
        // but we ensure clean forwarding.
        onProxyReq: (proxyReq) => {
            // Add the API Key header to the request
            if (process.env.RAPID_API_KEY) {
                proxyReq.setHeader("X-RapidAPI-Key", process.env.RAPID_API_KEY);
                proxyReq.setHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");
            }
        },
    })
);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
