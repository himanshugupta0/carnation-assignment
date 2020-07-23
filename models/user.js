'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    imageName: {
        type: String,
        required: false
    }
});

// UserSchema.plugin(require('mongoose-timestamp'));
// UserSchema.plugin(require('mongoose-delete'), {
//     overrideMethods: true,
//     deletedAt: true
// });


module.exports = mongoose.model('User', UserSchema);
