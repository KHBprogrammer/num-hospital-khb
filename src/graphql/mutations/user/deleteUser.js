const { User } = require('../../../model/model');

module.exports = async function (parent, args, context, info) {
  await User.findByIdAndDelete(args._id);

  console.log('delete user');
  return args._id;
};
