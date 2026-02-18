import mongoose from "mongoose";

export const dbConnection = async () => { // Make dbConnection an async function
  mongoose // Configure Mongoose settings
    .set('strictQuery', false) // Recommended for Mongoose 6.0+ to suppress deprecation warning
    .set('debug', true) // Enable debug mode for Mongoose to see queries in console (useful for development)
    .set('bufferCommands', false) // Disable command buffering (useful in serverless environments or for immediate connection feedback)
    .set('autoIndex', true) // Build indexes on startup (good for development, consider false in production)
    .set('autoCreate', true); // Auto-create collections for models (good for development, consider false in production)

  if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI environment variable is not defined. Please check your config.env file.");
    process.exit(1); // Exit if critical environment variable is missing
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "EVENTS_MANAGEMENT" }); // Added 'await'
    console.log("Connected to database!"); // Log success
  } catch (err) {
    console.error("Some error occurred while connecting to database:", err);
    process.exit(1); // Exit the process if database connection fails
  }
};
