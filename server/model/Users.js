const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    reEnterPassword: {
        type: String,
        required: true,
        minlength: 6,
        validate: {
            validator: function(value) {
                // `this` refers to the current document
                return value === this.password;
            },
            message: 'Passwords do not match'
        }
    }
});

// Optionally, you can remove reEnterPassword before saving to DB
userSchema.pre('save', function(next) {
    this.reEnterPassword = undefined;
    next();
});

module.exports = mongoose.model('User', userSchema);