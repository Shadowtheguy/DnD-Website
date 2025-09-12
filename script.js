//* Variables

//Constant Variables
const raceButton = document.getElementById("raceButton");
const selectRace = document.getElementById("raceSelect");

const classButton = document.getElementById("classButton");
const selectClass = document.getElementById("classSelect");
const classSummaryButton = document.getElementById("classSummaryButton");
const classSkillButton = document.getElementById("classSkillButton");
const classEquipButton = document.getElementById("classEquipButton");
const classMultiButton = document.getElementById("classMultiButton");

const classDescriptionBox = document.getElementById("classDescriptionBox");

const noSelectionError = "You haven't Chosen Yet!";

// Changing Variables
let classValue = "";
let currentClass = "";

let raceValue = "";
let currentRace = "";

let currentTab = "";
let inactiveTabs = "";

// Variable for testing the for statement
i = 0;

// Pojo Variables
let dndClassDescription = "";

let dndRaceDescription = "";

// Fill in the blank Variables
let classSummaryTemplate = "";

let classSkillTemplate = "";

let classEquipTemplate = "";

let classMultiTemplate = "";

//* Fetch Functions

function fetchDndClasses() {
  console.log("Fetching Classes for DND 5e");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://www.dnd5eapi.co/api/2014/classes/" + currentClass,
    requestOptions
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      dndClassDescription = result;
      //! Make a function to update all the variables
    })
    .catch((error) => console.error(error));
}

function fetchDndRaces() {
  console.log("Fetching Races for DND 5e");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://www.dnd5eapi.co/api/2014/races/" + currentRace, requestOptions)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      dndRaceDescription = result;
    })
    .catch((error) => console.error(error));
}

//* Event Functions

//Adding Descriptions
classButton.addEventListener("click", function (event) {
  classValue = selectClass.value;
  currentClass = classValue;

  if (classValue == "nullClass") {
    classDescriptionBox.textContent = noSelectionError;
  } else {
    fetchDndClasses();
    classDescriptionBox.textContent = classSummaryTemplate;
    for (i = 0; i < currentTab.length; i++) {
      currentTab[i].className = currentTab[i].className.replace(
        "selected-tab",
        "inactive-tab"
      );
    }
    classSummaryButton.classList.replace("inactive-tab", "selected-tab");
  }
});

raceButton.addEventListener("click", function (event) {
  raceValue = selectRace.value;
  currentRace = raceValue;
  fetchDndRaces();
});

//Tab Functions

classSummaryButton.addEventListener("click", function (event) {
  classDescriptionBox.textContent = classSummaryTemplate;
  currentTab = document.getElementsByClassName("selected-tab");

  for (i = 0; i < currentTab.length; i++) {
    currentTab[i].className = currentTab[i].className.replace(
      "selected-tab",
      "inactive-tab"
    );
  }

  classSummaryButton.classList.replace("inactive-tab", "selected-tab");
});

classSkillButton.addEventListener("click", function (event) {
  classDescriptionBox.textContent = classSkillTemplate;
  currentTab = document.getElementsByClassName("selected-tab");

  for (i = 0; i < currentTab.length; i++) {
    currentTab[i].className = currentTab[i].className.replace(
      "selected-tab",
      "inactive-tab"
    );
  }

  classSkillButton.classList.replace("inactive-tab", "selected-tab");
});

classEquipButton.addEventListener("click", function (event) {
  classDescriptionBox.textContent = classEquipTemplate;
  currentTab = document.getElementsByClassName("selected-tab");

  for (i = 0; i < currentTab.length; i++) {
    currentTab[i].className = currentTab[i].className.replace(
      "selected-tab",
      "inactive-tab"
    );
  }

  classEquipButton.classList.replace("inactive-tab", "selected-tab");
});

classMultiButton.addEventListener("click", function (event) {
  classDescriptionBox.textContent = classMultiTemplate;
  currentTab = document.getElementsByClassName("selected-tab");

  for (i = 0; i < currentTab.length; i++) {
    currentTab[i].className = currentTab[i].className.replace(
      "selected-tab",
      "inactive-tab"
    );
  }

  classMultiButton.classList.replace("inactive-tab", "selected-tab");
});
