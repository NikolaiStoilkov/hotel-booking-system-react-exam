const express = require('express');

const cookieParser = require('cookie-parser')
const cors = require('cors');
const config = require('./config/index')
const app = express();
const routes = require('./routes')

app.use(cors());
require('./config/mongoose')();

app.use(cookieParser());
app.use(express.json())
app.use(routes);

app.listen(config.PORT, () => console.log(`Server is running on port: ${config.PORT}...`));