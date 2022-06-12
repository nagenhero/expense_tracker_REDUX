import "dotenv/config";

import express from 'express';
import path from "path";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json())

import cors from 'cors'
app.use(cors())

//db connection
import createConnection from "./src/config/dbConfig.js";
createConnection();
//path dorectory
const __dirname =path.resolve();
app.use(express.static(path.resolve(__dirname,"./client/build"))); 



//load middlewares
import userRouter from './src/routers/userRouter.js';
import transactionRouter from './src/routers/transactionRouter.js';
app.use("/api/v1/users", userRouter);
app.use("/api/v1/transactions", transactionRouter);



//for frontend static content
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname,"./client/build","index.html"));
})


app.listen(PORT, (error) => {
    error && console.log(error);

    console.log(`server is running on port http://localhost:${PORT}`);
})