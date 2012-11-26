if (Meteor.isClient) {
  Session.set('greeting','Click to calculate.');
  Session.set('result','');

  Template.demo.greeting = function () {
    return Session.get('greeting');
  };

  Template.demo.result = function () {
    return Session.get('result');
  };

  Template.demo.events({
    'click input.calculate' : function () {
      var first = $('.first').val();
      var second = $('.second').val();
      var result = parseInt(first) + parseInt(second);

      Session.set('greeting','Good job!');
      Session.set('result', result);
      // Is this really needed to maintain field values?
      Session.set('first', first);
      Session.set('second', second);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
