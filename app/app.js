var clock, date_obj, settings;

settings = new Settings();

clock = new Clock(document.querySelectorAll('.time')[0], document.querySelectorAll('.time .inner')[0], document.querySelectorAll('.seperator')[0], document.querySelectorAll('.hours')[0], document.querySelectorAll('.minutes')[0], document.querySelectorAll('.meridiem')[0]);

settings.ready(function(settings) {
  /*BgLoader.load(67, document.querySelectorAll('.bg')[0], settings.bg_period);
  if (settings.date_display !== '0') {
    date_obj.position(settings.date_position);
    date_obj.format(settings.date_format);
  }*/
  clock.time_format((settings.time_12hour === '1' ? '12hr' : '24hr'), settings.time_display_meridiem === '1');
  clock.animate_seperators(settings.time_animate_seperators === '1');
  clock.display(settings.time_display === '1');
  clock.time_opacity(settings.time_digit_transparency);
  clock.border_opacity(settings.time_border_transparency);
  return clock.start();
});
