const userModel = require('../model/model.user');

async function getUser() {
  try {
    const users = await userModel.getUser();
    return { success: true, data: users };
  }
  catch (err) {
  // eslint-disable-next-line
  console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function getUserById(id) {
  try {
    const user = await userModel.getUserById(id);
    return { success: true, data: user };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  getUser,
  getUserById
};
