module.exports = function(robot) {

  var _ = require('lodash');

  var excitedEmotes = [
    'wags tail',
    'pants',
    'uses puppy eyes'
  ];

  var map = [
    {
      listener: 'hear',
      response: 'send',
      pattern: 'speak|talk',
      message: ['Woof!', 'Arf'],
      specificity: 10
    },
    {
      listener: 'hear',
      response: 'send',
      pattern: 'good boy|good dog|good girl',
      message: '',
      specificity: 50
    },
    {
      listener: 'hear',
      response: 'send',
      pattern: 'play',
      message: ':tennis:',
      specificity: 10
    },
    {
      listener: 'hear',
      response: 'reply',
      pattern: 'play dead',
      message: ':fearful:',
      specificity: 100
    }
  ];

  var bestMatch = null;
  

  return robot.hear(/(.*)/i, function(res) {
    
    var post = res.match[1];
    var bestMatch = {};
    var message = '';

    _.forEach(map, function(item){
      if (RegExp(item.pattern).test(post)) {
        if (item.specificity > _.toInteger(bestMatch.specificity)) {
          bestMatch = item;
        }
      }
    });

    if (!_.isEmpty(bestMatch)) {
      message = bestMatch.message;
      if (_.isArray(message)) {
        message = _.sample(message);
      }
      return res[bestMatch.response](message);
    }

  });
};