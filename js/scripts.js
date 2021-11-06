// Moose
$(document).ready(function() {
    $("#choose-language").change(function() {
      const animal = $("#choose-language").val();
      $("#Ruby").hide();
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Rust").hide();
  
      // $("#"+animal).show();
      if (animal === "Ruby") {
        $("#Ruby").show();  
      } else if (animal === "Python") {
        $("#Python").show();
      } else if (animal === "Javascript") {
        $("#Javascript").show();
      } else if (animal === "Rust") {
        $("#Rust").show();
      }
    });
  });
  