$(function () {
  $('[data-toggle="popover"]').popover();

  $("#cvc").on("click", function () {
    if ($(".cvc-preview-container").hasClass("hide")) {
      $(".cvc-preview-container").removeClass("hide");
    } else {
      $(".cvc-preview-container").addClass("hide");
    }
  });
});
function sendPaymentAlert() {
  alert("The payment has successfully done.");
}

var payButton = document.getElementById("PayButton");
payButton.addEventListener("click", sendPaymentAlert);
