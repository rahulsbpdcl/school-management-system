const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    assignmentId: {type: String, required: true, unique: true },
    //course
    questions: { type: [{
        questionText: {type: String, required: true},
        questionType: {type: String, required: true, enum: ['mcq', 'mtq', 'text']},//mtq: mutiple tick(multiple correct)
        maxCredit: Number,
    }], required: true},
    createdBy: {type: String},
    updatedBy: {type: String}

}, {timestamps: true});

module.exports = mongoose.model('Assignment', assignmentSchema);