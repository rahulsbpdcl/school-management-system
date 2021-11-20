const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId: {type: String, required: true},
    courseName: { type: String, required: true},
    instructors: { type: [
        //refs of faculties
    ]},
    courseDuration: Number,
    assests: { type: [
         //reference of textbooks or study materials   
    ]},
    createdBy: {type: String},
    updatedBy: {type: String}

}, {timestamps: true});

module.exports = mongoose.model('Course', courseSchema);