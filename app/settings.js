var Settings,
  __hasProp = {}.hasOwnProperty;

Settings = (function() {
  function Settings() {}

  Settings.prototype.defaults = {
    bg_period: 'tab',
    time_display: '1',
    time_12hour: '0',
    time_display_meridiem: '0',
    time_animate_seperators: '1',
    time_border_display: '1',
    time_digit_transparency: '100',
    time_border_transparency: '100',
    date_display: '0',
    date_format: 'dddd LL',
    date_position: 'viewport-bottom'
  };

  Settings.prototype.merge = function() {
    var attrname, output, _ref;
    output = {};
    _ref = this.defaults;
    for (attrname in _ref) {
      if (!__hasProp.call(_ref, attrname)) continue;
      output[attrname] = this.defaults[attrname];
    }
    /*
    for (attrname in obj) {
      if (!__hasProp.call(obj, attrname)) continue;
      output[attrname] = obj[attrname];
    }*/
    return output;
  };

  Settings.prototype.ready = function(cb) {
    return cb(this.merge());
    /*return chrome.storage.sync.get("settings", (function(_this) {
      return function(obj) {
        return cb(_this.merge(obj.settings));
      };
    })(this));*/
  };

  Settings.prototype.set = function(new_settings) {
    return chrome.storage.sync.set({
      "settings": new_settings
    });
  };

  return Settings;

})();
