"use strict";

const $ = selector => document.querySelector(selector); 


const processEntries = () => {
    const firstName = $("#first_name");
    const email = $("#email_address");
    const phone = $("#phone");
    const comments = $("#comments");

    let isValid = true;

    if (firstName.value == "") {
      firstName.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      firstName.nextElementSibling.textContent = "";
    }

    if (email.value == "") {
      email.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      email.nextElementSibling.textContent = "";
    }

    if (phone.value == "") {
       phone.nextElementSibling.textContent = "This field is required.";
       isValid = false;
    } else {
       phone.nextElementSibling.textContent = "";
    }

    if (comments.value == "") {
       comments.nextElementSibling.textContent = "This field is required.";
       isValid = false;
    } else {
      comments.nextElementSibling.textContent = "";
    }

    if (isValid == true) {
        $("form").submit();
    }
};

const resetForm = () => {
   $("form").reset();
   $("#first_name").nextElementSibling.textContent = "*";
   $("#email_address").nextElementSibling.textContent = "*";
   $("#phone").nextElementSibling.textContent = "*";
   $("#comments").nextElementSibling.textContent = "*";
   $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#email_address").focus();   
});

