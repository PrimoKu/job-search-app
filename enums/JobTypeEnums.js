class JobTypeEnums {
    constructor() { 
        const jobType = {
            FULLTIME: 0,
            PARTTIME: 1,
            INTERNSHIP: 2,
        }
        Object.freeze(jobType);

        this.FULLTIME = jobType.FULLTIME;
        this.PARTTIME = jobType.PARTTIME;
        this.INTERNSHIP = jobType.INTERNSHIP;

        this.jobTypeList = [
            { text: 'Full-time', name:'fulltime', value: this.FULLTIME },
            { text: 'Part-time', name:'parttime', value: this.PARTTIME },
            { text: 'Internship', name:'internship', value: this.INTERNSHIP },
        ]
        this.jobTypeValueList = jobType;
    }
}

module.exports = JobTypeEnums;