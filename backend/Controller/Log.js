export const getAllLogs = async (req, res) => {
    res.send({ success: true });
};

export const createNewLog = async (req, res) => {
    const { desc, startTime, endTime } = req.body;

    res.send({ success: true });
};
