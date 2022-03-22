const bodyRequired = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({ success: false, error: "Invalid Request" });
        return;
    }

    next();
};

export default bodyRequired;
