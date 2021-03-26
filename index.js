const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

port = process.env.PORT;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});