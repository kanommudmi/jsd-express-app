import express from "express";
import {router as apiRouters} from "./routes/index.js"

export const app = express();

app.use(express.json());

app.use("/api", apiRouters)