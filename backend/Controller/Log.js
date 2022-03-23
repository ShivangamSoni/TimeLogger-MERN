import formatDate from "./Utils/formatDate.js";
import Log from "../Models/Log.js";

// UUID
import { v4 as uuid } from "uuid";

export const getAllLogs = async (req, res) => {
    try {
        const [logs, _] = await Log.findAll();
        res.send({ success: true, logs });
    } catch (error) {
        res.status(500).send({ success: false, error: "Server Error" });
    }
};

export const createNewLog = async (req, res) => {
    const { desc, startTime, endTime } = req.body;

    // Creating Log Model
    const log = new Log(uuid(), desc, formatDate(startTime), formatDate(endTime));

    try {
        // Saving to DB
        const [queryData, _] = await log.save();

        res.send({ success: true, data: queryData.insertId });
    } catch (error) {
        res.status(500).send({ success: false, error: "Server Error" });
    }
};
