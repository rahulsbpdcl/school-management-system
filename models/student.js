const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    middleName: {type: String },
    lastName: {type: String, required: true},
    dob: {type: Date, required: true},//date of birth
    doa: {type: Date, required: true},//date of admission
    gender: {type: String, required: true, enum: ['M', 'F', 'O']},
    bloodGroup: {type: String, required: true, enum: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']},
    contact: {type: String, unique: true},
    email: {type: String, unique: true},
    addresses: { type: [{
        houseNo: {type: String, required: true},
        locality: { type: String, required: true},
        landmark: { type: String, required: true},
        city: {type: String, required: true},
        state: { type: String, required: true },
        country: {type: String, required: true},
        latitude: { type: mongoose.Types.Decimal128 },
        longitude: { type: mongoose.Types.Decimal128 },
        address_type: { type: String }//permanent, current
    }], required: true},
    picture: {type: String, unique: true},
    parents: { type: [{
        firstName: {type: String, required: true},
        middleName: {type: String },
        lastName: {type: String, required: true},
        gender: {type: String, required: true, enum: ['M', 'F', 'O']}, 
        age: {type: String, required: true},
        contact:{type: String, required: true},
        email: {type: String },
        picture: {type: String, unique: true},
        relationWithStudent: { type: String}
    }], required: true},
    class: { type: String, required: true},
    section: { type: String, required: true },
    //assignments
    //payments
    //courses
    //messages
    createdBy: {type: String},
    updatedBy: {type: String}

}, {timestamps: true});

module.exports = mongoose.model('Student', studentSchema);