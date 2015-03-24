var fs = require('fs');
var ROLES = {
  "public": ["public"],
  "customer": ["public", "customer"],
  "manager": ["public", "customer", "manager"],
  "admin": ["public", "customer", "manager", "admin"]
};
var TOKEN_BASE = 'Esis.Angular-Course.user.session:';


var authorize = function(needle, user, res) {
  var haystack = user ? (user.authLevel || []) : [];

  for(var i = 0; i < haystack.length; i++) {
    if(haystack[i] === needle) {
      console.log('AUTHORIZED FOR ROLE ', needle);
      return true;
    }
  }

  res.status(403).end();
  return false;
};

var _orderList = fs.readdirSync(__dirname + '/data/');

module.exports = function(app) {

  app
    .get('/api/v1/store/products', function(req, res) {

      return res.status(200).json([
        {
          "id": 1,
          "name": "Zummatough",
          "price": 60.221,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 2,
          "name": "Quad Fresh",
          "price": 12.7151,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 3,
          "name": "Kantex",
          "price": 25.0191,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 4,
          "name": "Blacking",
          "price": 81.7704,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 5,
          "name": "Blackkix",
          "price": 11.0986,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 6,
          "name": "Sonwarm",
          "price": 57.8843,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 7,
          "name": "Can In",
          "price": 58.8161,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 8,
          "name": "Inchstring",
          "price": 25.9593,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 9,
          "name": "Ron Trax",
          "price": 55.9377,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 10,
          "name": "Namsoft",
          "price": 43.9602,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 11,
          "name": "Tampwarm",
          "price": 24.8683,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 12,
          "name": "Ran Tough",
          "price": 72.8821,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 13,
          "name": "Kay Gotech",
          "price": 11.1929,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 14,
          "name": "Kantex",
          "price": 97.2561,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 15,
          "name": "Sail L",
          "price": 39.937,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 16,
          "name": "Dentocom",
          "price": 82.8829,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 17,
          "name": "Saildax",
          "price": 35.0127,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 18,
          "name": "Kay Gotech",
          "price": 55.386,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 19,
          "name": "Ranwarm",
          "price": 60.9459,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 20,
          "name": "Ranwarm",
          "price": 27.8404,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 21,
          "name": "Dingcom",
          "price": 44.3847,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 22,
          "name": "Tandex",
          "price": 9.0544,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 23,
          "name": "Hold Tamstrong",
          "price": 40.3758,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 24,
          "name": "Tontone",
          "price": 13.7251,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 25,
          "name": "Strong-Light",
          "price": 11.1104,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 26,
          "name": "Ontotough",
          "price": 37.5911,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 27,
          "name": "Dameco",
          "price": 42.697,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 28,
          "name": "Sunair",
          "price": 77.6317,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 29,
          "name": "Ozer Light",
          "price": 76.3958,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 30,
          "name": "Tam Zumfresh",
          "price": 56.1696,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 31,
          "name": "Ecokix",
          "price": 62.3093,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 32,
          "name": "Ron Trax",
          "price": 53.6213,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 33,
          "name": "Ozer Light",
          "price": 13.6306,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 34,
          "name": "Koning",
          "price": 52.3373,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 35,
          "name": "Treetop",
          "price": 10.6167,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 36,
          "name": "New Find",
          "price": 32.7007,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 37,
          "name": "Sail Lab",
          "price": 55.3644,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 38,
          "name": "Strong-Light",
          "price": 91.9319,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 39,
          "name": "Indigoredair",
          "price": 39.1159,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 40,
          "name": "Ran Tough",
          "price": 93.9542,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 41,
          "name": "White-Lex",
          "price": 75.9123,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 42,
          "name": "Lakeyron",
          "price": 62.1677,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 43,
          "name": "Warmtough",
          "price": 58.2604,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 44,
          "name": "Vaiacore",
          "price": 78.4883,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 45,
          "name": "Fin Ity",
          "price": 57.0867,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 46,
          "name": "Tin-Bam",
          "price": 24.5681,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 47,
          "name": "Ice Sing",
          "price": 25.299,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 48,
          "name": "Can In",
          "price": 97.584,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 49,
          "name": "Tam Zumfresh",
          "price": 82.0455,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 50,
          "name": "Namsoft",
          "price": 47.9266,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 51,
          "name": "Vaiacore",
          "price": 74.8252,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 52,
          "name": "Saltbam",
          "price": 81.2979,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 53,
          "name": "Ran Tough",
          "price": 97.9043,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 54,
          "name": "Sunhome",
          "price": 82.7861,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 55,
          "name": "Dameco",
          "price": 61.7056,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 56,
          "name": "Ron Fan",
          "price": 43.0339,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 57,
          "name": "Unotough",
          "price": 13.6209,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 58,
          "name": "Tin-Bam",
          "price": 40.1327,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 59,
          "name": "Sonwarm",
          "price": 31.0093,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 60,
          "name": "Canstring",
          "price": 27.4216,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 61,
          "name": "Airfresh",
          "price": 49.9226,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 62,
          "name": "Inchflex",
          "price": 80.3923,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 63,
          "name": "Airair",
          "price": 63.339,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 64,
          "name": "Ecojob",
          "price": 17.5545,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 65,
          "name": "Strong-Light",
          "price": 99.3299,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 66,
          "name": "Koning",
          "price": 48.4261,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 67,
          "name": "Zoomtough",
          "price": 90.5826,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 68,
          "name": "Scot Damdom",
          "price": 22.002,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 69,
          "name": "Dento Cof",
          "price": 63.8475,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 70,
          "name": "Redtone",
          "price": 15.7717,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 71,
          "name": "Transtrax",
          "price": 91.1997,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 72,
          "name": "Via Phase",
          "price": 86.1377,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 73,
          "name": "Via Phase",
          "price": 75.4481,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 74,
          "name": "Inch-Lux",
          "price": 22.5598,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 75,
          "name": "Via Phase",
          "price": 78.6772,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 76,
          "name": "Stronglight",
          "price": 50.8388,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 77,
          "name": "Redron",
          "price": 32.4721,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 78,
          "name": "Zummatough",
          "price": 50.5719,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 79,
          "name": "Zoomtough",
          "price": 58.0131,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 80,
          "name": "Holdtoeco",
          "price": 94.195,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 81,
          "name": "Stronglight",
          "price": 96.1572,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 82,
          "name": "Tris Sing",
          "price": 97.8932,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 83,
          "name": "Tris Sing",
          "price": 90.455,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 84,
          "name": "Sonwarm",
          "price": 74.2769,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 85,
          "name": "Stronglight",
          "price": 80.2131,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 86,
          "name": "Inchwarm",
          "price": 34.559,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 87,
          "name": "Alphaplus",
          "price": 59.7606,
          "categories": [
            "animals"
          ],
          "thumbnail": "http://lorempixel.com/400/200/animals/"
        },
        {
          "id": 88,
          "name": "Lat-Dex",
          "price": 22.8904,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 89,
          "name": "Inchflex",
          "price": 74.1822,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 90,
          "name": "Quoex",
          "price": 26.1365,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 91,
          "name": "Funbam",
          "price": 56.4332,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 92,
          "name": "Warmtough",
          "price": 77.6923,
          "categories": [
            "business"
          ],
          "thumbnail": "http://lorempixel.com/400/200/business/"
        },
        {
          "id": 93,
          "name": "Scot Damdom",
          "price": 24.2857,
          "categories": [
            "abstract"
          ],
          "thumbnail": "http://lorempixel.com/400/200/abstract/"
        },
        {
          "id": 94,
          "name": "Nim Ity",
          "price": 76.4207,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 95,
          "name": "Over-Tone",
          "price": 92.3286,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 96,
          "name": "Inchstring",
          "price": 25.8384,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 97,
          "name": "Ron Fan",
          "price": 16.3537,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        },
        {
          "id": 98,
          "name": "Strongstring",
          "price": 85.2724,
          "categories": [
            "people"
          ],
          "thumbnail": "http://lorempixel.com/400/200/people/"
        },
        {
          "id": 99,
          "name": "Doublelax",
          "price": 54.3529,
          "categories": [
            "food"
          ],
          "thumbnail": "http://lorempixel.com/400/200/food/"
        },
        {
          "id": 100,
          "name": "Airfresh",
          "price": 71.4166,
          "categories": [
            "fashion"
          ],
          "thumbnail": "http://lorempixel.com/400/200/fashion/"
        }
      ]);
    })
    .get('/api/v1/store/categories', function(req, res) {

      return res.status(200).json(['fashion', 'animals', 'business', 'people', 'food', 'abstract']);
    })
    .get('/api/v1/store/orders', function(req, res) {

      if(!authorize('customer', req.user, res)) {
        return;
      }

      var list = [];
      var orders = [];

      try {
        list = _orderList;
      } catch(e) {}

      if(list.length < 1) {
        res.status(204).json([]);
        return;
      }

      for(var i = 0; i < list.length; i++) {
        var order;
        try {
          order = JSON.parse( fs.readFileSync(__dirname + '/data/' + list[i], 'utf8') );
        } catch(e) {
          console.log(e);
        }

        if(order) {
          orders.push(order);
        }
      }

      if(orders.length < 1) {
        res.status(204).json([]);
        return;
      }

      res.status(200).json(orders);
    })
    .post('/api/v1/store/orders', function(req, res) {

      if(!authorize('customer', req.user, res)) {
        return;
      }

      var result = false;
      var id = _orderList = fs.readdirSync(__dirname + '/data/').length + 1;
      var path = __dirname + '/data/' + id + '.json';
      var order = req.body;
      order.id = id;
      order.date = Date.now();


      try{
        fs.writeFileSync(path, JSON.stringify(order));
        result = true;
      } catch(e) {}

      if(!result) {
        res.status(400).end();
      }

      return res.status(201).end();
    })
  ;

};

