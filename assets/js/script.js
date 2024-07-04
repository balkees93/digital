"use strict";
function sendMail() {
  document.getElementById("myForm").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      if (this.checkValidity() === false) {
        event.stopPropagation();
      }
      this.classList.add("was-validated");
    },

    false
  );
}

function digiProgBar() {
  var digiProgBar = document.getElementById("digiProgBar");
  let seoProgBar = document.getElementById("seoProgBar");
  let designProgBar = document.getElementById("designProgBar");
  setTimeout(frame(), 10000);
  function frame() {
    if (digiProgBarWidth <= 85 || seoProgBarWidth <= 90 || designProgBarWidth <= 95) {
      clearTimeout();
    } else {
      for (var digiProgBarWidth = 0; digiProgBarWidth <= 85; digiProgBarWidth++) {
        console.log("here");
        digiProgBar.style.width = digiProgBarWidth + "%";
      }
      for (var seoProgBarWidth = 0; seoProgBarWidth <= 90; seoProgBarWidth++) {
        seoProgBar.style.width = seoProgBarWidth + "%";
      }
      for (var designProgBarWidth = 0; designProgBarWidth <= 95; designProgBarWidth++) {
        designProgBar.style.width = designProgBarWidth + "%";
      }
    }
  }
}

digiProgBar();

function numCounter() {
  var numberCount = document.getElementById("numberCount");
}
numCounter();
$(".numberCount").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        //chnage count up speed here
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
