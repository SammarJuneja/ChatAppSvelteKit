const { Router } = require("express");
const { body, query, oneOf } = require("express-validator");
const router = Router();
const { login, register } = require("../controllers/authController");
const User = require("$lib/modals/user");

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/;

router.post(
    '/register',
    [
      body('username')
        .trim().escape()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3, max: 30 }).withMessage('Username must be between 3 and 30 characters long')
        .isAlphanumeric().withMessage('Username must be alphanumeric')
        .not().contains(' ').withMessage('Username cannot contain spaces')
        .custom(async (username) => {
          const user = await User.findOne({ username });
          if (user) {
            throw new Error('User already exists');
          }
        }),
      body('email')
        .trim().escape()
        .notEmpty().withMessage('E-mail is required')
        .isEmail().withMessage('Invalid E-mail address')
        .custom(async (email) => {
          const user = await User.findOne({ email });
          if (user) {
            throw new Error('User already exists');
          }
        }),
      body('password')
        .trim().escape()
        .notEmpty().withMessage('Password is required')
        .matches(passwordRegex)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number, and be at least 8 characters long'),
      body('device')
        .trim().escape()
        .notEmpty().withMessage('Device is required')
    ],
    register
);

router.post(
    '/login',
    [
      oneOf([
        body('username')
          .trim().escape()
          .notEmpty().withMessage('Username is required')
          .isLength({ min: 3, max: 30 }).withMessage('Username must be between 3 and 30 characters long')
          .isAlphanumeric().withMessage('Username must be alphanumeric')
          .not().contains(' ').withMessage('Username cannot contain spaces')
          .custom(async (username) => {
            const user = await User.findOne({ username });
            if (!user) {
              throw new Error('User doesn\'t exists');
            }
          }),
        body('email')
          .trim().escape()
          .notEmpty().withMessage('E-mail is required')
          .isEmail().withMessage('Invalid E-mail address')
          .custom(async (email) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new Error('User doesn\'t exists');
            }
          }),
      ], {
        message: 'At least Username or Email must be provided'
      }),
      body('password')
        .trim().escape()
        .notEmpty().withMessage('Password is required')
        .matches(passwordRegex)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number, and be at least 8 characters long'),
      body('device')
        .trim().escape()
        .notEmpty().withMessage('Device is required'),
    ],
    login
);

module.exports = router;