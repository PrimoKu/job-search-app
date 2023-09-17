const {check, validationResult} = require('express-validator');

exports.JobCreateValidator = [
    check('job_title')
        .escape()
        .not()
        .isEmpty()
        .withMessage('Job title can not be empty!')
        .bail()
        .isLength({min: 3})
        .withMessage('Job title requires a minimum 3 of characters!')
        .bail(),
    check('job_description')
        .escape()
        .not()
        .isEmpty()
        .withMessage('Job description can not be empty!')
        .bail()
        .isLength({min: 3})
        .withMessage('Job description requires a minimum 3 of characters!')
        .bail(),
    check('company')
        .escape()
        .not()
        .isEmpty()
        .withMessage('Company can not be empty!')
        .bail(),
    check('location')
        .not()
        .isEmpty()
        .withMessage('Location can not be empty!')
        .bail()
        .isIn([0, 1])
        .withMessage('Invalid location type!')
        .bail(),
    check('job_type')
        .not()
        .isEmpty()
        .withMessage('Job type can not be empty!')
        .bail()
        .isIn([0, 1, 2])
        .withMessage('Invalid job type!')
        .bail(),
    check('salary')
        .not()
        .isEmpty()
        .withMessage('Salary can not be empty!')
        .bail()
        .isInt({gt: 0})
        .withMessage('Salary should greater than zero!')
        .bail(),
   (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({errors: errors.array()});
        next();
    },
];

exports.JobUpdateValidator = [
    check('job_title')
        .optional()
        .escape()
        .isLength({min: 3})
        .withMessage('Minimum 3 characters required!')
        .bail(),
    check('job_description')
        .optional()
        .escape()
        .isLength({min: 3})
        .withMessage('Minimum 3 characters required!')
        .bail(),
    check('company')
        .optional()
        .escape()
        .isLength({min: 3})
        .withMessage('Minimum 3 characters required!')
        .bail(),
    check('location')
        .optional()
        .isIn([0, 1])
        .withMessage('Invalid job type!')
        .bail(),
    check('job_type')
        .optional()
        .isIn([0, 1, 2])
        .withMessage('Invalid job type!')
        .bail(),
    check('salary')
        .optional()
        .isInt({gt: 0})
        .withMessage('Salary should greater than zero!')
        .bail(),
   (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({errors: errors.array()});
        next();
    },
];

exports.UserRegisterValidator = [
    check('name')
        .escape()
        .not()
        .isEmpty()
        .withMessage('Name can not be empty!')
        .bail()
        .isLength({min: 5})
        .withMessage('Name requires a minimum 5 of characters!')
        .bail()
        .matches(/^[A-Za-z0-9_. ]+$/)
        .withMessage('Name should only contains letters, numbers, and underscores')
        .bail(),
    check('email')
        .escape()
        .not()
        .isEmpty()
        .withMessage('Email can not be empty!')
        .bail()
        .isLength({min: 3})
        .withMessage('Email requires a minimum 5 of characters!')
        .bail()
        .isEmail()
        .withMessage('Invalid email!')
        .bail()
        .normalizeEmail({ gmail_remove_dots: false }),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password can not be empty!')
        .bail()
        .matches(/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z@]{8,}$/, "i")
        .withMessage('Password must be at least 8 characters long and contain at least one letter and one number')
        .bail(),
    check('role')
        .not()
        .isEmpty()
        .withMessage('Role can not be empty!')
        .bail()
        .isIn(['Employer', 'Job Seeker'])
        .withMessage('Invalid role type!')
        .bail(),
   (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({errors: errors.array()});
        next();
    },
];

exports.UserUpdateValidator = [
    check('name')
        .escape()
        .not()
        .isEmpty()
        .withMessage('Name can not be empty!')
        .bail()
        .isLength({min: 5})
        .withMessage('Name requires a minimum 5 of characters!')
        .bail()
        .matches(/^[A-Za-z0-9_. ]+$/)
        .withMessage('Name should only contains letters, numbers, and underscores')
        .bail(),
    check('email')
        .escape()
        .not()
        .isEmpty()
        .withMessage('Email can not be empty!')
        .bail()
        .isLength({min: 3})
        .withMessage('Email requires a minimum 5 of characters!')
        .bail()
        .isEmail()
        .withMessage('Invalid email!')
        .bail()
        .normalizeEmail({ gmail_remove_dots: false }),
    check('password')
        .optional()
        .matches(/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z@]{8,}$/, "i")
        .withMessage('Password must be at least 8 characters long and contain at least one letter and one number')
        .bail(),
    // check('role')
    //     .isIn(['Employer', 'Job Seeker'])
    //     .withMessage('Invalid role type!')
    //     .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({errors: errors.array()});
        next();
    },
];