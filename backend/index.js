import dotenv from "dotenv";
import app from "./Express/index.js";
import db from "./Config/db.js";

dotenv.config();

// Sync Models with DB
db.sync()
  .then(() => {
    console.log("DB Sync Successful.");
  })
  .catch((error) => {
    console.log(`Error Occurred While DB Sync\n${error}`);
    process.exit(1);
  });

// Start Server on PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }

  console.log(`Server Live at: http://127.0.0.1:${PORT}`);
});
