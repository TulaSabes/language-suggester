// Languages
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
//Submits Survey and gives submission messege
    });
    $("#message-alert").submit(function(e){
      const form = e.target;
      const formSumbission= $("#messege-alert").serialiaze();
      debugger;
      // const inputs= Array.from(form.querySelectorAll('input')).filter((item)=> item.checked).map((item) => { return `${item.name}: ${item.value}`;  });
      console.log(inputs)
      alert("Your survey has been submitted successfully!")
      
      


    })
  });
  
