module.exports = function(robot) {

  var _ = require('lodash');

  var map = [
    {
      listener: 'hear',
      response: 'send',
      pattern: /marco/i,
      message: 'Yolo!',
      specificity: 10
    },
    {
      listener: 'hear',
      response: 'send',
      pattern: /marco polo/i,
      message: 'Cool!',
      specificity: 100
    }
  ];

  var bestMatch = null;
  

  return robot.hear(/(.*)/i, function(res) {
    
    var message = res.match[1];
    var bestMatch = {};
    _.forEach(map, function(item){
      if (RegExp(item.pattern).test(message)) {
        if (item.specificity > bestMatch.specificity) {
          bestMatch = item;
        }
      }
    });

    if (bestMatch) {
      return res[bestMatch.pattern](bestMatch.message);
    }

  });
  // robot.hear(/who's a good boy/i, function(res) {
  //   return res.send(":doge:");
  // });
  // robot.hear(/you're a dog/i, function(res) {
  //   return res.send("PANTPANTPANT");
  // });
  // robot.respond(/sit/i, function(res) {
  //   return res.reply("give me a treat");
  // });
  // return robot.hear(/I like (.*)/i, function(res) {
  //   var likedThing;
  //   likedThing = res.match[1];
  //   return res.emote("fetches " + likedThing);
  // });
};