import express from "express";
import { route } from "./route.js";
const port = 3000;
const app = express()
app.use('/',route)
app.listen(port,() => console.log("listen ",port))