class JobLocationEnums {
    constructor() { 
        const jobLocation = {
            PHYSICAL: 0,
            REMOTE: 1,
        }
        Object.freeze(jobLocation);

        this.PHYSICAL = jobLocation.PHYSICAL;
        this.REMOTE = jobLocation.REMOTE;

        this.jobLocationList = [
            { text: 'Physical', name:'physical', value: this.PHYSICAL },
            { text: 'Remote', name:'remote', value: this.REMOTE },
        ]
        this.jobLocationValueList = jobLocation;
    }
}

module.exports = JobLocationEnums;