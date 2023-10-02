"use strict";

const $ = selector => document.querySelector(selector); 


const processEntries = () => {
    const firstName = $("#first_name");
    const lastName = $("#last_name");
    const email1 = $("#email_1");
    const email2 = $("#email_2");

    let isValid = true;

    if (firstName.value == "") {
      firstName.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      firstName.nextElementSibling.textContent = "";
    }

    if (lastName.value == "") {
      lastName.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      lastName.nextElementSibling.textContent = "";
    }

    if (email1.value == "") {
      email1.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      email1.nextElementSibling.textContent = "";
    }

    if (email2.value == "") {
       email2.nextElementSibling.textContent = "This field is required.";
       isValid = false;
    } else {
       email2.nextElementSibling.textContent = "";
    }

    if (isValid == true) {
        $("form").submit();
    }
};

const resetForm = () => {
   $("form").reset();
   $("#first_name").nextElementSibling.textContent = "*";
   $("#last_name").nextElementSibling.textContent = "*";
   $("#email_1").nextElementSibling.textContent = "*";
   $("#email_2").nextElementSibling.textContent = "*";
   $("#email_1").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#join_list").addEventListener("click", processEntries);
    $("#clear_form").addEventListener("click", resetForm);  
    $("#email_1").focus();   
});