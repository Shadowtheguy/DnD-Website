//* Fetch Functions

//Main Fetch

function fetchDndRaces() {
  console.log("Fetching Races for DND 5e");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://www.dnd5eapi.co/api/2014/races/" + currentRace, requestOptions)
    .then((response) => response.json())
    .then(async function (result) {
      console.log(result);
      dndRaceDescription = result;
      await printTraits();
      raceSetup();
    })
    .catch((error) => console.error(error));
}

//Race Traits

function fetchTrait1() {
  console.log("Fetching the first Racial Trait");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch("https://www.dnd5eapi.co" + raceTrait1URL, requestOptions)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      raceTrait1 = result;
      raceTrait1Description = raceTrait1.name + " - " + raceTrait1.desc[0];
    })
    .catch((error) => console.error(error));
}

function fetchTrait2() {
  console.log("Fetching the second Racial Trait");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch("https://www.dnd5eapi.co" + raceTrait2URL, requestOptions)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      raceTrait2 = result;
      raceTrait2Description = raceTrait2.name + " - " + raceTrait2.desc[0];
    })
    .catch((error) => console.error(error));
}

function fetchTrait3() {
  console.log("Fetching the third Racial Trait");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch("https://www.dnd5eapi.co" + raceTrait3URL, requestOptions)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      raceTrait3 = result;
      raceTrait3Description = raceTrait3.name + " - " + raceTrait3.desc[0];
    })
    .catch((error) => console.error(error));
}

function fetchTrait4() {
  console.log("Fetching the fourth Racial Trait");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch("https://www.dnd5eapi.co" + raceTrait4URL, requestOptions)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      raceTrait4 = result;
      raceTrait4Description = raceTrait4.name + " - " + raceTrait4.desc[0];
    })
    .catch((error) => console.error(error));
}

//* Event Functions

async function printTraits() {
  const traitPromises = [];

  //* Identifying and Fetching Racial Traits
  if (dndRaceDescription.traits[0] !== undefined) {
    raceTrait1URL = dndRaceDescription.traits[0].url;

    fetchTrait1();
    traitPromises.push(fetchTrait1());
  }

  if (dndRaceDescription.traits[1] !== undefined) {
    raceTrait2URL = dndRaceDescription.traits[1].url;

    fetchTrait2();
    traitPromises.push(fetchTrait2());
  }

  if (dndRaceDescription.traits[2] !== undefined) {
    raceTrait3URL = dndRaceDescription.traits[2].url;

    fetchTrait3();
    traitPromises.push(fetchTrait3());
  }

  if (dndRaceDescription.traits[3] !== undefined) {
    raceTrait4URL = dndRaceDescription.traits[3].url;

    fetchTrait4();
    traitPromises.push(fetchTrait4());
  }

  await Promise.all(traitPromises);
}

