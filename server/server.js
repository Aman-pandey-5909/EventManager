import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();
const origins = ["http://localhost:3000"];

app.use(cors({ origin: origins }));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`);
});
