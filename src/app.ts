import express from "express";
import dotenv from "dotenv";
import studentRouter from "./routes/studentRouter";
import teacherRouter from "./routes/teacherRouter";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
import cookieparser from 'cookie-parser'
import swaggerJsdoc  from 'swagger-jsdoc';
import swaggerUi  from 'swagger-ui-express';
import authRouter from "./routes/authRouter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieparser());

connectDB();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/student", studentRouter);


// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
