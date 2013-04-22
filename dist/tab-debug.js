define("kjui/tab/1.0.0/tab-debug", ["arale/switchable/0.9.12/switchable-debug", "$-debug", "arale/easing/1.0.0/easing-debug", "arale/widget/1.0.3/widget-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug"], function(require, exports, module) {
  var Switchable = require('arale/switchable/0.9.12/switchable-debug');

  var Tab = Switchable.extend({
    attrs: {
      triggerType: 'click',
      classPrefix: '',
      activeTriggerClass: 'tab-hd-is-active'
    }
  });

  module.exports = Tab;
});
