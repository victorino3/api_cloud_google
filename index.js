import express from "express";
import { route } from "./route.js";
import cors from "cors";
const port = process.env.PORT || 8080;
const app = express()
app.use(cors());
app.use('/',route)
app.listen(port,() => console.log("listen ",port))