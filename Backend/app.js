const express = require("express");
const cors = require("cors");

const createApp = () => {
  const app = express();

  const configuredOrigins = (process.env.FRONTEND_URL || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  const derivedVercelOrigins = [
    process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
    process.env.VERCEL_BRANCH_URL && `https://${process.env.VERCEL_BRANCH_URL}`,
  ].filter(Boolean);

  const devFallbackOrigins =
    process.env.NODE_ENV !== "production" ? ["http://localhost:5173"] : [];

  const uniqueOrigins = Array.from(
    new Set([...configuredOrigins, ...derivedVercelOrigins, ...devFallbackOrigins])
  );

  const corsOptions = {
    origin: uniqueOrigins.length ? uniqueOrigins : true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };

  app.use(cors(corsOptions));
  app.options("*", cors(corsOptions));

  app.use(express.json());

  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
    });
  });

  app.use("/api/auth", require("./routes/authRoutes"));
  app.use("/api/drivers", require("./routes/driverRoutes"));
  app.use("/api/buses", require("./routes/busRoutes"));
  app.use("/api/routes", require("./routes/routeRoutes"));
  app.use("/api/notifications", require("./routes/notificationRoutes"));

  app.use((req, res) => {
    res.status(404).json({
      message: "Resource not found",
    });
  });

  app.use((err, req, res, _next) => {
    console.error("Unhandled error:", err);
    res.status(err.status || 500).json({
      message: err.message || "Internal server error",
    });
  });

  return app;
};

module.exports = createApp;


