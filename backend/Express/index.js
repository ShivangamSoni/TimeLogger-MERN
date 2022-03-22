import express from "express";

import cors from "cors";

// Routes
import LogsRouter from "./Routes/Log.js";

const app = express();

app.use(express.json());
app.use(cors());

/**
 * @name LogsRouter
 * @listens /api/v1/logs
 * @description Handles Logs Related API Calls
 */
app.use("/api/v1/logs/", LogsRouter);

export default app;