/**
 [
 '{{repeat(100)}}',
 {
   id: "{{index(1)}}",
   name: "{{random('Inchlax','Treetop','Quadstrong','Kantex','White-Lex','Namsoft','Ron Trax','Rounddox','Sail Lab','Stronglight','Ecokix','Strongstring','Sonwarm','Kay Gotech','Tontone','Sunair','Indigodax','Ranklam','Airair','Ron Fan','Hold Tamstrong','Fax Dom','Jobtanity','Zoodox','Meddox','Doublelax','Sunhome','Warmtough','Dento Cof','Ranwarm','Over-Tone','Alphaplus','Indigoredair','Zon-Tough','Dentocom','Redtone','Lat-Dex','Dameco','Faxlax','Tris Sing','Lightruntax','Holdtoeco','Quad Fresh','Blacking','Lab Saoplus','Xxx--Flex','Saltbam','Son-Plus','Vaiacore','Danex','Tandex','Inch-Lux','Via Phase','Tam Zumfresh','Zoo-Lex','Funbam','Dingcom','Blackkix','Duocore','Red-Home','Rank Donfix','Stockis','Lexihotstrong','New Find','Lakeyron','Nim Ity','Transtrax','Unagoplus','Unotough','Tip Zumlax','Scot Damdom','Stansankix','Saildax','Inchflex','Tamptouch','Koning','Inchstring','Tin-Bam','Fin Ity','Quoex','Inchwarm','Supertech','Zummatough','Ice Sing','Redron','Strong-Light','Can In','Sail L','S-in','Tris-Top','Toughdox','Ranlam','Statlux','Airfresh','Joyfresh','Tamfind','Uni-Touch','Treelab','Singlefan','Ding Flex','Ozer Light','Ran Tough','Uno Qvolam','Tampwarm','Ontotough','Incof','Islux','Freshing','Phys Fresh','Ecojob','Triowarm','Zoomtough','Canstring')}}",
   price: "{{ floating(9, 99.99) }}",
   categories: ["{{random('fashion', 'animals', 'business', 'people', 'food', 'abstract')}}"],
   thumbnail: function() {

     return "http://lorempixel.com/400/200/" + this.categories[0] + "/"
   }
 }
 ]
**/
