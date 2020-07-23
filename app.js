const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

const port = process.env.PORT || 8080;

//Adding middleware
app.use(cors());
app.use(bodyparser.json({ extended: true }));

require('./startup/route')(app);
require('./startup/db')();


app.listen(port, () => {
    console.log('Server started at port ' + port);
});
