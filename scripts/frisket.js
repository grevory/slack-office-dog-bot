module.exports = function(robot) {
  return robot.hear(/frisky/i, function(res) {
    return res.send("Arf!");
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