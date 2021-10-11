const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    assignmentId: {type: String, required: true, unique: true },
    //course
    assignmentType: { type: String, required: true, enum: ['online', 'docupload', 'manual']},
    assignmentQuestionPaper: {type: String },//in case assignmentType is docupload
    questions: { type: [{
        questionText: {type: String, required: true},
        questionType: {type: String, required: true, enum: ['mcq', 'mtq', 'text']},//mtq: mutiple tick(multiple correct)
        //answer is supposed to be concatinated for eg. if correct answers are A, C, D the we save ACD for mcq and mtq type questions then we check correctness by substring functions
        correctAnswers: {type: String, required: true, default: ''},
        negativeMarkingAllowed: { type: Boolean, required: true, default: false},
        negativeMark: { type: Number, required: true, default: 0 },
        maxPoint: { type : Number, required: true }
    }]},
    expiresOn:{type: Date},
    createdBy: {type: String},
    updatedBy: {type: String}

}, {timestamps: true});

module.exports = mongoose.model('Assignment', assignmentSchema);