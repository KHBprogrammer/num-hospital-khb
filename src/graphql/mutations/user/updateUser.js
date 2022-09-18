const { User } = require('../../../model/model');

module.exports = async function (parent, args, context, info) {
  const user = await User.findByIdAndUpdate(args._id, args, { new: true });

  console.log('update user');
  return user;
};
