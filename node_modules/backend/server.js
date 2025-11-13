const http = require("http");
const path = require("path");
const fs = require("fs");

const connectDB = require("./config/db");
const createApp = require("./app");

const localEnvPath = path.join(__dirname, ".env");
if (fs.existsSync(localEnvPath)) {
  require("dotenv").config({ path: localEnvPath });
} else {
  require("dotenv").config();
}

const app = createApp();
const server = http.createServer(app);

const { Server } = require("socket.io");
const socketService = require("./services/socket/socketService");

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

socketService.initialize(io);

const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database connected successfully");

    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📡 Socket.IO initialized`);
      console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
      console.log(`🔗 API base: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

