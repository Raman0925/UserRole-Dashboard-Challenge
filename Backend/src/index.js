const express = require("express");
const { PORT } = require("./config/serverConfig");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const { AuthRoutes, DashboardRoutes } = require("./routes/v1/index");
const db = require("./config/dbconfig.js");
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,  
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/auth", AuthRoutes);
app.use("/dashboard", DashboardRoutes);

const startServer = async () => {
  try {
    await db.connect(process.env.DB_URI);
    await app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

startServer();
