define("kjui/tab/0.0.1/tab-debug", ["$-debug", "arale/switchable/0.9.11/switchable-debug", "arale/easing/1.0.0/easing-debug", "arale/widget/1.0.2/widget-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug"], function(require, exports, module) {
  var $ = require('$-debug'),
    Switchable = require('arale/switchable/0.9.11/switchable-debug');

  var Tab = Switchable.extend({
    attrs: {
      triggerType: 'click',
      activeTriggerClass: 'tab-hd-is-active'
    },

    setup: function() {
      Tab.superclass.setup.call(this);

      this._fixNavHeight();
    },

    //nav比原始高度少1像素，盖住strip
    _fixNavHeight: function(){
      var nav = this.triggers.parent();
      if (navHeight === 0) {
        navHeight = nav.height();
      }
      if (navHeight > 0) {
        nav.height(navHeight - 1);
      }
    }

  });

  module.exports = Tab;

  var navHeight = 0;

});
