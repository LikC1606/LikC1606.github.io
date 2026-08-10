const header = document.querySelector("[data-header]");
const readingProgress = document.querySelector("[data-reading-progress]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("main section[id]:not(#top)")];

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
  if (event.key !== "Escape" || menuButton.getAttribute("aria-expanded") !== "true") return;
  closeMenu();
  menuButton.focus();
});

document.addEventListener("pointerdown", (event) => {
  if (menuButton.getAttribute("aria-expanded") !== "true") return;
  if (header.contains(event.target)) return;
  closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 840) closeMenu();
  updateScroll();
});

let ticking = false;
const updateScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  readingProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, progress / 100))})`;
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
      const isActive = link.getAttribute("href") === `#${entry.target.id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-28% 0px -62% 0px" });

sections.forEach((section) => observer.observe(section));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = [...document.querySelectorAll(
  ".hero-copy, .academic-byline, .campus-feature, .section-header, .section-content, .contact-section",
)];

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  revealItems.forEach((item) => item.classList.add("reveal-item"));
  document.documentElement.classList.add("reveal-enabled");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -10% 0px" });

  revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();
updateScroll();
