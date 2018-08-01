"use strict";

var content = void 0;
(function (content) {

    function ProjectButtonClick() {
        console.log("Project Button Clicked!");
    }

    function ProjectButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function ProjectButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {
        console.log("%c Home Content Accessed...", "font-weight:bold; font-size: 20px;");
        var ProjectButton = document.getElementById("ProjectButton");

        ProjectButton.textContent = "Project";

        // About Button event listener
        ProjectButton.addEventListener("click", ProjectButtonClick);
        ProjectButton.addEventListener("mouseover", ProjectButtonOver);
        ProjectButton.addEventListener("mouseout", ProjectButtonOut);
    }

    // attach HomeContent function to the "content" namespace
    content.HomeContent = HomeContent;
})(content || (content = {}));