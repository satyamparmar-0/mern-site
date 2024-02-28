
function logger(req, res, next) {
    console.log('Logging...');
    next(); // Pass control to the next middleware in the stack
  }

  module.exports = logger;
