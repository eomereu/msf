var guardiansTeamName = document.getElementById("guardiansTeamName");
var technervaTeamName = document.getElementById("technervaTeamName");
var bktTeamName = document.getElementById("bktTeamName");
var exception = false; //this is for the teams that have multiple choices at the same time like "Guardians / Technerva / BKT"
reEventAdditionToGTB(); //adds click listener to gtb (guardins/technerva/bkt) team names

var selects = document.querySelectorAll("select");
for( var i = 0; i < selects.length; i++){
  // Adding event listener on all Selects to change the displayed team name and the teams
  selects[i].addEventListener("change", function(){
    var tempName = "#" + this.id + "TeamName";

    // Setting 'exception' to true if the vs is against multi-choiced opponent like "Guardians / Technerva / BKT"
    if(this.id === "pa20Vs") {
      exception = true;
    }

    // Checking if the case is an exceptional case or not
    if(this.value === "gtb") {
      document.querySelector(tempName).innerHTML = "<span style=\"color: rgb(15, 230, 7);\" id=\"guardiansTeamName\">GUARDIANS </span>/<span id=\"technervaTeamName\"> TECHNERVA </span>/<span id=\"bktTeamName\"> BKT </span> <i class=\"fas fa-check-circle\"></i>";
      // Showing the explanation "Click on team names to switch to that team!"
      document.getElementById("gtbExp").style.display = "block";
      // Setting the variables and adding the click listener to team names again
      guardiansTeamName = document.getElementById("guardiansTeamName");
      technervaTeamName = document.getElementById("technervaTeamName");
      bktTeamName = document.getElementById("bktTeamName");
      reEventAdditionToGTB();
    } else if (exception === true && this.value !== "gtb") {
      // Hiding the explanation "Click on team names to switch to that team!"
      document.getElementById("gtbExp").style.display = "none";
      document.querySelector(tempName).textContent = this.value;
      document.querySelector(tempName).style = "text-transform: uppercase;";
    } else {
      // Checking if the selection is a recommended one or not and adding a tick accordingly to the team name
      if(this.value === this[0].value) {
        document.querySelector(tempName).innerHTML = this.value + " <i class=\"fas fa-check-circle\"></i>";
      } else {
        document.querySelector(tempName).textContent = this.value;
      }
      // Styling the text and setting 'exception' to the default value again
      document.querySelector(tempName).style = "text-transform: uppercase;";
      exception = false;
    }

    // Team setter functions,
    switch(this.value){
      case "asgardians":
        makeAsgardian(this.id);
        break;
      case "brotherhood 2.0":
        makeBrotherhood20(this.id);
        break;
      case "em-marauders":
        makeEmmarauders(this.id);
        break;
      case "mercs":
        makeMercs(this.id);
        break;
      case "brotherhood 2.0":
        makeBrotherhood20(this.id);
        break;
      case "brotherhood 2.0":
        makeBrotherhood20(this.id);
        break;
      case "brotherhood 2.0":
        makeBrotherhood20(this.id);
        break;
    }

  });
}

