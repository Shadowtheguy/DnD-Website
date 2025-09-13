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
      classSetup();
    })
    .catch((error) => console.error(error));
}

//* Event Functions

// Startup
function classSetup() {
  //Checking Class for description.
  if (currentClass == "barbarian") {
    classSummaryTemplate = barbarianSummary;
  }

  if (currentClass == "bard") {
    classSummaryTemplate = bardSummary;
  }

  if (currentClass == "cleric") {
    classSummaryTemplate = clericSummary;
  }

  if (currentClass == "druid") {
    classSummaryTemplate = druidSummary;
  }

  if (currentClass == "fighter") {
    classSummaryTemplate = fighterSummary;
  }

  if (currentClass == "monk") {
    classSummaryTemplate = monkSummary;
  }

  if (currentClass == "paladin") {
    classSummaryTemplate = paladinSummary;
  }

  if (currentClass == "ranger") {
    classSummaryTemplate = rangerSummary;
  }

  if (currentClass == "rogue") {
    classSummaryTemplate = rogueSummary;
  }

  if (currentClass == "sorcerer") {
    classSummaryTemplate = sorcererSummary;
  }

  if (currentClass == "warlock") {
    classSummaryTemplate = warlockSummary;
  }

  if (currentClass == "wizard") {
    classSummaryTemplate = wizardSummary;
  }

  //Starting Setup
  classDescriptionBox.textContent = classSummaryTemplate;
  for (i = 0; i < currentTab.length; i++) {
    currentTab[i].className = currentTab[i].className.replace(
      "selected-tab",
      "inactive-tab"
    );
  }
  classSummaryButton.classList.replace("inactive-tab", "selected-tab");

  //*Stating variables with JSON Data
  //Skill variables
  skillList = dndClassDescription.proficiency_choices[0].desc;

  equipProficiencies =
    dndClassDescription.proficiencies[0].name +
    ", " +
    dndClassDescription.proficiencies[1].name +
    ", " +
    dndClassDescription.proficiencies[2].name +
    ", " +
    dndClassDescription.proficiencies[3].name;

  classSavingThrows =
    dndClassDescription.saving_throws[0].name +
    " and " +
    dndClassDescription.saving_throws[1].name;

  //Equip Variables
  //! Need to figure out how to get it to not return an error when there are less options that I call for, so I can call for more for things that have more

//?if (dndClassDescription.starting_equipment[1] !== undefined) {
//?classStartingEquip =
//?dndClassDescription.starting_equipment[0].equipment.name +
//?" and " +
//?dndRaceDescription.starting_equipment[1].equipment.name;
//?}

  //classStartingEquip =
  //dndClassDescription.starting_equipment[0].equipment.name +
  //" and " +
  //dndRaceDescription.starting_equipment[1].equipment.name;

  //classEquipChoices =
  //dndClassDescription.starting_equipment_options[0].desc +
  //" and " +
  //dndClassDescription.starting_equipment_options[1].desc;

  //MultiClassing Variables

  multiclassAbilityScore =
    dndClassDescription.multi_classing.prerequisites[0].ability_score.name;

  multiclassScoreNumber =
    dndClassDescription.multi_classing.prerequisites[0].minimum_score;

  multiclassProficiencies =
    dndClassDescription.multi_classing.proficiencies[0].name +
    ", " +
    dndClassDescription.multi_classing.proficiencies[1].name +
    ", and " +
    dndClassDescription.multi_classing.proficiencies[2].name +
    ".";

  //Completing other templates.
  classSkillTemplate =
    skillPart1 +
    currentClass +
    skillPart2 +
    skillList +
    skillPart3 +
    equipProficiencies +
    skillPart4 +
    classSavingThrows;

  //classEquipTemplate =
  //equipPart1 +
  //classStartingEquip +
  //equipPart2 +
  //classEquipChoices +
  //equipPart3;

  classMultiTemplate =
    multiPart1 +
    multiclassAbilityScore +
    multiPart2 +
    multiclassScoreNumber +
    multiPart3 +
    multiclassProficiencies;
}

//Adding Descriptions

classButton.addEventListener("click", function (event) {
  classValue = selectClass.value;
  currentClass = classValue;

  if (classValue == "nullClass") {
    classDescriptionBox.textContent = noSelectionError;
  } else {
    fetchDndClasses();
  }
  classSummaryButton.classList.replace("inactive-tab", "selected-tab");
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
