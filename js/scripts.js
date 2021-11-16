// Languages
function chooseLanguage(event) {
  //{ "form-control": "" }
  const form = $("#choose-language").serialize()
  const language = form.split("=")[1]
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
}
$(document).ready(function() {
  $("#choose-language").change(chooseLanguage)
    //$("#choose-language").submit((event)=>{console.log("Woo")});
    $("#message-alert").submit((e) => {
       const form = $("#message-alert").serialize();

       // data = ["brand=apple", "device=laptop"]
       // data = { brand: "apple", device: "laptop" }
       const data = form.split("&");
       const dataObject = data.reduce((acc, val) => {
         // val = "spare-time=camping+bike"
        const keyVal = val.split("=");
        // keyVal = ["spare-time", camping+bike]
        // keyVal[1] = "camping+bike"
        if (keyVal[1].includes("+")){
          acc[keyVal[0]] = keyVal[1].split("+");
        } else{acc[keyVal[0]] = keyVal[1]}
        // acc = { "spare-time": ["caping", "bike"]}
        return acc;
       }, {})
      // const inputs= Array.from(form.querySelectorAll('input')).filter((item)=> item.checked).map((item) => { return `${item.name}: ${item.value}`;  });
      // console.log(inputs)
      // ["apple", "laptop"]
      // "apple"
      // la 
      debugger;
      const values = Object.values(dataObject)
      const strValues =values.map((val) => {
        if (Array.isArray(val)){
          return val.join("\n");
        }
        return val; 
      })
      debugger;
      const returnValues= strValues.join("\n");
      alert(`Your survey has been submitted successfully! \n ${returnValues}`) 


      
      


    })
  });
  
