"use strict";

(function (content) {

        function ReturnPI() {
                return Math.PI;
        }

        function AboutContent() {
                console.log("%c About Content accessed...", "font-weight:bold; font-size: 20px;");
                var myNumber = ReturnPI();
                console.log("My Funky Number: " + myNumber);

                var paragraph = document.getElementById("paragraph");

                var mySentence = "";

                paragraph.textContent = mySentence;

                var myArray = [{ name: "Tom", age: 25 }, { name: "Bob", age: 35 }, { name: "Mike", age: 45 }, { name: "Juan", age: 55 }, { name: "Smyth", age: 65 }];

                myArray.push({ name: "Carol", age: 15 });
                myArray.unshift({ name: "Jake", age: 45 });

                var content = document.getElementsByClassName("content");
                console.log("myArray length: " + myArray.length);

                var arrayEmpty = void 0;

                // ternary operator - alternate toggle conditional statement
                arrayEmpty = myArray.length > 0 ? false : true;

                // === checks both value and type where == only checks value
                if (myArray[0].age === 25) {

                        console.log("First Element is Peter");
                }

                // associative arrays create this key / value pair association but there is no iterator
                // which means you can't loop through them
                var myAssociateArray = [];

                myAssociateArray["Name"] = "Tom";
                myAssociateArray["Age"] = 30;
                myAssociateArray["StudentNum"] = "P008490";

                console.log(myAssociateArray);
                console.log(myAssociateArray["Name"]);

                var myFavouriteThingsList = ["Video Games", "Movies", "Cars", "Space Flight (FTL)"];

                // "hook into" a ul that is empty that has an id of "myFavouriteThings"
                var myFavouritesList = document.getElementById("myFavouriteThings");

                myFavouriteThingsList.forEach(function (thing) {
                        var newItem = document.createElement("li");
                        newItem.textContent = thing;
                        myFavouritesList.appendChild(newItem);
                });

                console.log(myFavouritesList);
        }

        // properties
        content.AboutContent = AboutContent;
})(content || (content = {}));