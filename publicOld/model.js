
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