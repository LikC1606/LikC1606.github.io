const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("main section[id]:not(#top)")];
const progress = document.querySelector("[data-progress]");
const clock = document.querySelector("[data-clock]");

const closeMenu = () => {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  nav.classList.remove("is-open");
};

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
  nav.classList.toggle("is-open", willOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMenu();
});

let scrollTicking = false;
const updateScrollInterface = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  progress.style.width = `${ratio * 100}%`;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
  scrollTicking = false;
};

window.addEventListener("scroll", () => {
  if (!scrollTicking) {
    requestAnimationFrame(updateScrollInterface);
    scrollTicking = true;
  }
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-28% 0px -62% 0px" });

sections.forEach((section) => observer.observe(section));

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Shanghai",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});

const updateClock = () => {
  clock.textContent = timeFormatter.format(new Date());
};

updateClock();
setInterval(updateClock, 1000);
document.querySelector("[data-year]").textContent = new Date().getFullYear();
updateScrollInterface();

const canvas = document.querySelector("[data-signal-field]");
const context = canvas.getContext("2d", { alpha: true });
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let nodes = [];
let frameId = null;
let fieldVisible = true;
let fieldWidth = 0;
let fieldHeight = 0;

const seededValue = (index, salt) => {
  const value = Math.sin(index * 127.1 + salt * 311.7) * 43758.5453;
  return value - Math.floor(value);
};

const buildField = () => {
  const bounds = canvas.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  fieldWidth = Math.max(1, bounds.width);
  fieldHeight = Math.max(1, bounds.height);
  canvas.width = Math.round(fieldWidth * pixelRatio);
  canvas.height = Math.round(fieldHeight * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  const count = Math.min(64, Math.max(26, Math.round((fieldWidth * fieldHeight) / 22000)));
  nodes = Array.from({ length: count }, (_, index) => ({
    x: seededValue(index, 1) * fieldWidth,
    y: seededValue(index, 2) * fieldHeight,
    vx: (seededValue(index, 3) - 0.5) * 0.18,
    vy: (seededValue(index, 4) - 0.5) * 0.18,
    accent: index % 13 === 0 ? "red" : index % 7 === 0 ? "green" : "cyan"
  }));
};

const drawField = (move = true) => {
  context.clearRect(0, 0, fieldWidth, fieldHeight);
  const maxDistance = fieldWidth < 720 ? 92 : 132;

  for (let first = 0; first < nodes.length; first += 1) {
    const node = nodes[first];
    if (move) {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > fieldWidth) node.vx *= -1;
      if (node.y < 0 || node.y > fieldHeight) node.vy *= -1;
    }

    for (let second = first + 1; second < nodes.length; second += 1) {
      const other = nodes[second];
      const distance = Math.hypot(node.x - other.x, node.y - other.y);
      if (distance >= maxDistance) continue;
      const opacity = (1 - distance / maxDistance) * 0.22;
      context.strokeStyle = `rgba(189, 93, 61, ${opacity})`;
      context.lineWidth = 0.65;
      context.beginPath();
      context.moveTo(node.x, node.y);
      context.lineTo(other.x, other.y);
      context.stroke();
    }

    const colors = {
      cyan: "rgba(29, 28, 26, 0.52)",
      green: "rgba(102, 123, 108, 0.64)",
      red: "rgba(217, 119, 87, 0.76)"
    };
    context.fillStyle = colors[node.accent];
    context.fillRect(node.x - 1, node.y - 1, 2, 2);
  }
};

const animateField = () => {
  drawField(!reduceMotion.matches);
  if (!reduceMotion.matches && fieldVisible && !document.hidden) {
    frameId = requestAnimationFrame(animateField);
  }
};

const restartField = () => {
  if (frameId) cancelAnimationFrame(frameId);
  frameId = null;
  if (fieldVisible && !document.hidden) animateField();
};

const resizeObserver = new ResizeObserver(() => {
  buildField();
  restartField();
});

const fieldObserver = new IntersectionObserver(([entry]) => {
  fieldVisible = entry.isIntersecting;
  restartField();
});

resizeObserver.observe(canvas);
fieldObserver.observe(canvas);
reduceMotion.addEventListener("change", restartField);
document.addEventListener("visibilitychange", restartField);
