if (Meteor.isClient) {
  Session.set('greeting','Click to calculate.');
  Session.set('result','');
  Session.set('first', null);
  Session.set('second', null);

  Template.demo.greeting = function () {
    return Session.get('greeting');
  };

  Template.demo.result = function () {
    return Session.get('result');
  };

  Template.demo.events({
    'click input.calculate' : function () {
      // template data, if any, is available in 'this'
      Session.set('greeting','Good job!');
      Session.set('result', Session.get('first'));
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
