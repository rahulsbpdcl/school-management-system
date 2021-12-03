//a user can be a staff or an administartor or parent, will have a role and credentials which will allow us to dynamically modify the interface and also applu authorization at back-end
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    role: { type: String, required: true, enum: ['admin', 'employee', 'student', 'parent']},
    status: { type: String, required: true, enum: ['active', 'inactive'], default: 'active'}
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);