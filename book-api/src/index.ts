import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./books/router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// Configure app using defined book router
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/books", router);

//Activate server on port defined in .env file
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});