var guardiansTeamName = document.getElementById("guardiansTeamName");
var technervaTeamName = document.getElementById("technervaTeamName");
var bktTeamName = document.getElementById("bktTeamName");

technervaTeamName.addEventListener("click", function(){
  document.querySelector("#guardiansSlot1").innerHTML = "<img src=\"../imgs/toon_pngs/vision.png\" class=\"resizable\" id=\"vision\" alt=\"vision\">";
  document.querySelector("#guardiansSlot2").innerHTML = "<img src=\"../imgs/toon_pngs/minn_erva.png\" class=\"resizable\" id=\"minn_erva\" alt=\"minn_erva\">";
  this.style.color = "rgb(15, 230, 7)";
  guardiansTeamName.style.color = "white";
  bktTeamName.style.color = "white";
});

var aimtronVs = document.querySelector("#aimtronVsSelect");
aimtronVs.addEventListener("change", function(){
  document.querySelector("#aimtronVsTeamName").textContent = this.value;
  document.querySelector("#aimtronVsTeamName").style = "text-transform: uppercase;";
});

var xforceVs = document.querySelector("#xforceVsSelect");
xforceVs.addEventListener("change", function(){
  document.querySelector("#xforceVsTeamName").textContent = this.value;
  document.querySelector("#xforceVsTeamName").style = "text-transform: uppercase;";
  if(this.value === "em-marauders") { document.querySelector("#xforceVsExp").textContent = "Disrupt Stryfe first" }
  else if(this.value === "asgardians") { document.querySelector("#xforceVsExp").textContent = "Kill them all" }
  else if(this.value === "mercs") { document.querySelector("#xforceVsExp").textContent = "Mercs are easy" }
  else { document.querySelector("#xforceVsExp").textContent = "Black order is so strong" }
});







/*
var vsSelections = document.getElementsByTagName("select");
console.log(vsSelections);
var i;
for( i = 0; i < vsSelections.length; i++){
  console.log(vsSelections[i]);
  vsSelections[i].addEventListener("change", function(){
    console.log(vsSelections.item(i));
    var tempName = "#" + vsSelections[i].getAttribute("id") + "TeamName";
    var tempExp = "#" + vsSelections[i].getAttribute("id") + "Exp";
    console.log(tempName + " " + tempExp);
    document.querySelector(tempName).textContent = this.value;
    document.querySelector(tempName).style = "text-transform: uppercase;";
    document.querySelector(tempExp).textContent = "Lorem ipsum...";
  });
};*/