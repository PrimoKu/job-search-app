require("dotenv").config();
const jobRepository = require('../repositories/JobRepository');
const JobTypeEnums = require('../enums/JobTypeEnums');
const JobLocationEnums = require('../enums/JobLocationEnums');
const jobTypeEnums = new JobTypeEnums();
const jobLocationEnums = new JobLocationEnums();

class DashboardController {

    constructor () {
        this.jobTypeList = jobTypeEnums.jobTypeList;
        this.jobLocationList = jobLocationEnums.jobLocationList;
    }

    loginPageGet = async (req, res) => {
        res.render('login');
    }

    registerPageGet = async (req, res) => {
        res.render('register');
    }

    homePageGet = async (req, res) => {
        const jobs = await jobRepository.getAll();
        res.render('home', {
            title: 'Home',
            jobs: jobs,
            jobTypes: this.jobTypeList,
            jobLocations: this.jobLocationList,
        })
    }

    myJobPageGet = async (req, res) => {
        const user_role = req.user.role;
        let jobs;
        if(user_role == "Employer") {
            jobs = await jobRepository.getJobsByUser(req.params.id);
        } else {
            jobs = await jobRepository.getUserFavoriteJobs(req.user.id);
        }

        res.render('myJobs', {
            title: 'MyJobs',
            jobs: jobs,
            jobTypes: this.jobTypeList,
            jobLocations: this.jobLocationList,
        })
    }
}

module.exports = DashboardController;