const blogQuery = require('./check_auth');

module.exports = {
  validateAdmin: blogQuery.validateUser
};
