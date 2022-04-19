import { Router } from "express";

// Middleware
import bodyRequired from "../Middleware/bodyRequired.js";

// Controllers
import { getAllLogs, createNewLog, deleteLog } from "../../Controller/Log.js";

const logs = Router();

/**
 * @method GET
 * @listens /api/v1/logs/
 * @description Get All Logs
 */
logs.get("/", getAllLogs);

/**
 * @method POST
 * @listens /api/v1/logs/
 * @description POST/Create a Log
 */
logs.post("/", bodyRequired, createNewLog);

/**
 * @method DELETE
 * @listens /api/v1/logs/:id
 * @description Delete a Log
 */
logs.delete("/:id", deleteLog);

export default logs;
