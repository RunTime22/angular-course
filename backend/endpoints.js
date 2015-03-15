
function isUserLoggedIn(req, res, next) {
  var token = req.headers['x-auth-token'];
  var result = false;

  try {
    result = (token.length > 1);
  } catch(e) {}

  if(!result) {
    return res.status(401).send('User must be logged in');
  }

  return next();
}

module.exports = function(app) {
  require('./modules/users/routes')(app, isUserLoggedIn );

};
