const Job = require('../models/jobModel');
const User = require('../models/userModel');

const getAll = async () => {
    const jobs = await Job.find().sort({ 'updatedAt': -1 }).exec();
    return jobs;
}

const getJobsByUser = async (user_id) => {
    const jobs = await Job.find({user_id: user_id}).sort({ 'updatedAt': -1 }).exec();
    return jobs;
}

const getUserFavoriteJobs = async (user_id) => {
    const user = await User.findById(user_id).populate({ path: 'favorites', options: { sort: { 'updatedAt': -1 } } });
    return user.favorites;
}


module.exports = {
    getAll,
    getJobsByUser,
    getUserFavoriteJobs
}