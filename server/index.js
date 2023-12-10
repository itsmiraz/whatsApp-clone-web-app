import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const server = app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
