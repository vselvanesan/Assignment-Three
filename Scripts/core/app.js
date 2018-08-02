// core module - IIFE
(function() {
  // App letiables
  let XHR;
  let paragraphsHome;

  /**
   * This function inserts HTML from a file or other location
   * into the specificied tag / element that exists on the 
   * index.html page
   *
   * @param {string} sourceURL
   * @param {string} destTag
*/
  function insertHTML(sourceURL, destTag) {
   let target = document.querySelector(destTag);

    XHR = new XMLHttpRequest();
    XHR.addEventListener("readystatechange", function(){
      if(this.status === 200) {
        if(this.readyState === 4)  {
          target.innerHTML = this.responseText;
  
         if(destTag == "main") {
          loadParagraphsHome();
         }
         
        }
      }
    });
    XHR.open("GET", sourceURL);
    XHR.send();
  }

  function AboutButtonClick() {
    console.log("Project Button Clicked!");
  }

  function AboutButtonOver(event) {
    event.currentTarget.style.opacity = 0.3;
  }

  function AboutButtonOut(event) {
    event.currentTarget.style.opacity = 1.0;
  }


  function loadParagraphsHome() { 
    XHR = new XMLHttpRequest();
    XHR.addEventListener("readystatechange", function(){
      if(this.status === 200) {
        if(this.readyState === 4)  {
          paragraphsHome = JSON.parse(this.responseText);
          console.log("Paragraph Data finished loading");
           switch (document.title) {
             case "COMP125 - Assignment Three : Biography Page":
               BioContent();
               break;
             case "COMP125 - Assignment Three : Project Page":
               ProjectContent();
               break;
             case "COMP125 - Assignmnet Three : Contact Page":
               ContactContent();
               break;
           }
        }
      }
    });
    XHR.open("GET", "/paragraphsHome.json");
    XHR.send();
  }

  function BioContent() {
      console.log("%c Bio Content Accessed....", "font-weight:bold; font-size: 20px;");
      let Heading = document.getElementsByClassName("display-4");
      Heading[0].innerHTML = paragraphsHome.paragraph1;
      let Mission = document.getElementsByClassName("lead");
      Mission[0].innerHTML = paragraphsHome.paragraph2;
      let MyMissionStatement = document.getElementsByClassName("mission-statement");
      MyMissionStatement[0].innerHTML = paragraphsHome.paragraph3;
      let myBioHeading = document.getElementById("educationBio");
      myBioHeading.innerHTML = paragraphsHome.paragraph4;

      // "hook into" a ul that is empty that has an id of "myBioThings"
      let myBioList = document.getElementById("myBioThings");
      let newItem1 = document.createElement("li");
      newItem1.textContent = paragraphsHome.paragraph4;
      myBioList.appendChild(newItem1);
      newItem1 = document.createElement("li");
      newItem1.textContent = paragraphsHome.paragraph5;
      myBioList.appendChild(newItem1);
      newItem1 = document.createElement("li");
      newItem1.textContent = paragraphsHome.paragraph6;
      myBioList.appendChild(newItem1);
    }

    function ProjectContent() {
      console.log("%c Project Content accessed...", "font-weight:bold; font-size: 20px;");
      let content = document.getElementsByClassName("myProjectThings");

      // "hook into" a ul that is empty that has an id of "myBioThings"
      let Heading = document.getElementsByClassName("display-6");
      Heading[0].innerHTML = "My Projects:";
  
      // "hook into" a ul that is empty that has an id of "myFavouriteThings"
      let myProjectList = document.getElementById("myProjectThings");

      let newItem = document.createElement("li");
      newItem.textContent = paragraphsHome.paragraph7;
      myProjectList.appendChild(newItem);
      newItem = document.createElement("li");
      newItem.textContent = paragraphsHome.paragraph8;
      myProjectList.appendChild(newItem);
      newItem = document.createElement("li");
      newItem.textContent = paragraphsHome.paragraph9;
      myProjectList.appendChild(newItem);
    }


    function ContactContent() {
      console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");
      let FullName = document.getElementById("FullName");
        let ContactNumber = document.getElementById("ContactNumber");
        let EmailAddress = document.getElementById("EmailAddress");
        let Message = document.getElementById("Message");
        FullName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Message.setCustomValidity("");
        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

      // create a new HTML Element
        let cancelButton = document.createElement("button");
      // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.open("index.html", "_parent");
      });

      // add the HTML Element to the page somewhere 
      // in this case I'm attaching a button to the first forml element
      document.forms[0].appendChild(cancelButton);
      let SendButton = document.getElementById("SendButton");
      SendButton.addEventListener("click", (event) => {
        //event.preventDefault();
      if (!document.forms[0].checkValidity()) {
        OutputFormDataToConsole();
        ValidateForm();
      }

      function ValidateForm() {
        setEventHandlersForFormElements();
      }

    function OutputFormDataToConsole() {
      console.log(`%c ---------------------------------------`, "color: blue;");
      console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
      console.log(`%c ---------------------------------------`, "color: blue;");
      console.log(`%c Full Name     : ${FullName.value}`, "color: blue;");
      console.log(`%c Contact Number: ${ContactNumber.value}`, "color: blue;");
      console.log(`%c Email Address : ${EmailAddress.value}`, "color: blue;");
      console.log(`%c Your Message  : ${Message.value}`, "color: blue;");
      console.log(`%c ---------------------------------------`, "color: blue;");

      console.log(`%c ---------------------------------------`, "color: blue;");
      console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: blue;");
      console.log(`%c ---------------------------------------`, "color: blue;");
      console.log(`%c Form Length     : ${document.forms[0].length}`, "color: blue;");

      for (let index = 0; index < document.forms[0].length; index++) {
        console.log(`%c Form Element ${index}: ${document.forms[0].elements[index].value}`, "color: blue;");
      }
    }
    
    function setEventHandlersForFormElements() {
      for (const element of document.forms[0].elements) {
        if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
          // when the user is inputting data
          element.addEventListener("input", function () {
            element.setCustomValidity("");
          });

          // when the user enters incorrect data
          element.addEventListener("invalid", function () {
            switch (element.id) {
              case "FullName":
                element.setCustomValidity("You have missed to enter an appropriate Full Name with at least 2 characters.");
                break;
              case "ContactNumber":
                element.setCustomValidity("You have missed to enter a phone number with the pattern (###) ###-####.");
                break;
              case "EmailAddress":
                element.setCustomValidity("You have missed to enter Your email address in a valid format.");
                break;
              case "Message":
                element.setCustomValidity("You have missed to enter a message.");
                break;
              default:
                element.setCustomValidity("This Field is Required");
                break;
            }
          });
        }
      }
    }
    });
  }

  /**
   * This function is used for Intialization
   */

    function Start() {
      // local letiable
      Main();
    }

  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  
  function Main() {
    console.log(`%c App Started...`, "font-weight: bold; font-size: 20px;"); 
    
    insertHTML("/Views/partials/header.html", "header");

    let sourceURL = "";
    switch (document.title) {
      case "COMP125 - Assignment Three : Biography Page":
        sourceURL = "/Views/content/bio.html";
        break;
      case "COMP125 - Assignment Three : Project Page":
        sourceURL = "/Views/content/projects.html";
        break;
      case "COMP125 - Assignmnet Three : Contact Page":
        sourceURL = "/Views/content/contact.html";
        break;
    }

    setPageContent(sourceURL);
    insertHTML("/Views/partials/footer.html", "footer");
  }

  function setPageContent(url) {
    insertHTML(url, "main");
  }

  window.addEventListener("load", Start());

})();
