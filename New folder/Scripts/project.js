(function (content) {


    function ReturnPI() {
        return Math.PI;
    }

    function ProjectContent() {
        console.log("%c About Content accessed...", "font-weight:bold; font-size: 20px;");
        let myNumber = ReturnPI();
        console.log("My Funky Number: " + myNumber);

        let myArray = [{
                name: "Tom",
                age: 25
            },
            {
                name: "Bob",
                age: 35
            },
            {
                name: "Mike",
                age: 45
            },
            {
                name: "Juan",
                age: 55
            },
            {
                name: "Smyth",
                age: 65
            }
        ];

        myArray.push({
            name: "Carol",
            age: 15
        });
        myArray.unshift({
            name: "Jake",
            age: 45
        });

        let content = document.getElementsByClassName("myProjectThings");
        console.log("myArray length: " + myArray.length);


        let arrayEmpty;

        // ternary operator - alternate toggle conditional statement
        arrayEmpty = (myArray.length > 0) ? false : true;


        // === checks both value and type where == only checks value
        if (myArray[0].age === 25) {
            console.log("First Element is Peter");
        }


        //associative arrays create this key / value pair association but there is no iterator
       // which means you can't loop through them
        let myAssociateArray = [];

        myAssociateArray["Name"] = "Tom";
        myAssociateArray["Age"] = 30;
        myAssociateArray["StudentNum"] = "P008490";

         console.log(myAssociateArray);
         console.log(myAssociateArray["Name"]);


        // "hook into" a ul that is empty that has an id of "myBioThings"

       
            var Heading = document.getElementsByClassName("display-6");
            Heading[0].innerHTML = "My Projects:";
            let myProjectsThingsList = [
                "Traffic Light Controller - Digital Electronics : All traffics are controlled with advanced futures.",
                "Temperature Measurement - Micro Controller : Temperature is measured in digital and giving warning messages to help users.",
                "TTC Application - Software Engineering : It allows passengers to help to travel with more advanced futures."
            ];

          // "hook into" a ul that is empty that has an id of "myFavouriteThings"
            let myProjectList = document.getElementById("myProjectThings");
            for (let index = 0; index < myProjectsThingsList.length; index++) {
                let newItem = document.createElement("li");
                newItem.textContent = myProjectsThingsList[index];
                myProjectList.appendChild(newItem);
            }

        console.log(myProjectList);
        }
    // properties
    content.ProjectContent = ProjectContent;

})(content || (content = {}));