/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app;
(function (app) {
    "use strict"

    // About Button Click event handler

    function Start() {
        // local variable
        let title = document.title;

        console.log("%c App Started!", "font-weight:bold; font-size: 20px;");
        console.log("%c ----------------------------", "font-weight:bold; font-size: 20px;");
        console.log("Title: " + title);

        try {
            switch (title) {
                case "COMP125 - Assignment One Biography":
                    content.BioContent();
                    break;

                case "COMP125 - Assignment One Projects":
                    content.ProjectContent();
                    break;

                case "COMP125 - Assignmnet One Contact":
                    content.ContactContent();
                    break;

                default:
                    throw ("Title not Defined");
                    break;
            }
        }
        catch(err) {
            console.log(err);
            console.warn("Something went wrong when switching pages");
        }
    }


    //window.onload = Start;

    window.addEventListener("load", Start);


    // these are all app properties
    app.Title = document.title;


})(app || (app = {}));