var docs = [
  {
    route: '/api/v1/documentation',
    method: 'get',
    returns: 'Array',
    description: 'Returns a list of the supported Api',
    claims: []
  },
  {
    route: '/api/v1/users',
    method: 'get',
    returns: 'Array',
    description: 'Returns a list of the registered users',
    claims: ['manager']
  },
  {
    route: '/api/v1/users/:username',
    method: 'get',
    returns: 'Object|Null',
    description: 'Returns the requested user',
    claims: ['manager']
  },
  {
    route: '/api/v1/users/',
    method: 'post',
    payload: { username: 'String', password: 'String', '...' : '...' },
    returns: 'Object',
    description: 'Creates a new user',
    claims: []
  },
  {
    route: '/api/v1/users/:username',
    method: 'delete',
    description: 'Deletes the requested user',
    claims: ['customer']
  },
  {
    route: '/api/v1/users/login',
    method: 'post',
    payload: { username: 'String', password: 'String' },
    returns: 'Object|Null',
    description: 'Performs a login',
    claims: []
  },
  {
    route: '/api/v1/users/logout',
    method: 'post',
    description: 'Performs a logout',
    claims: []
  },
  {
    route: '/api/v1/users/current',
    method: 'get',
    returns: 'Object|Null',
    description: 'Returns current user',
    claims: []
  },
  {
    route: '/api/v1/store/products',
    method: 'get',
    returns: 'Array',
    description: 'Returns the products list',
    claims: []
  },
  {
    route: '/api/v1/store/categories',
    method: 'get',
    returns: 'Array',
    description: 'Returns the categories list',
    claims: []
  },
  {
    route: '/api/v1/store/orders',
    method: 'get',
    returns: 'Array',
    description: 'Returns the current user order list',
    claims: ['customer']
  },
  {
    route: '/api/v1/store/orders',
    method: 'post',
    payload: {'username' : 'String', 'products' : [{id: 'Product Id', quantity: 'Integer'}] },
    returns: 'Object',
    description: 'Creates a new Order',
    claims: ['customer']
  }
];

module.exports = function(app) {
  app
    .get('/api/v1/documentation', function(req, res, next) {

      res.status(200).send(docs);
    })
  ;
};
