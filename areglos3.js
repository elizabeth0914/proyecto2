const first_player = new Array("labrador", 40, "5'10");
const second_player = ["chihuagua", 35, "5’5"];
const third_player = [];


third_player[0] = "Dee";
third_player[1] = 40;
third_player[2] = "5'10";


first_player.push("Actress");
first_player.pop(3);

third_player[0] = "Deandra";

const total_players = [first_player, second_player, third_player];
total_players.sort();

for (i = 0; i <= total_players.length - 1; i++) {
  const player = total_players[i];
  let playerInstance = document.createElement("LI");
  document.getElementById("playerData").appendChild(playerInstance);
  playerInstance.setAttribute("id", `player${i}`);
  let playerNumber = document.createElement("LI");
  document.getElementById("list").appendChild(playerNumber);
  playerNumber.setAttribute("id", `playerNum${i + 1}`);

  let playerNum = document.createTextNode(`${i + 1} `);
  playerNumber.appendChild(playerNum);
  let idx = 0;
  do {
    let playerInfo = document.createTextNode(`${player[idx]}`);
    playerInstance.appendChild(playerInfo);
    let comma = document.createTextNode(`, `);

    idx++;

    if (idx < player.length) playerInstance.appendChild(comma);
  } while (
    idx < player.length
  );
}