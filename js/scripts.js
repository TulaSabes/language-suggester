// Moose
$(document).ready(function() {
    $("#choose-language").change(function() {
      const language = $("#choose-language").val();
      $("#Ruby").hide();
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Rust").hide();
  
      // $("#"+language).show();
      if (language === "Ruby") {
        $("#Ruby").show();  
      } else if (language === "Python") {
        $("#Python").show();
      } else if (language === "Javascript") {
        $("#Javascript").show();
      } else if (language === "Rust") {
        $("#Rust").show();
      }
  
    });
  });
  