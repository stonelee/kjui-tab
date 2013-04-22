define(function(require, exports, module) {
  var Switchable = require('switchable');

  var Tab = Switchable.extend({
    attrs: {
      triggerType: 'click',
      classPrefix: '',
      activeTriggerClass: 'tab-hd-is-active'
    }
  });

  module.exports = Tab;
});
