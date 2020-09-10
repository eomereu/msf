var guardiansTeamName = document.getElementById("guardiansTeamName");
var technervaTeamName = document.getElementById("technervaTeamName");
var bktTeamName = document.getElementById("bktTeamName");
var exception = false;
reEventAdditionToGTB(); //adds click listener to gtb (guardins/technerva/bkt) team names

var selects = document.querySelectorAll("select");
for( var i = 0; i < selects.length; i++){
  // Adding event listener on all Selects to change the displayed team name and the teams
  selects[i].addEventListener("change", function(){
    console.log(this.id);
    var tempName = "#" + this.id + "TeamName";
    console.log(tempName);
    if(this.id === "pa20Vs") {
      exception = true;
      console.log(exception);
    }
    if(this.value === "gtb") {
      document.querySelector(tempName).innerHTML = "<span style=\"color: rgb(15, 230, 7);\" id=\"guardiansTeamName\">GUARDIANS </span>/<span id=\"technervaTeamName\"> TECHNERVA </span>/<span id=\"bktTeamName\"> BKT </span>";
      document.getElementById("gtbExp").style.display = "block";
      guardiansTeamName = document.getElementById("guardiansTeamName");
      technervaTeamName = document.getElementById("technervaTeamName");
      bktTeamName = document.getElementById("bktTeamName");
      reEventAdditionToGTB();
    } else if (exception === true && this.value !== "gtb") {
      document.getElementById("gtbExp").style.display = "none";
      document.querySelector(tempName).textContent = this.value;
      document.querySelector(tempName).style = "text-transform: uppercase;";
    }
    exception = false;
  });
}

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