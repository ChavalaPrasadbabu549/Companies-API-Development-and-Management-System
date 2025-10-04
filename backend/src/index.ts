import connectDB from "./config/db";
import dotenv from "dotenv";
import express from "express"
import cors from "cors";
import { createServer } from "http";
import companyRouter from './routes/company'

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://yourfrontenddomain.com'];

const corsOptions = {
    origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true); // Allow requests with no origin (e.g., Postman, backend calls)
        } else {
            callback(new Error('Not allowed by CORS')); // Block disallowed origins
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/company", companyRouter)

const server = createServer(app);

const PORT = process.env.PORT || 9003;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));