// Timeline dataset with categories + images
const events = [
  { year: "3000 BC", title: "Ancient Egypt", description: "Used early mathematics in construction and trade.", category: "Geometry", image: "images/egypt.jpg" },
  { year: "600 BC", title: "Pythagoras", description: "Introduced Pythagorean theorem and number philosophy.", category: "Geometry", image: "images/pythagoras.jpg" },
  { year: "300 BC", title: "Euclid", description: "Father of geometry, wrote 'Elements'.", category: "Geometry", image: "images/euclid.jpg" },
  { year: "200 BC", title: "Archimedes", description: "Made contributions to geometry, calculus, and physics.", category: "Geometry", image: "images/archimedes.jpg" },
  { year: "800 AD", title: "Al-Khwarizmi", description: "Introduced algebra to the world.", category: "Algebra", image: "images/alkhwarizmi.jpg" },
  { year: "1600 AD", title: "Descartes", description: "Linked algebra and geometry with analytic geometry.", category: "Algebra", image: "images/descartes.jpg" },
  { year: "1700 AD", title: "Newton & Leibniz", description: "Independently developed calculus.", category: "Calculus", image: "images/newton.jpg" },
  { year: "1900 AD", title: "Hilbert", description: "Famous 23 problems shaping 20th-century mathematics.", category: "Theory", image: "images/hilbert.jpg" },
  { year: "1950 AD", title: "Alan Turing", description: "Pioneer of computer science and mathematical logic.", category: "Computer Science", image: "images/turing.jpg" },
  { year: "2000 AD", title: "Modern Era", description: "AI and big data revolutionize applied mathematics.", category: "Computer Science", image: "images/ai.jpg" }
];

// Category colors
const categoryColors = {
  "Geometry": "#ff5722",
  "Algebra": "#4caf50",
  "Calculus": "#9c27b0",
  "Theory": "#2196f3",
  "Computer Science": "#ff9800"
};

const timeline = document.getElementById("timeline");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlayYear = document.getElementById("overlayYear");
const overlayDesc = document.getElementById("overlayDesc");
const overlayImg = document.getElementById("overlayImg");
const closeOverlay = document.getElementById("closeOverlay");

// Render events
events.forEach(event => {
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event");

  eventDiv.innerHTML = `
    <div class="dot" style="background:${categoryColors[event.category]}"></div>
    <span>${event.year}</span>
  `;

  // Click -> Show popup
  eventDiv.addEventListener("click", () => {
    document.querySelectorAll(".event").forEach(e => e.classList.remove("active"));
    eventDiv.classList.add("active");

    overlayTitle.textContent = event.title;
    overlayYear.textContent = event.year + " — " + event.category;
    overlayDesc.textContent = event.description;
    overlayImg.src = event.image;
    overlay.style.display = "flex";
  });

  timeline.appendChild(eventDiv);
});

// Close popup
closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Zoom controls
let zoomLevel = 1;
const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const resetZoomBtn = document.getElementById("resetZoom");

zoomInBtn.addEventListener("click", () => {
  zoomLevel += 0.1;
  timeline.style.transform = `scale(${zoomLevel})`;
  timeline.style.transformOrigin = "center";
});

zoomOutBtn.addEventListener("click", () => {
  if (zoomLevel > 0.5) {
    zoomLevel -= 0.1;
    timeline.style.transform = `scale(${zoomLevel})`;
    timeline.style.transformOrigin = "center";
  }
});

resetZoomBtn.addEventListener("click", () => {
  zoomLevel = 1;
  timeline.style.transform = "scale(1)";
});

// Search functionality
document.getElementById("searchBox").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".event").forEach((ev, i) => {
    const matches = events[i].title.toLowerCase().includes(query) || events[i].year.includes(query);
    ev.style.display = matches ? "inline-block" : "none";
  });
});

// Scroll animation reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".event").forEach(ev => observer.observe(ev));

// Auto-center timeline
timeline.scrollLeft = timeline.scrollWidth / 2 - window.innerWidth / 2;
