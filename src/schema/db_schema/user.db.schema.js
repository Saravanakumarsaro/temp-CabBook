const mongoose = require('mongoose');

const userObject = {};

userObject.register = mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: [true, 'Username must be unique'],
  },
  Gender: { type: String, required: true },
  DOB: { type: String, required: true },
  Password: {
    type: String,
    required: true,
    min: 4,
    max: 15,
  },
  Email: {
    type: String,
    required: true,
    unique: [true, 'Email must be unique'],
  },
  Mobile: { type: String, required: true, max: 10, min: 10 },
});

userObject.login = mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
});

userObject.task = mongoose.Schema({
  UserID: { type: String, required: true },
  TaskNo: {
    type: String,
    required: true,
    unique: [true, 'Username must be unique'],
  },
});

userObject.taskDetails = mongoose.Schema({
  TaskNo: {
    type: String,
    required: true,
    unique: [true, 'Username must be unique'],
  },
  TaskName: { type: String, required: true },
  TaskDescription: { type: String, required: true },
  CreatedDate: { type: String, required: true },
  EndDate: { type: String, required: true },
});
const exportObject = {};

exportObject.register = mongoose.model(
  'register',
  userObject.register,
  process.env.USER_COLLECTION_NAME
);
exportObject.login = mongoose.model(
  'login',
  userObject.login,
  process.env.USER_COLLECTION_NAME
);
exportObject.task = mongoose.model(
  'task',
  userObject.task,
  process.env.TASK_COLLECTION_NAME
);
exportObject.taskDetails = mongoose.model(
  'taskDetails',
  userObject.taskDetails,
  process.env.TASKDETAILS_COLLECTION_NAME
);

module.exports = exportObject;
