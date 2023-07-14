const userAPISchema = require('../schema/api_schema/user.api.schema');
const userObject = {};

// const {value: payload, error: payaloadError} = userAPISchema.register.validate(req.body);

userObject.register = (req, res, next) => {
  // console.log('Register API Request', req.body);
  let validate = userAPISchema.register.validate(req.body);
  // let validate = userAPISchema.register.validateAsync(req.body);
  console.log('validate', validate);
  // if (validate.error) {
    if (validate.hasOwnProperty('error')) {
    res.status(400).send(validate.error.message);
  } else {
    res.send('test')
    // next();
  }
  // return new Promise((resolve) => {
  //   let validate = userAPISchema.register.validateAsync(req.body);
  //   if (validate.hasOwnProperty('error')) {
  //     res.status(400).send('wrong');
  //     resolve(true);
  //   } else {
  //     resolve(next());
  //   }
  // });
};

userObject.login = (req, res, next) => {
  console.log(req.body);
  let validate = userAPISchema.login.validate(req.body);
  if (validate.error) {
    res.status(400).send(validate.error.message);
  } else {
    next();
  }
};

userObject.task = (req, res, next) => {
  console.log(req.body);
  let validate = userAPISchema.task.validate(req.body);
  if (validate.error) {
    res.status(400).send(validate.error.message);
  } else {
    next();
  }
};

module.exports = userObject;
