import dotenv from "dotenv";
import app from "./Express/index.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
    }

    console.log(`Server Live at: http://127.0.0.1:${PORT}`);
});
