const userObject = {};

const userService = require('../service/user.service')

userObject.register = async (req, res) => {
  // console.log('Register Controller Req',req.body)
  res.send(await userService.register(req.body));
};
userObject.login = async (req, res) => {
  // console.log('login Controller Req',req.body)
  res.send(await userService.login(req.body));
};
userObject.task = async (req, res) => {
  // console.log('login Controller Req',req.body)
  res.send(await userService.task(req.body));
};

userObject.getTask = async (req, res) => {
  // console.log('login Controller Req',req.body)
  res.send(await userService.getTask(req.body));
};
module.exports = userObject;