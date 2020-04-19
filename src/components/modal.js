
const $registrationForm = $("#registrationForm");

$registrationForm.submit(function (e) {
  e.preventDefault();
  $.ajax({
    type: 'POST',
    data: $registrationForm.serialize(),
    url: 'submit_registration.php',
    success: function (data) {
      showModal('registrationSuccess');
    }
  });
  return false;
});

function showModal(id) {
  $(".modal").modal('hide');
  $("#" + id).modal();
}
const createWeekdays = () => {

  var weekdays = ['Mo-Do', 'Freitag'];
  var cList = $('ul.mylist')

  var from = (label) => {
    return $('<input />', {
      size: 10,
      value: '00:00',
      name: label + '_phone_availability_from',
      class: 'span2',
    })
  }
  var to = (label) => {
    return $('<input />')
    .addClass('span2')
    .attr('size', 10)
    .attr('value', '00:00')
    .attr('name', label + '_phone_availability_to')
  }
  var checkbox = (label) => {
    return $('<label />')
    .append(
      $('<input />', {
        type: 'checkbox',
        value: '',
        name: label + "_availability",
      })
      ).append('&nbsp;' + label + '&nbsp;')
    }

    $.each(weekdays, function (i) {

      var li = $('<li/>')
      .append(checkbox(weekdays[i]))
      .append('von&nbsp;')
      .append(from(weekdays[i]))
      .append('&nbsp;bis&nbsp;')
      .append(to(weekdays[i]))
      .appendTo(cList);
    });
  }