var fs = require('fs');
var ROLES = {
  "public": ["public"],
  "customer": ["public", "customer"],
  "manager": ["public", "customer", "manager"],
  "admin": ["public", "customer", "manager", "admin"]
};
var TOKEN_BASE = 'Esis.Angular-Course.user.session:';

module.exports = function(app, isUserLoggedIn) {

  app

    .post('/api/v1/users/logout', function(req, res, next) {
      return res.status(200).send(null);
    })

    .post('/api/v1/users/login', function(req, res, next) {
      var user;
      var credentials = req.body;

      try {
        user = JSON.parse(
          fs.readFileSync(__dirname + '/data/' + credentials.username + '.json', 'utf8')
        );
      } catch(e) {
        console.log('/api/v1/users/login:CATCH');
        console.log(e);
      }

      if(!user || (credentials.password !== user.password)) {
        return res.status(401).send(null);
      }

      return res.status(200).send({
        user: user,
        token: TOKEN_BASE + credentials.username,
        authLevel: ROLES[user.role]
      });
    })

    .get('/api/v1/users/current', function(req, res, next) {
      var username = req.headers['x-auth-token'];
      var user;

      try {
        username = username.split(TOKEN_BASE).pop();
        user = JSON.parse(
          fs.readFileSync(__dirname + '/data/' + username + '.json', 'utf8')
        );
      } catch(e) {
        username = void(0);
      }

      if(!username) {
        return res.status(401).send('Token Expired/Invalid');
      }

      if(!user) {
        return res.status(400).send();
      }

      return res.status(200).send({
        user: user,
        token: TOKEN_BASE + username,
        authLevel: ROLES[user.role]
      });

    })

    .delete('/api/v1/users/:username', isUserLoggedIn, function(req, res, next) {
      var result;

      if(req.params.username === 'hitmands') {
        return res.status(403).send('Operation Not Permitted');
      }

      try {
        fs.unlinkSync(__dirname + '/data/' + req.params.username + '.json');
        result = true;
      } catch(e) {}

      if(!result) {
        return res.status(400).send();
      }

      return res.status(200).send();
    })

    .post('/api/v1/users/:username', function(req, res, next) {
      var username;
      var path;
      var userdata = req.body;
      var result;

      try{
        username = req.params.username;
      } catch(e) {}

      if(!username) {
        return res.status(400).send('Param "username" Required');
      }
      path = __dirname + '/data/' + username + '.json';

      if(fs.existsSync(path)) {
        return res.status(400).send('User already exists');
      }

      try{
        fs.writeFileSync(path, JSON.stringify(userdata));
        result = true;
      } catch(e) {}

      if(!result) {
        return res.status(500).send('Something went wrong, cannot create user: ' + username);
      }

      return res.status(201).send(null);
    });
};