// Defining the function that arranges the "Guardians / Technerva / BKT" team selection
function reEventAdditionToGTB(){
  technervaTeamName.addEventListener("click", function(){
    document.querySelectorAll(".guardiansSlot1")[0].innerHTML = "<img src=\"../imgs/toon_pngs/vision.png\" class=\"resizable\" id=\"vision\" alt=\"vision\">";
    document.querySelectorAll(".guardiansSlot1")[1].innerHTML = "<img src=\"../imgs/toon_pngs/vision.png\" class=\"resizable\" id=\"vision\" alt=\"vision\">";
    document.querySelectorAll(".guardiansSlot2")[0].innerHTML = "<img src=\"../imgs/toon_pngs/minn_erva.png\" class=\"resizable\" id=\"minn_erva\" alt=\"minn_erva\">";
    document.querySelectorAll(".guardiansSlot2")[1].innerHTML = "<img src=\"../imgs/toon_pngs/minn_erva.png\" class=\"resizable\" id=\"minn_erva\" alt=\"minn_erva\">";
    this.style.color = "rgb(15, 230, 7)";
    guardiansTeamName.style.color = "white";
    bktTeamName.style.color = "white";
  });
    bktTeamName.addEventListener("click", function(){
    document.querySelectorAll(".guardiansSlot1")[0].innerHTML = "<img src=\"../imgs/toon_pngs/minn_erva.png\" class=\"resizable\" id=\"minn_erva\" alt=\"minn_erva\">";
    document.querySelectorAll(".guardiansSlot1")[1].innerHTML = "<img src=\"../imgs/toon_pngs/minn_erva.png\" class=\"resizable\" id=\"minn_erva\" alt=\"minn_erva\">";
    document.querySelectorAll(".guardiansSlot2")[0].innerHTML = "<img src=\"../imgs/toon_pngs/thanos.png\" class=\"resizable\" id=\"thanos\" alt=\"thanos\">";
    document.querySelectorAll(".guardiansSlot2")[1].innerHTML = "<img src=\"../imgs/toon_pngs/thanos.png\" class=\"resizable\" id=\"thanos\" alt=\"thanos\">";
    this.style.color = "rgb(15, 230, 7)";
    technervaTeamName.style.color = "white";
    guardiansTeamName.style.color = "white";
  });
    guardiansTeamName.addEventListener("click", function(){
    document.querySelectorAll(".guardiansSlot1")[0].innerHTML = "<img src=\"../imgs/toon_pngs/drax.png\" class=\"resizable\" id=\"drax\" alt=\"drax\">";
    document.querySelectorAll(".guardiansSlot1")[1].innerHTML = "<img src=\"../imgs/toon_pngs/drax.png\" class=\"resizable\" id=\"drax\" alt=\"drax\">";
    document.querySelectorAll(".guardiansSlot2")[0].innerHTML = "<img src=\"../imgs/toon_pngs/mantis.png\" class=\"resizable\" id=\"mantis\" alt=\"mantis\">";
    document.querySelectorAll(".guardiansSlot2")[1].innerHTML = "<img src=\"../imgs/toon_pngs/mantis.png\" class=\"resizable\" id=\"mantis\" alt=\"mantis\">";
    this.style.color = "rgb(15, 230, 7)";
    technervaTeamName.style.color = "white";
    bktTeamName.style.color = "white";
  });
}

