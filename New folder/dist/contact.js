"use strict";

(function (content) {
    function OutputFormDataToConsole() {
        var FullName = document.getElementById("FullName");
        var ContactNumber = document.getElementById("ContactNumber");
        var EmailAddress = document.getElementById("EmailAddress");
        var Message = document.getElementById("Message");

        console.log("%c Form Data", "font-weight:bold; font-size: 16px; color: blue;");
        console.log("%c ---------------------------------------", "color: blue;");
        console.log("%c Full Name     : " + FullName.value, "color: blue;");
        console.log("%c Contact Number: " + ContactNumber.value, "color: blue;");
        console.log("%c Email Address : " + EmailAddress.value, "color: blue;");
        console.log("%c Your Message  : " + Message.value, "color: blue;");
        console.log("%c ---------------------------------------", "color: blue;");
    }

    function ContactContent() {
        console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");

        document.getElementsByClassName("card-title")[0].textContent = "Contact Me!";

        // create a new HTML Element
        var cancelButton = document.createElement("button");
        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            //event.preventDefault();
            window.open("index.html", "_parent");
        });

        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);

        var SendButton = document.getElementById("SendButton");
        SendButton.addEventListener("click", function (event) {
            event.preventDefault();
            OutputFormDataToConsole();
        });
    }

    content.ContactContent = ContactContent;
})(content || (content = {}));