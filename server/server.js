import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./helpers/dbConn.js";
import bodyParser from "body-parser";

await connectDB();
const app = express();
const origin = process.env.ORIGIN;
app.use(cors(
    {
        origin: origin
    }
));
app.use(express.json());
app.use(bodyParser.json({ limit: "10mb" }));


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
 