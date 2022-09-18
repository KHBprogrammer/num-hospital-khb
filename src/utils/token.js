const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants/constants');

function generateTokenFromUser(user) {
	const token = jwt.sign(
		{
			_id: user._id,
			role: user.role,
		},
		JWT_SECRET,
		{ expiresIn: '365d' }
	);
	return token;
}
module.exports = { generateTokenFromUser };
