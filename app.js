const opponents = [
  {
    name: "Akhil",
    city: "Kochi",
    status: "Online"
  },
  {
    name: "Rahul",
    city: "Kozhikode",
    status: "Online"
  },
  {
    name: "Fahad",
    city: "Malappuram",
    status: "Online"
  }
];

function login() {
  document.querySelector(".card").style.display = "none";
  document.getElementById("home").classList.remove("hidden");
}

function findOpponent() {
  const player =
    opponents[Math.floor(Math.random() * opponents.length)];

  document.getElementById("result").innerHTML = `
    <h2>Opponent Found!</h2>
    <p><strong>Name:</strong> ${player.name}</p>
    <p><strong>City:</strong> ${player.city}</p>
    <p><strong>Status:</strong> ${player.status}</p>
    <button onclick="challenge('${player.name}')">
      Challenge
    </button>
  `;

  document.getElementById("result").classList.remove("hidden");
}

function challenge(name) {
  alert("Challenge sent to " + name);
}
