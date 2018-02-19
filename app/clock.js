var Clock,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Clock = (function() {
  Clock.prototype.vis = true;

  function Clock(time, time_inner, seperator, hours, minutes, meridiem) {
    this.time = time;
    this.time_inner = time_inner;
    this.seperator = seperator;
    this.hours = hours;
    this.minutes = minutes;
    this.meridiem = meridiem;
    this.tick = __bind(this.tick, this);
  }

  Clock.prototype.start = function(cb) {
    this.cb = cb;
    if (!this.display) {
      this.time.style.display = 'none';
    }
    this.meridiem.style.display = this.time_format === '12hr' && this.show_meridiem ? 'inline-block' : 'none';
    this.time.style.borderColor = "rgba(255,255,255, " + (this.border_opacity / 100) + ")";
    this.time_inner.style.opacity = this.time_opacity / 100;
    this.tick();
    return setInterval(this.tick, 1000);
  };

  Clock.prototype.tick = function() {
    var now, _ref;
    now = new Date;
    if (this.vis || !this.animate_seperators) {
      this.seperator.classList.remove('hidden');
    } else {
      this.seperator.classList.add('hidden');
    }
    if (this.time_format === '12hr') {
      this.hours.innerHTML = moment(now).format('hh');
      this.meridiem.innerHTML = moment(now).format('A');
    } else {
      this.hours.innerHTML = moment(now).format('HH');
    }
    this.minutes.innerHTML = ('0' + now.getMinutes()).slice(-2);
    this.vis = !this.vis;
    return (_ref = this.cb) != null ? _ref.call() : void 0;
  };

  Clock.prototype.display = function(display) {
    this.display = display;
  };

  Clock.prototype.animate_seperators = function(animate_seperators) {
    this.animate_seperators = animate_seperators;
  };

  Clock.prototype.time_format = function(time_format, show_meridiem) {
    this.time_format = time_format;
    this.show_meridiem = show_meridiem;
  };

  Clock.prototype.display_border = function(display_border) {
    this.display_border = display_border;
  };

  Clock.prototype.border_opacity = function(border_opacity) {
    this.border_opacity = border_opacity;
  };

  Clock.prototype.time_opacity = function(time_opacity) {
    this.time_opacity = time_opacity;
  };

  return Clock;

})();
