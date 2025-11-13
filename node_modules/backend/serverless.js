const fs = require("fs");
const path = require("path");
const connectDB = require("./config/db");
const createApp = require("./app");

const ensureEnvLoaded = () => {
  if (ensureEnvLoaded.initialised) {
    return;
  }

  const localEnvPath = path.join(__dirname, ".env");
  if (fs.existsSync(localEnvPath)) {
    require("dotenv").config({ path: localEnvPath });
  } else {
    require("dotenv").config();
  }

  ensureEnvLoaded.initialised = true;
};

ensureEnvLoaded.initialised = false;
ensureEnvLoaded();

const app = createApp();

module.exports = async (req, res) => {
  await connectDB();
  return app(req, res);
};

module.exports.config = {
  api: {
    bodyParser: false,
  },
};


