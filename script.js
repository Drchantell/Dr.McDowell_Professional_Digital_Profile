// Personal brand identity used internally by the portfolio
const brand = {
  technology: true,
  leadership: true,
  impact: true
};


const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const items = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
items.forEach(item => observer.observe(item));


// Decorative cyber-code rain for the resume page
const rainLayer = document.querySelector(".matrix-rain");
if (rainLayer) {
  const digitalRainCharacters = "01{}[]<>/\\|ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const streamCount = window.innerWidth < 700 ? 12 : 28;

  for (let i = 0; i < streamCount; i++) {
    const stream = document.createElement("span");
    let text = "";
    for (let j = 0; j < 18; j++) {
      text += digitalRainCharacters[Math.floor(Math.random() * digitalRainCharacters.length)] + "\n";
    }

    stream.textContent = text;
    stream.style.position = "absolute";
    stream.style.left = `${Math.random() * 100}%`;
    stream.style.top = `${-20 - Math.random() * 80}%`;
    stream.style.whiteSpace = "pre";
    stream.style.fontFamily = "ui-monospace, monospace";
    stream.style.fontSize = `${10 + Math.random() * 5}px`;
    stream.style.lineHeight = "1.25";
    stream.style.color = "rgba(255,20,147,.62)";
    stream.style.textShadow = "0 0 8px rgba(255,20,147,.42)";
    stream.style.animation = `matrixStream ${9 + Math.random() * 14}s linear ${Math.random() * -12}s infinite`;

    rainLayer.appendChild(stream);
  }

  const style = document.createElement("style");
  style.textContent = `
    @keyframes matrixStream {
      from { transform: translateY(-25vh); opacity: 0; }
      10% { opacity: .35; }
      85% { opacity: .22; }
      to { transform: translateY(125vh); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}


// Interactive expertise tabs
document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const buttons = tabs.querySelectorAll(".tab-button");
  const panels = tabs.querySelectorAll(".tab-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;

      buttons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });

      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === target);
      });

      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
    });
  });
});
