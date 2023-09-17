const asyncHandler = require("express-async-handler");
const Job = require('../models/jobModel');
const jobRepository = require('../repositories/JobRepository');
const User = require("../models/userModel");

class JobController {

    //@des Get all jobs
    //@route GET /api/jobs
    //@access private
    getJobs = asyncHandler( async (req, res) => {
        const jobs = await jobRepository.getAll();
        res.status(200).json(jobs);
    });
    
    //@des Create new job
    //@route POST /api/jobs
    //@access private
    createJob = asyncHandler( async (req, res) => {
        const { job_title, job_description, company, location, job_type, salary } = req.body;
        let job;
        try {
            job = await Job.create({ job_title, job_description, company, location, job_type, salary, user_id: req.user.id });
            if(job) {
                res.status(201).json(job);
            } else {
                res.status(442).json({ message: "Create job failed!" });
            }
        } catch (error) {
            console.log(error);
            res.status(500);
            throw new Error("Server Error!");
        }
    });
    
    //@des Get job by if
    //@route GET /api/jobs/:id
    //@access private
    getJob = asyncHandler( async (req, res) => {
        const job = await Job.findById(req.params.id);
        try {
            if(!job) {
                res.status(404).json({ message: "Job not found!" });
            }
            res.status(200).json(job);
        } catch (error) {
            res.status(500);
            throw new Error("Server Error!");
        }
    });
    
    //@des Update job by id
    //@route PUT /api/jobs/:id
    //@access private
    updateJob = asyncHandler( async (req, res) => { 
        const job = await Job.findById(req.params.id);
        try {
            if(!job) {
                res.status(404).json({ message: "Job not found!" });
            } 
            if (job.user_id.toString() !== req.user.id) {
                res.status(403).json({ message: "User don't have permission to update other user contacts" });
            }
            const updatedJob = await Job.findByIdAndUpdate( req.params.id, req.body, { new: true });
            res.status(200).json(updatedJob);
    
        } catch (error) {
            res.status(500);
            throw new Error("Server Error!");
        }
    });
    
    //@des Delete job by id
    //@route DELETE /api/jobs/:id
    //@access private
    deleteJob = asyncHandler( async (req, res) => {
        const job = await Job.findById(req.params.id);
        try {
            if(!job) {
                res.status(404).json({ message: "Job not found!" });
            }
            if (job.user_id.toString() !== req.user.id) {
                res.status(403).json({ message: "User don't have permission to update other user contacts" });
            }
            await Job.deleteOne({ _id: req.params.id });
            res.status(200).json({message: "Job deleted!"});
            
        } catch (error) {
            res.status(500);
            throw new Error("Server Error!");
        }
    });

    //@des Add favorite job by id
    //@route PUT /api/jobs/favorite/add/:id
    //@access private
    addFavoriteJob = asyncHandler(async (req, res) => {
        const user_id = req.user.id;
        const job_id = req.params.id;

        let user = await User.findById(user_id);;
        try {
            if(!user) {
                res.status(404).json({ message: "User not found!" });
            }
            const updatedUser = await User.findByIdAndUpdate( user_id, { $push: { favorites: job_id }}, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500);
            throw new Error("Server Error!");
        }
    });

    //@des Remove favorite job by id
    //@route PUT /api/jobs/favorite/remove/:id
    //@access private
    removeFavoriteJob = asyncHandler(async (req, res) => {
        const user_id = req.user.id;
        const job_id = req.params.id;

        let user = await User.findById(user_id);;
        try {
            if(!user) {
                res.status(404).json({ message: "User not found!" });
            }
            const updatedUser = await User.findByIdAndUpdate( user_id, { $pull: { favorites: job_id }}, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500);
            throw new Error("Server Error!");
        }
    });
}

module.exports = JobController;