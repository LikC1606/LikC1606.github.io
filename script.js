const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("main section[id]:not(#top)")];
const progress = document.querySelector("[data-progress]");

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
  if (window.innerWidth > 840) closeMenu();
});

let ticking = false;
const updateScroll = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) * 100 : 0}%`;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
  ticking = false;
};

window.addEventListener("scroll", () => {
  if (ticking) return;
  requestAnimationFrame(updateScroll);
  ticking = true;
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
document.querySelector("[data-year]").textContent = new Date().getFullYear();
updateScroll();
