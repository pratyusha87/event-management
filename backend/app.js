import express from "express";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

export default app;

// Global Error Handling Middleware (must be defined after all other app.use and routes)
app.use((err, req, res, next) => {
  console.error("Unhandled Backend Error:", err.stack); // Log the full error stack for debugging
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    // In production, you might not want to send err.stack to the client
  });
});
