const messages = [
  "Hey my Doraemon!!!"
  "THIS IS FOR YOU 💙💙
  "Aajke hawa ta ektu beshi shanto 🌤️",
  "Ei moment ta just tomar jonno 💙",
  "Choto choto hashi o onek hoy 😊",
  "Doraemon bole— chinta ta ektu pore korbo 😄",
  "Aaj mon halka thaklei enough ✨"
];

let index = 0;
let started = false;

const music = document.getElementById("bgMusic");
music.volume = 0.25;

const msg = document.getElementById("message");
const pocket = document.getElementById("pocket");
const img = document.getElementById("doraemonImg");

// ONE CLICK ONLY
pocket.addEventListener("click", () => {
  if (started) return;
  started = true;

  // start music
  music.play().catch(() => {});
  
  // show message area
  msg.classList.remove("hidden");
  pocket.classList.add("active");

  // change image to Doraemon + Nobita
  img.src = "doraemon2.jpg";

  // start auto messages
  showMessage();
  setInterval(showMessage, 3500);
});

function showMessage() {
  msg.innerText = messages[index];
  index = (index + 1) % messages.length;
}

// floating clouds
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
