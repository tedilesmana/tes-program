const Course = require('../models/course');
var fs = require("fs-extra");
const path = require('path');

exports.tambahCourse = async (req, res) => {
    console.log(req.files);
    console.log(req.body);
    if (req.files) {
        let img = req.files.file;
        let path = "./public/image/" + img.name;

        img.mv(path, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    const courses = new Course(req.body)
    const status = await courses.save()
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
}

exports.getdata = async (req, res) => {
    const status = await Course.find()
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
}