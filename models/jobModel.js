const mongoose = require('mongoose');

const jobSchema = mongoose.Schema(
    {   
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        job_title: {
            type: String,
            required: [true, "Please add job title"],
        },
        job_description: {
            type: String,
            required: [true, "Please add job description"],
        },
        company: {
            type: String,
            required: [true, "Please add company"],
        },
        location: {
            type: Number,
            required: [true, "Please add location"],
        },
        job_type: {
            type: Number,
            required: [true, "Please add job type"],
        },
        salary: {
            type: Number,
            min: 1,
            required: [true, "Please add salary"],
        },
    }, 
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Job", jobSchema);