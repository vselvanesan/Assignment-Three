let content;
(function (content) {

    function AboutButtonClick() {
        console.log("Project Button Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function BioContent() {
        console.log("%c Home Content Accessed...", "font-weight:bold; font-size: 20px;");
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "Home";

        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);



        var Heading = document.getElementsByClassName("display-4");
        Heading[0].innerHTML = "Biography";
        var Mission = document.getElementsByClassName("lead");
        Mission[0].innerHTML = "My Personal Mission Statement";
        var MyMissionStatement = document.getElementsByClassName("mission-statement");
        MyMissionStatement[0].innerHTML = "To learn, develop and grow in Software Engineering by contributing my skills, experience, and knowledge through enthusiasm, dedication, and passion.";
        let myBioHeading = document.getElementById("educationBio");
        myBioHeading.innerHTML = "Education Biography :";

        let myBioThingsList = [
            "Studying Software Engineering Technology - CENTENNIAL COLLEGE",
            "Bachelor of Education, Intermediate/Senior (Mathematics, Physics & Computer )-UNIVERSITY OF TORONTO",
            "Bachelor of Engineering, Electrical Degree-UNIVERSITY OF TORONTO"
        ];
        // "hook into" a ul that is empty that has an id of "myBioThings"
        let myBioList = document.getElementById("myBioThings");
        for (let index = 0; index < myBioThingsList.length; index++) {
            let newItem = document.createElement("li");
            newItem.textContent = myBioThingsList[index];
            console.log(index);
            myBioList.appendChild(newItem);
        }
    }


    // attach HomeContent function to the "content" namespace
    content.BioContent = BioContent;

})(content || (content = {}));