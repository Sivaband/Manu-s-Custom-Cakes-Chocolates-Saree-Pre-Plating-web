// Mobile Menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// WhatsApp open
function openWhatsApp() {
  const phoneNumber = "918074212846";
  const text = "Hi, I want to enquire about your services.";
  const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
