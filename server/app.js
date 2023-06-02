const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/router');
const userRouter = require("./routes/userRouter");
const dbConncetions = require("./dbConnections") // here we are including our DB 

app.use(express.json());

app.use('/route',router)

app.use("/user",userRouter);

app.listen(port, () => {
    console.clear();
    console.log(`Server started on port ${port}!`)
});