const joi = require('joi');

const userObject = {};

userObject.register = joi.object({
  Username: joi.string().required(),
  Gender: joi.string().required(),
  DOB: joi.string().required(),
  Email: joi.string().required().email(),
  Mobile: joi.string().min(10).max(10),
  Password: joi.string().required(),
  Confirm_password: joi.ref('Password'),
});

userObject.login = joi.object({
  Username: joi.string().required(),
  Password: joi.string().required(),
});

userObject.task = joi.object({
  UserID:joi.string().required(),
  TaskNo: joi.string().required(),
  TaskName: joi.string().required(),
  TaskDescription: joi.string().required(),
  CreatedDate: joi.string().required(),
  EndDate: joi.string().required(),
});

module.exports = userObject;
