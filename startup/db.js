const mongoose = require("mongoose");


module.exports = function () {
    const dbUrl = 'mongodb://localhost:27017/demo'
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to database'))
        .catch(err => console.error('Error in connection' + err));
}
