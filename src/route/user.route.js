const express = require('express');
const router = express.Router({ mergeParams: true });

const userController = require('../controller/user.controller');
const userValidation = require('../validation/user.validation');
const authVerify = require('../authentication/authentication');

router
  .route('/register')
  .post(userValidation.register, userController.register);

router.route('/login').post(userValidation.login, userController.login);

router
  .route('/addtask')
  .post(authVerify, userValidation.task, userController.task);

  router
    .route('/getTask')
    .post(authVerify, userController.getTask);

module.exports = router;
