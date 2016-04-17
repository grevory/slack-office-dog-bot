module.exports = function(robot) {

  var _ = require('lodash');

  var map = [
    {
      listener: 'hear',
      response: 'send',
      pattern: 'marco',
      message: 'Yolo!',
      specificity: 10
    },
    {
      listener: 'hear',
      response: 'send',
      pattern: 'marco polo',
      message: 'Cool!',
      specificity: 100
    }
  ];

  var bestMatch = null;
  

  return robot.hear(/(.*)/i, function(res) {
    
    var message = res.match[1];
    var bestMatch = {};
console.log(0, message);
    _.forEach(map, function(item){
console.log(1, item.pattern, RegExp(item.pattern).test(message));
      if (RegExp(item.pattern, 'i').test(message)) {
        if (item.specificity > bestMatch.specificity) {
          bestMatch = item;
        }
      }
    });
console.log(2, bestMatch);
    if (!_.isEmpty(bestMatch)) {
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