// Team changer functions
function makeAsgardian(usedTeamId){
  var opponent = []
  for(var i = 0; i < 5; i++) {
    opponent.push(usedTeamId + "Slot" + i);
  }
  document.getElementById(opponent[0]).innerHTML = document.getElementById("_" + opponent[0]).innerHTML = "<img src=\"../imgs/toon_pngs/sif.png\" class=\"resizable\" id=\"sif\" alt=\"sif\">";
  document.getElementById(opponent[1]).innerHTML = document.getElementById("_" + opponent[1]).innerHTML = "<img src=\"../imgs/toon_pngs/heimdall.png\" class=\"resizable\" id=\"heimdall\" alt=\"heimdall\">";
  document.getElementById(opponent[2]).innerHTML = document.getElementById("_" + opponent[2]).innerHTML = "<img src=\"../imgs/toon_pngs/thor.png\" class=\"resizable\" id=\"thor\" alt=\"thor\">";
  document.getElementById(opponent[3]).innerHTML = document.getElementById("_" + opponent[3]).innerHTML = "<img src=\"../imgs/toon_pngs/hela.png\" class=\"resizable\" id=\"hela\" alt=\"hela\">";
  document.getElementById(opponent[4]).innerHTML = document.getElementById("_" + opponent[4]).innerHTML = "<img src=\"../imgs/toon_pngs/loki.png\" class=\"resizable\" id=\"loki\" alt=\"loki\">";
}
function makeBrotherhood20(usedTeamId){
  var opponent = []
  for(var i = 0; i < 5; i++) {
    opponent.push(usedTeamId + "Slot" + i);
  }
  document.getElementById(opponent[0]).innerHTML = document.getElementById("_" + opponent[0]).innerHTML = "<img src=\"../imgs/toon_pngs/magneto.png\" class=\"resizable\" id=\"magneto\" alt=\"magneto\">";
  document.getElementById(opponent[1]).innerHTML = document.getElementById("_" + opponent[1]).innerHTML = "<img src=\"../imgs/toon_pngs/pyro.png\" class=\"resizable\" id=\"pyro\" alt=\"pyro\">";
  document.getElementById(opponent[2]).innerHTML = document.getElementById("_" + opponent[2]).innerHTML = "<img src=\"../imgs/toon_pngs/toad.png\" class=\"resizable\" id=\"toad\" alt=\"toad\">";
  document.getElementById(opponent[3]).innerHTML = document.getElementById("_" + opponent[3]).innerHTML = "<img src=\"../imgs/toon_pngs/blob.png\" class=\"resizable\" id=\"blob\" alt=\"blob\">";
  document.getElementById(opponent[4]).innerHTML = document.getElementById("_" + opponent[4]).innerHTML = "<img src=\"../imgs/toon_pngs/juggernaut.png\" class=\"resizable\" id=\"juggernaut\" alt=\"juggernaut\">";
}
function makeEmmarauders(usedTeamId){
  var opponent = []
  for(var i = 0; i < 5; i++) {
    opponent.push(usedTeamId + "Slot" + i);
  }
  document.getElementById(opponent[0]).innerHTML = document.getElementById("_" + opponent[0]).innerHTML = "<img src=\"../imgs/toon_pngs/sabretooth.png\" class=\"resizable\" id=\"sabretooth\" alt=\"sabretooth\">";
  document.getElementById(opponent[1]).innerHTML = document.getElementById("_" + opponent[1]).innerHTML = "<img src=\"../imgs/toon_pngs/emma_frost.png\" class=\"resizable\" id=\"emma_frost\" alt=\"emma_frost\">";
  document.getElementById(opponent[2]).innerHTML = document.getElementById("_" + opponent[2]).innerHTML = "<img src=\"../imgs/toon_pngs/mr_sinister.png\" class=\"resizable\" id=\"mr_sinister\" alt=\"mr_sinister\">";
  document.getElementById(opponent[3]).innerHTML = document.getElementById("_" + opponent[3]).innerHTML = "<img src=\"../imgs/toon_pngs/mystique.png\" class=\"resizable\" id=\"mystique\" alt=\"mystique\">";
  document.getElementById(opponent[4]).innerHTML = document.getElementById("_" + opponent[4]).innerHTML = "<img src=\"../imgs/toon_pngs/stryfe.png\" class=\"resizable\" id=\"stryfe\" alt=\"stryfe\">";
}
function makeMercs(usedTeamId){
  var opponent = []
  for(var i = 0; i < 5; i++) {
    opponent.push(usedTeamId + "Slot" + i);
  }
  document.getElementById(opponent[0]).innerHTML = document.getElementById("_" + opponent[0]).innerHTML = "<img src=\"../imgs/toon_pngs/bullseye.png\" class=\"resizable\" id=\"bullseye\" alt=\"bullseye\">";
  document.getElementById(opponent[1]).innerHTML = document.getElementById("_" + opponent[1]).innerHTML = "<img src=\"../imgs/toon_pngs/hulk.png\" class=\"resizable blank-hero\" id=\"hulk\" alt=\"hulk\">";
  document.getElementById(opponent[2]).innerHTML = document.getElementById("_" + opponent[2]).innerHTML = "<img src=\"../imgs/toon_pngs/taskmaster.png\" class=\"resizable\" id=\"taskmaster\" alt=\"taskmaster\">";
  document.getElementById(opponent[3]).innerHTML = document.getElementById("_" + opponent[3]).innerHTML = "<img src=\"../imgs/toon_pngs/merc_riot_guard.png\" class=\"resizable\" id=\"merc_riot_guard\" alt=\"merc_riot_guard\">";
  document.getElementById(opponent[4]).innerHTML = document.getElementById("_" + opponent[4]).innerHTML = "<img src=\"../imgs/toon_pngs/bullseye.png\" class=\"resizable\" id=\"bullseye\" alt=\"bullseye\">";
}