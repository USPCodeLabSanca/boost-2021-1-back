const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose')

mongoose.connect(process.env.db, { useUnifiedTopology: true, useNewUrlParser: true })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoute = require('./routes/user')
const authRoute = require('./routes/login')
app.use(userRoute)
app.use(authRoute)
port = process.env.PORT;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});