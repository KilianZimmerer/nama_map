import $ from 'jquery'

const $registrationForm = $('#registrationForm')

$registrationForm.submit(function (e) {
  e.preventDefault()
  $.ajax({
    type: 'POST',
    data: $registrationForm.serialize(),
    url: 'submit_registration.php',
    success: function (data) {
      showModal('registrationSuccess')
    },
  })
  return false
})

function showModal(id: string) {
  $('.modal').modal('hide')
  $('#' + id).modal()
}
const createWeekdays = () => {
  const weekdays = ['Mo-Do', 'Freitag']
  const cList = $('ul.mylist')

  const from = (label: string) => {
    return $('<input />', {
      size: 10,
      value: '00:00',
      name: label + '_phone_availability_from',
      class: 'span2',
    })
  }
  const to = (label: string) => {
    return $('<input />')
      .addClass('span2')
      .attr('size', 10)
      .attr('value', '00:00')
      .attr('name', label + '_phone_availability_to')
  }
  const checkbox = (label: string) => {
    return $('<label />')
      .append(
        $('<input />', {
          type: 'checkbox',
          value: '',
          name: label + '_availability',
        }),
      )
      .append('&nbsp;' + label + '&nbsp;')
  }

  $.each(weekdays, function (i) {
    const li = $('<li/>')
      .append(checkbox(weekdays[i]))
      .append('von&nbsp;')
      .append(from(weekdays[i]))
      .append('&nbsp;bis&nbsp;')
      .append(to(weekdays[i]))
      .appendTo(cList)
  })
}
