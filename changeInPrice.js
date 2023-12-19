document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("switch");
    var basiccontent = document.getElementById("basicPricing");
    var professionalcontent = document.getElementById("professionalPricing");
    var mastercontent = document.getElementById("masterPricing");
    toggleButton.addEventListener("change", function () {
      if (toggleButton.checked) {
        basiccontent.innerHTML = "<span>&dollar;</span>19.99";
      } else {
        basiccontent.innerHTML = "<span>&dollar;</span>199.99";
      }
    });
    toggleButton.addEventListener("change", function () {
      if (toggleButton.checked) {
        professionalcontent.innerHTML = "<span>&dollar;</span>24.99";
      } else {
        professionalcontent.innerHTML = "<span>&dollar;</span>249.99";
      }
    });
    toggleButton.addEventListener("change", function () {
        if (toggleButton.checked) {
          mastercontent.innerHTML = "<span>&dollar;</span>39.99";
        } else {
          mastercontent.innerHTML = "<span>&dollar;</span>399.99";
        }
      });
    });