//Startup
function raceSetup() {
  //* Stating Variables with JSON Data

  //Description Variables
  raceDescriptionTemplate =
    dndRaceDescription.alignment +
    " " +
    dndRaceDescription.age +
    " " +
    dndRaceDescription.size_description;

  //Ability Variables
  raceAbilityTemplate = "Temp";

  //Stats Variables
  proficiencyList = "As a " + currentRace + ", you start off proficient with ";

  if (dndRaceDescription.starting_proficiencies[0] == undefined) {
    proficiencyList = "You don't start off with any guaranteed proficiencies, ";
  }

  if (dndRaceDescription.starting_proficiencies[0] !== undefined) {
    proficiencyList =
      proficiencyList + dndRaceDescription.starting_proficiencies[0].name;
  }

  if (dndRaceDescription.starting_proficiencies[1] !== undefined) {
    proficiencyList =
      proficiencyList +
      ", " +
      dndRaceDescription.starting_proficiencies[1].name;
  }

  if (dndRaceDescription.starting_proficiencies[2] !== undefined) {
    proficiencyList =
      proficiencyList +
      ", " +
      dndRaceDescription.starting_proficiencies[2].name;
  }

  if (dndRaceDescription.starting_proficiencies[3] !== undefined) {
    proficiencyList =
      proficiencyList +
      ", " +
      dndRaceDescription.starting_proficiencies[3].name;
  }

  if (dndRaceDescription.starting_proficiency_options == undefined) {
    proficiencyChoices = "and you don't learn any others through choices.";
  }

  if (dndRaceDescription.starting_proficiency_options !== undefined) {
    proficiencyChoices = dndRaceDescription.starting_proficiency_options.desc;
  }

  languagesKnown = dndRaceDescription.language_desc;

  if (dndRaceDescription.ability_bonuses[0] == undefined) {
    statIncrease =
      "Sadly, the website doesn't work with subclasses yet, so your stat increase is currently unknown.";
  }

  if (dndRaceDescription.ability_bonuses[0] !== undefined) {
    statIncrease =
      "Also, your " +
      dndRaceDescription.ability_bonuses[0].ability_score.name +
      " goes up by " +
      dndRaceDescription.ability_bonuses[0].bonus;
  }

  if (dndRaceDescription.ability_bonuses[1] !== undefined) {
    statIncrease =
      " and your " +
      dndRaceDescription.ability_bonuses[1].ability_score.name +
      " goes up by " +
      dndRaceDescription.ability_bonuses[1].bonus;
  }

  if (dndRaceDescription.ability_bonuses[5] !== undefined) {
    statIncrease = "Also, all of your stats increase by one!";
  }

  //Completing the Templates
  raceStatsTemplate =
    proficiencyList +
    " " +
    proficiencyChoices +
    " " +
    languagesKnown +
    " " +
    statIncrease;

  raceAbilityTemplate =
    raceTrait1Description +
    "<br><br>" +
    raceTrait2Description +
    "<br><br>" +
    raceTrait3Description +
    "<br><br>" +
    raceTrait4Description;
  //Starting Setup
  raceDescriptionBox.textContent = raceDescriptionTemplate;
}
//Adding Descriptions

raceButton.addEventListener("click", function (event) {
  raceValue = selectRace.value;
  currentRace = raceValue;

  if (raceValue == "nullRace") {
    raceDescriptionBox.textContent = noSelectionError;
  } else {
    fetchDndRaces();
  }
  currentTab = document.getElementsByClassName("selected-tab");

  for (i = 0; i < currentTab.length; i++) {
    currentTab[i].className = currentTab[i].className.replace(
      "selected-tab",
      "inactive-tab"
    );
  }
  raceDescriptionButton.classList.replace("inactive-tab", "selected-tab");
});

//Tab Functions
raceDescriptionButton.addEventListener("click", function (event) {
  raceDescriptionBox.textContent = raceDescriptionTemplate;
  currentTab = document.getElementsByClassName("selected-tab");

  for (i = 0; i < currentTab.length; i++) {
    currentTab[i].className = currentTab[i].className.replace(
      "selected-tab",
      "inactive-tab"
    );
  }

  raceDescriptionButton.classList.replace("inactive-tab", "selected-tab");
});

raceAbilityButton.addEventListener("click", function (event) {
  raceDescriptionBox.innerHTML = raceAbilityTemplate;
  currentTab = document.getElementsByClassName("selected-tab");

  for (i = 0; i < currentTab.length; i++) {
    currentTab[i].className = currentTab[i].className.replace(
      "selected-tab",
      "inactive-tab"
    );
  }

  raceAbilityButton.classList.replace("inactive-tab", "selected-tab");
});

raceStatsButton.addEventListener("click", function (event) {
  raceDescriptionBox.textContent = raceStatsTemplate;
  currentTab = document.getElementsByClassName("selected-tab");

  for (i = 0; i < currentTab.length; i++) {
    currentTab[i].className = currentTab[i].className.replace(
      "selected-tab",
      "inactive-tab"
    );
  }

  raceStatsButton.classList.replace("inactive-tab", "selected-tab");
});
