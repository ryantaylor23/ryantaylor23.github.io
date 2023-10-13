"use strict";

function myFunction() {
  document.getElementById("demo").innerHTML = "FZ4564";
}

$( function() {
  $( "#datepicker" ).datepicker();
} );

$(function myFunction() {
  // Select the button element and make it a jQuery object
  var $button = $(".widget button").eq(0).button();
});


$(document).ready( () => {

  // handle click on Submit button
  $("#reserve").click( evt => {

          let isValid = true;

         // validate the first name entry  
         const firstName = $("#first_name").val().trim();
         if (firstName == "") {
            $("#first_name").next().text("This field is required.");
             isValid = false;
          } else {
             $("#first_name").next().text("");
           }
           $("#first_name").val(firstName);

          // validate the phone number
          const phonePattern = 
          /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
          const phone = $("#phone").val().trim();
          if (phone == "") { 
              $("#phone").next().text("This field is required.");
              isValid = false; 
          } else if ( !phonePattern.test(phone) ) {
            $("#phone").next().text("Must be 555-555-5555 format");
            isValid = false;
          } else {
              $("#phone").next().text("");
          }
          $("#phone").val(phone);

          // validate the date is picked
          const date = $("#datepicker").val().trim();
          if (date == "") {
          $("#datepicker").next().text("Please select a Date to reserve.");
             isValid = false;
         } else {
              $("#datepicker").next().text("");
         }
         $("#datepicker").val(date);
                          
              
        // prevent the default action of submitting the form if any entries are invalid 
        if (isValid == false) {
          evt.preventDefault();
        }

      if (isValid == true) {
        $("form").submit();
        alert("Thank you for reserving a date! I will contact you soon about your fishing lessons!");
      }
  });
});




