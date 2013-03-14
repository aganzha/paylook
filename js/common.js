$(document).ready(function() {

var current = new Date();
  if (current.getMonth() == 0){
    current.setMonth(11);
    current.setFullYear(current.getFullYear()-1);
  } else {
    current.setMonth(current.getMonth()-1);
  }

$('.form__datepicker').DatePicker({
  flat: true,
  format: 'd B Y',
  date: [],
  current: current,
  calendars: 3,
  mode: 'range',
  starts: 1,
  onChange: function(formated) {
    $('.form__period').get(0).innerHTML = '<b>' + formated.join('</b> – <b>') + '</b>';
  }
});


});