// Pleasing messages (your chosen set)
const messages = [
  "Aajke hawa ta ektu beshi shanto 🌤️",
  "Ei moment ta just tomar jonno 💙",
  "Choto choto hashi o onek hoy 😊",
  "Doraemon bole— chinta ta ektu pore korbo 😄",
  "Aaj mon halka thaklei enough ✨"
];

let index = 0;

// Show messages one by one
function showMessage() {
  const msg = document.getElementById("message");
  msg.classList.remove("hidden");
  msg.innerText = messages[index];
  index = (index + 1) % messages.length;
}

// Floating cloud animation
function createCloud() {
  const cloud = document.createElement("span");
  const size = Math.random() * 120 + 60;

  cloud.style.width = size + "px";
  cloud.style.height = size / 2 + "px";
  cloud.style.top = Math.random() * 60 + "%";
  cloud.style.left = "-150px";

  document.getElementById("clouds").appendChild(cloud);

  let pos = -150;
  const speed = Math.random() * 0.4 + 0.2;

  const move = setInterval(() => {
    pos += speed;
    cloud.style.left = pos + "px";

    if (pos > window.innerWidth) {
      cloud.remove();
      clearInterval(move);
    }
  }, 20);
}

setInterval(createCloud, 3000);

// Background music autoplay handling
const music = document.getElementById("bgMusic");
music.volume = 0.25;

// Try autoplay on load
window.addEventListener("load", () => {
  music.play().catch(() => {
    // If blocked, play on first interaction
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});
