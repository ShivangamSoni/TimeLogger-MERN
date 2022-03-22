import { Router } from "express";

const logs = Router();

logs.get("/test", (req, res) => {
    res.send({ success: true });
});

export default logs;
