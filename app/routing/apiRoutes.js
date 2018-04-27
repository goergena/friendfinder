  var express = require('express');
  var friends = require('../data/friends');


  module.exports = function () {
    var router = express.Router();

    router.get('/api/friends', function (req, res) {
      return res.json(friends);
    });

    router.post('/api/friends', function (req, res) {
      var newFriend = req.body;
      console.log(newFriend);
      friends.push(newFriend);
      res.json(newFriend);
     // return res.json(true);
    });

    return router;
  };