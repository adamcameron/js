// Generated by CoffeeScript 1.7.1
(function() {
  var attrs, coffee, coffees, displayTopPicks, end, loc, location, newLocs, params, person, range, searchLocations, start, storeLocations, to_print, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _len6, _len7, _len8, _m, _n, _o, _p, _q, _r, _results,
    __slice = [].slice;

  range = [1, 2, 3, 4];

  range = [1, 2, 3];

  start = 5;

  end = 10;

  range = (function() {
    _results = [];
    for (var _i = start; start <= end ? _i <= end : _i >= end; start <= end ? _i++ : _i--){ _results.push(_i); }
    return _results;
  }).apply(this);

  range.slice(1, 5);

  range.slice(1, range.length);

  range.slice(1);

  storeLocations = ["Auckland", "Wellington", "Dunedin"];

  storeLocations.forEach(function(location, index) {
    return alert("Location: " + location);
  });

  for (_j = 0, _len = storeLocations.length; _j < _len; _j++) {
    location = storeLocations[_j];
    alert("Location: " + location);
  }

  for (_k = 0, _len1 = storeLocations.length; _k < _len1; _k++) {
    location = storeLocations[_k];
    alert("Location: " + location);
  }

  for (_l = 0, _len2 = storeLocations.length; _l < _len2; _l++) {
    loc = storeLocations[_l];
    "" + loc + ", NZ";
  }

  storeLocations = (function() {
    var _len3, _m, _results1;
    _results1 = [];
    for (_m = 0, _len3 = storeLocations.length; _m < _len3; _m++) {
      loc = storeLocations[_m];
      _results1.push("" + loc + ", NZ");
    }
    return _results1;
  })();

  for (_m = 0, _len3 = storeLocations.length; _m < _len3; _m++) {
    loc = storeLocations[_m];
    if (loc !== "Dunedin") {
      geoLocate(loc);
    }
  }

  storeLocations = (function() {
    var _len4, _n, _results1;
    _results1 = [];
    for (_n = 0, _len4 = storeLocations.length; _n < _len4; _n++) {
      loc = storeLocations[_n];
      if (loc !== "Dunedin") {
        _results1.push("" + loc + ", NZ");
      }
    }
    return _results1;
  })();

  newLocs = (function() {
    var _len4, _n, _results1;
    _results1 = [];
    for (_n = 0, _len4 = storeLocations.length; _n < _len4; _n++) {
      loc = storeLocations[_n];
      if (loc !== "Dunedin") {
        _results1.push(loc);
      }
    }
    return _results1;
  })();

  searchLocations = function() {
    var brand, cities;
    brand = arguments[0], cities = arguments[1];
    return "looking for " + brand + " in " + (cities.join(','));
  };

  params = ["Starducks", "Orlando", "Winter Park"];

  searchLocations(params);

  coffee = {
    name: "French",
    strength: 1
  };

  coffee = {
    name: "French",
    strength: 1
  };

  coffee = {
    name: "French",
    strength: 1,
    brew: function() {
      return alert("brewing " + this.name);
    },
    pour: function(amount) {
      if (amount == null) {
        amount = 1;
      }
      if (amount === 1) {
        return "poured a single cup";
      } else {
        return "Poured " + amount + " cups";
      }
    }
  };

  coffees = {
    french: {
      strength: 1,
      in_stock: 20
    },
    italian: {
      strength: 2,
      in_stock: 12
    },
    decaf: {
      strength: 0,
      in_stock: 8
    }
  };

  for (coffee in coffees) {
    attrs = coffees[coffee];
    "" + coffee + " has " + attrs.in_stock;
  }

  for (coffee in coffees) {
    attrs = coffees[coffee];
    "" + coffee + " has " + attrs.in_stock;
  }

  to_print = (function() {
    var _results1;
    _results1 = [];
    for (coffee in coffees) {
      attrs = coffees[coffee];
      if (attrs.in_stock > 0) {
        _results1.push("" + coffee + " has " + attrs.in_stock);
      }
    }
    return _results1;
  })();

  to_print.join(", ");

  range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  coffee = {
    name: "Russian",
    level: 2,
    isRussian: function() {
      return true;
    }
  };

  for (_n = 0, _len4 = people.length; _n < _len4; _n++) {
    person = people[_n];
    if (person.age > 18) {
      console.log(person.name);
    }
  }

  for (_o = 0, _len5 = people.length; _o < _len5; _o++) {
    person = people[_o];
    if (person.age > 18) {
      console.log(person.name);
    }
  }

  for (_p = 0, _len6 = people.length; _p < _len6; _p++) {
    person = people[_p];
    if (person.age > 18) {
      console.log(person.name);
    }
  }

  for (_q = 0, _len7 = coffeeList.length; _q < _len7; _q++) {
    coffee = coffeeList[_q];
    if (!(typeof coffee.isRussian === "function" ? coffee.isRussian() : void 0)) {
      addCoffee(coffee);
    }
  }

  for (_r = 0, _len8 = coffeeList.length; _r < _len8; _r++) {
    coffee = coffeeList[_r];
    if (coffee.isRussian == null) {
      addCoffee(coffee);
    }
  }

  displayTopPicks = function(bestCoffee, suggested) {
    alert('Top #1 ' + bestCoffee);
    return alert('Suggested: ' + suggested);
  };

  displayTopPicks = function() {
    var bestCoffee, suggested;
    bestCoffee = arguments[0], suggested = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    alert('Top #1 ' + bestCoffee);
    return alert('Suggested: ' + suggested.join(", "));
  };

}).call(this);