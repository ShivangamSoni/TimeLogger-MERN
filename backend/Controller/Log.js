import Log from "../Models/Log.js";

export const getAllLogs = async (req, res) => {
  try {
    // Retrieving All Logs
    const logs = await Log.findAll();
    res.send({ success: true, logs });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
};

export const createNewLog = async (req, res) => {
  const { desc, startTime, endTime } = req.body;

  try {
    // Creating Model & Saving to DB
    const log = await Log.create({
      description: desc,
      startTime,
      endTime,
    });

    res.send({ success: true, data: log.dataValues.id });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
};
