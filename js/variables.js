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