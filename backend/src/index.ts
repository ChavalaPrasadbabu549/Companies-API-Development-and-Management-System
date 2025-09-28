import connectDB from "./config/db";
import dotenv from "dotenv";
import express from "express"
import cors from "cors";
import { createServer } from "http";
import companyRouter from './routes/company'

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

app.use("/company", companyRouter)

const server = createServer(app);

const PORT = process.env.PORT || 9003;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));