document.addEventListener("DOMContentLoaded", () => {

  const messages = [
    "Hey my Doraemon 💙💙",
    "Aajke hawa ta ektu beshi shanto 🌤️",
    "Ei moment ta just tomar jonno 💙",
    "Choto choto hashi o onek hoy 😊",
    "Doraemon bole— chinta ta ektu pore korbo 😄",
    "Aaj mon halka thaklei enough ✨"
  ];

  let index = 0;
  let started = false;

  const music = document.getElementById("bgMusic");
  const msg = document.getElementById("message");
  const pocket = document.getElementById("pocket");
  const img = document.getElementById("doraemonImg");

  music.volume = 0.25;

  // 🔵 POCKET CLICK — ONLY ONCE
  pocket.addEventListener("click", () => {
    if (started) return;
    started = true;

    // play music
    music.play().catch(() => {});

    // activate pocket animation
    pocket.classList.add("active");

    // show message area
    msg.classList.remove("hidden");

    // switch image
    img.src = "doraemon2.jpg";

    // start message rotation
    showMessage();
    setInterval(showMessage, 3500);
  });

  function showMessage() {
    msg.innerText = messages[index];
    index = (index + 1) % messages.length;
  }

  // ☁️ floating clouds
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
});
