import express from "express";
import dotenv from "dotenv"
import router from "./Routes/travels.routes.js";
dotenv.config()

const app = express();
app.use(express.json())
app.use(router)


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})