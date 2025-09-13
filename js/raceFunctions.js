//* Fetch Functions

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
      raceSetup();
    })
    .catch((error) => console.error(error));
}

//* Event Functions

//Startup
function raceSetup() {
    
    //Starting Setup
}
//Adding Descriptions

raceButton.addEventListener("click", function (event) {
  raceValue = selectRace.value;
  currentRace = raceValue;
  fetchDndRaces();
});

//Tab Functions
