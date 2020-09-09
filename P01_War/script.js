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