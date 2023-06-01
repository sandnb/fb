const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/router');

app.use(express.json());

app.use('/route',router)


app.listen(port, () => {
    console.clear();
    console.log(`Server started on port ${port}!`)
});