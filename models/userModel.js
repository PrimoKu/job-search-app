const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please add user name"],
        },
        email: {
            type: String,
            required: [true, "Please add email address"],
            unique: [true, "Email address already taken"],
        },
        password: {
            type: String,
            required: [true, "Please add user password"],
        },
        role: {
            type: String,
            required: [true, "Please add role"],
        },
        favorites: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Job"
            }
        ]
    }, 
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);