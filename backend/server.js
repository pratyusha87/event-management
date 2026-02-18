import dotenv from "dotenv";
dotenv.config();

import { dbConnection } from "./database/dbConnection.js"; // Import dbConnection
import app from "./app.js";

if (!process.env.PORT) {
  console.error("Error: PORT environment variable is not defined. Please check your config.env file.");
  process.exit(1); // Exit the process if a critical environment variable is missing
}
if (!process.env.FRONTEND_URL) { // Add check for FRONTEND_URL
  console.error("Error: FRONTEND_URL environment variable is not defined. Please check your config.env file.");
  process.exit(1); // Exit the process if a critical environment variable is missing
}

// Define an async function to start the server
const startServer = async () => {
  await dbConnection(); // Ensure database connection is established before starting the server

  app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
  });
};

startServer(); // Call the async function to start the server
