const express = require('express');

const cors = require('cors');
const config = require('./config/index')
const app = express();
const routes = require('./routes')


app.use(cors());
require('./config/mongoose')();

app.use(routes);

app.listen(config.PORT, () => console.log(`Server is running on port: ${config.PORT}...`));