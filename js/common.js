$(document).ready(function() {

//datepicker
if ($('.form__datepicker').length > 0) {  
  $('.datepicker table tr:last').hide();  
  $('.form__period').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).next().fadeIn();
      $(this).next().next().show();
      var current = new Date();
      if (current.getMonth() == 0){
        current.setMonth(11);
        current.setFullYear(current.getFullYear()-1);
      } else {
        current.setMonth(current.getMonth()-1);
      }
      $(this).next().DatePicker({
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
    }
    else {
      $(this).removeClass('active');
      $(this).next().fadeOut();
    };
  });   
  $('.form__datepicker-close').click(function() {
    $('.form__datepicker').fadeOut();
    $('.form__period').removeClass('active');
    $(this).hide();
  });
};

//messages
$('.js-message button').click(function() {
  $(this).parent().slideUp(100);
  return false;
});
$('.js-sites').click(function() {
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
    $(this).parent().next().slideUp();
  }
  else {
    $(this).addClass('open');
    $(this).parent().next().slideDown();
  };  
});

//sortable + draglable
if ($('.js-form-sort').length > 0) {
  $('.js-form-sort').sortable({axis: 'y', cursor: 'move'});
  $('.js-form-sort').disableSelection();
};

});