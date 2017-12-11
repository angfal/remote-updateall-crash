'use strict';

module.exports = function(Message) {
  // Hide all not important methods
  Message.sharedClass.methods().forEach(function(sharedMethod) {
    sharedMethod.shared = sharedMethod.name === 'updateAll';
  });
};
