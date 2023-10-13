"use strict";

$(document).ready( () => {

  // handle click on Join List button
  $("#join_list").click( evt => {

      let isValid = true;

      // validate the first email address
      const emailPattern = 
          /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
      const email1 = $("#email_1").val().trim();
      if (email1 == "") { 
          $("#email_1").next().text("This field is required.");
          isValid = false;
      } else if ( !emailPattern.test(email1) ) {
          $("#email_1").next().text("Must be a valid email address.");
          isValid = false;
      } else {
          $("#email_1").next().text("");
      }
      $("#email_1").val(email1);

      // validate the second email address
      const email2 = $("#email_2").val().trim();
      if (email2 == "") { 
          $("#email_2").next().text("This field is required.");
          isValid = false; 
      } else if (email1 != email2) { 
          $("#email_2").next().text("Must equal first email entry.");
          isValid = false;
      } else {
          $("#email_2").next().text("");
      }
      $("#email_2").val(email2);
      
      // validate the first name entry  
      const firstName = $("#first_name").val().trim();
      if (firstName == "") {
          $("#first_name").next().text("This field is required.");
          isValid = false;
      } else {
          $("#first_name").next().text("");
      }
      $("#first_name").val(firstName);

      // validate the last name entry
      const lastName = $("#last_name").val().trim();
      if (lastName == "") {
          $("#last_name").next().text("This field is required.");
          isValid = false;
      } else {
          $("#last_name").next().text("");
      }
      $("#last_name").val(lastName);

      // prevent the default action of submitting the form if any entries are invalid 
		if (isValid == false) {
			evt.preventDefault();
		}

    if (isValid == true) {
      $("form").submit();
  }
});

    // handle click on Clear Form button
    $("#clear_form").click( () => {
      // clear text boxes
      $("#email_1").val("");
      $("#email_2").val("");
      $("#first_name").val("");
      $("#last_name").val("");

      // reset span elements
      $("#email_1").next().text("*");
      $("#email_2").next().text("*");
      $("#first_name").next().text("*");
      $("#last_name").next().text("*");
      
      $("#email_1").focus();
   });
  });

// Set the date we're counting down to
var countDownDate = new Date("Nov 17, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);