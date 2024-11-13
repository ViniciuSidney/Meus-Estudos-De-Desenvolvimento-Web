
let time1 = prompt("Digite o Time da Casa: ");
let time2 = prompt("Digite o Time Visitante: ");
let gols1 = prompt("Digite o número de gols do Time da Casa: ");
let gols2 = prompt("Digite o número de gols do Time Visitante: ");

let total_de_gols = parseInt(gols1) + parseInt(gols2);

let vencedor;

if (parseInt(gols1) > parseInt(gols2)) {
  vencedor = time1;
} else if (parseInt(gols2) > parseInt(gols1)) {
  vencedor = time2;
} else {
  vencedor = "Empate!";
}

document.getElementById("placar").innerHTML =
  time1 + " - " + parseInt(gols1) + " x " + parseInt(gols2) + "  - " + time2;

document.getElementById("total-de-gols").innerHTML = total_de_gols;

document.getElementById("vencedor").innerHTML = vencedor;
