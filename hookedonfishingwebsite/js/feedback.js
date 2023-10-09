"use strict";

$(document).ready( () => {

    // handle click on Submit button
    $("#join_list").click( evt => {

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

            // validate the comments entry  
            const comments = $("#comments").val().trim();
            if (comments == "") {
            $("#comments").next().text("This field is required.");
               isValid = false;
           } else {
                $("#comments").next().text("");
           }
           $("#comments").val(comments);
                            
                
          // prevent the default action of submitting the form if any entries are invalid 
          if (isValid == false) {
            evt.preventDefault();
          }

        if (isValid == true) {
          $("form").submit();
        }
    });

    // handle click on Reset Form button
    $("#clear_form").click( () => {
        // clear text boxes
        $("#email_1").val("");
        $("#phone").val("");
        $("#first_name").val("");
        $("#comments").val("");

        // reset span elements
        $("#email_1").next().text("*");
        $("#phone").next().text("*");
        $("#first_name").next().text("*");
        $("#comments").next().text("*");
        
        $("#first_name").focus();
    });

    // move focus to first text box
    $("#first_name").focus();
});

