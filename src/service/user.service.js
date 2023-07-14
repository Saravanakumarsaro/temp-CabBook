const userDBSchema = require('../schema/db_schema/user.db.schema');
const jwt = require('jsonwebtoken');

const userObject = {};

userObject.register = (req) => {
  // console.log('Register service Req',req)
  return new Promise((resolve) => {
    userDBSchema.register.create(req, (err, res) => {
      if (err) {
        console.log('Register DB Error', err);
        resolve('Not Inserted');
      } else {
        resolve(res);
      }
    });
  });
};

userObject.login = (req) => {
  // console.log('login service Req', req);
  return new Promise((resolve) => {
    userDBSchema.login.findOne(req, (err, result) => {
      if (err) {
        resolve('Invaild username or password');
      } else {
        const data = {
          username: result.Username,
          Email: result.Email,
        };
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
          expiresIn: 3600,
        });
        resolve(token);
      }
    });
  });
};
userObject.task = (req) => {
  // console.log('Add task service Req', req);
  return new Promise((resolve) => {
    userDBSchema.task.create(req, (err, res) => {
      if (err) {
        console.log('Add task DB Error', err);
        resolve('Not Inserted');
      } else {
        userDBSchema.taskDetails.create(req, (err, res) => {
          if (err) {
            console.log('Add task DB Error', err);
            resolve('Not Inserted');
          } else {
            resolve(res);
          }
        });
      }
    });
  });
};
// userObject.taskDetails = (req) => {
//   // console.log('Add task service Req', req);
//   return new Promise((resolve) => {
//     userDBSchema.taskDetails.create(req, (err, res) => {
//       if (err) {
//         console.log('Add task DB Error', err);
//         resolve('Not Inserted');
//       } else {
//         resolve(res);
//       }
//     });
//   });
// };

userObject.getTask = (req) => {
  // console.log('getTask service Req', req);
  return new Promise((resolve) => {
    userDBSchema.task.find(req, (err, res) => {
      if (err) {
        console.log('Add task DB Error', err);
        resolve('No Records Found');
      } else {
        let data = {
          TaskNo: res[0].TaskNo,
        };
        console.log(res)
        console.log(data)
        userDBSchema.taskDetails.find(data, (err, result) => {
          if (err) {
            console.log('Add task DB Error', err);
            resolve('No Records Found');
          } else {
            resolve(result);
          }
        });
      }
    });
  });
};

module.exports = userObject;
