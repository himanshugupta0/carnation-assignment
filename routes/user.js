const express = require('express');
const router = express.Router();

const User = require('../models/user');
const fileUpload = require('../services/fileUpload');


// Content-Type of this request will multipart/form-data
// fields will be first_name, last_name, email and image (file)
router.post('/save', async (req, res) => {
    try {
        // calling a file upload service which use multer to upload a file into file system
        fileUpload.localUpload(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ success: false, msg: err.message, errors: err });
            }
            if (!req.file) {
                return res.status(400).json({ success: false, msg: "No file passed", errors: err });
            }

            let user = new User(req.body);
            // saving the image file name into collection for further use
            user.imageName = req.file.filename;
            await user.save();
            res.status(200).json("Data saved...")
        })
    }
    catch (e) {
        res.status(400).json('Something went wrong...')
    }
})

module.exports = router;
