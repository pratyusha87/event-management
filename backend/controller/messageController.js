import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res, next) => { // Add 'next' parameter
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
    console.log("Received message data:", { name, email, subject, message }); // Log incoming data

    await Message.create({ name, email, subject, message });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      const errorMessage = validationErrors.join(" ");
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    console.error("Error in sendMessage:", error); // Log the actual error for debugging before passing
    next(error); // Pass the error to the global error handling middleware
  }
};
