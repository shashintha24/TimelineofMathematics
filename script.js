// Timeline event data
const events = [
  {
    year: -3000,
    title: "Ancient Egypt",
    description: "Earliest records of mathematics for building pyramids.",
    //image: "assets/egypt.jpg",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    category: "Math"
  },
  {
    year: -600,
    title: "Pythagoras",
    description: "Famous for the Pythagorean theorem.",
    video: "assets/pythagoras.mp4",
    category: "Math"
  },
  {
    year: 1600,
    title: "Descartes",
    description: "Father of analytic geometry.",
    category: "Philosophy"
  },
  {
    year: 1900,
    title: "Hilbert",
    description: "Presented his famous 23 problems.",
    category: "Math"
  },
  {
    year: 2000,
    title: "Modern Era",
    description: "Rise of computer science and AI in mathematics.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Science"
  }
];

// SVG setup
const svg = d3.select("#timelineSvg");
const width = 3000;
const height = window.innerHeight + 370;

svg.attr("width", width).attr("height", height);

// Scale for years
const xScale = d3.scaleLinear()
  .domain([d3.min(events, d => d.year) - 500, d3.max(events, d => d.year) + 500])
  .range([100, width - 100]);

// Axis
const xAxis = d3.axisBottom(xScale).ticks(20).tickFormat(d => d < 0 ? `${-d} BC` : `${d} AD`);
svg.append("g")
  .attr("transform", `translate(0, ${height/2})`)
  .call(xAxis);

// Event dots
svg.selectAll("circle")
  .data(events)
  .enter()
  .append("circle")
  .attr("class", "event-dot")
  .attr("cx", d => xScale(d.year))
  .attr("cy", height/2-100)
  .attr("r", 8)
  .on("click", (event, d) => showCard(d, xScale(d.year), height/2));


// Event labels
svg.selectAll("text.event-label")
  .data(events)
  .enter()
  .append("text")
  .attr("class", "event-label")
  .attr("x", d => xScale(d.year))
  .attr("y", height/2 - 20)
  .text(d => d.title);

// Card container
const container = document.getElementById("eventsContainer");

// Show event card
function showCard(eventData, x, y) {
  container.innerHTML = "";
  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "cardOverlay";
  overlay.style.display = "block";
  container.appendChild(overlay);

  const card = document.createElement("div");
  card.className = "event-card";
  card.style.position = "fixed";
  card.style.left = "50%";
  card.style.top = "50%";
  card.style.transform = "translate(-50%, -50%) scale(0.7)";
  card.style.opacity = "0";

  // Video embed logic
  let videoHTML = "";
  if (eventData.video) {
    if (
      eventData.video.includes("youtube.com") ||
      eventData.video.includes("youtu.be")
    ) {
      // Add autoplay=1 for YouTube
      let src = eventData.video;
      if (!src.includes("autoplay=1")) {
        src += (src.includes("?") ? "&" : "?") + "autoplay=1";
      }
      videoHTML = `<iframe src="${src}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="width:100%;height:60vh;"></iframe>`;
    } else {
      // Local video
      videoHTML = `<video controls autoplay style="margin-top:8px;width:100%;border-radius:8px;">
        <source src="${eventData.video}" type="video/mp4">
        Your browser does not support the video tag.
      </video>`;
    }
  }

  card.innerHTML = `
    <h3>${eventData.title} (${eventData.year < 0 ? -eventData.year + " BC" : eventData.year + " AD"})</h3>
    <p>${eventData.description}</p>
    ${eventData.image ? `<img src="${eventData.image}" alt="${eventData.title}">` : ""}
    ${videoHTML}
  `;
  container.appendChild(card);
  card.style.display = "block";
  setTimeout(() => {
    card.style.transform = "translate(-50%, -50%) scale(1)";
    card.style.opacity = "1";
    overlay.style.opacity = "1";
  }, 10);
  card.style.display = "block";
}

function hideCard(card) {
  const overlay = document.getElementById("cardOverlay");
  card.style.transform = "translate(-50%, -50%) scale(0.7)";
  card.style.opacity = "0";
  if (overlay) overlay.style.opacity = "0";
  setTimeout(() => {
    card.style.display = "none";
    if (overlay) overlay.style.display = "none";
  }, 400);
}

// Close event card when clicking outside
document.addEventListener("mousedown", function(e) {
  const card = document.querySelector(".event-card");
  const overlay = document.getElementById("cardOverlay");
  if (card && overlay && (e.target === overlay || !card.contains(e.target))) {
    hideCard(card);
    setTimeout(() => {
      card.remove();
      overlay.remove();
    }, 400);
  }
});

// Modal for videos/images
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close");

document.addEventListener("click", e => {
  if (e.target.classList.contains("open-video")) {
    const src = e.target.getAttribute("data-src");
    let mediaHTML = "";
    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      mediaHTML = `<iframe src="${src}" frameborder="0" allowfullscreen></iframe>`;
    } else {
      mediaHTML = `<video controls autoplay><source src="${src}" type="video/mp4"></video>`;
    }
    modalContent.innerHTML = mediaHTML;
    modal.style.display = "block";
  }
});

closeBtn.onclick = () => {
  modal.style.display = "none";
  modalContent.innerHTML = "";
};
window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalContent.innerHTML = "";
  }
};

// Search filter
const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  svg.selectAll("circle")
    .attr("opacity", d => d.title.toLowerCase().includes(query) ? 1 : 0.2);
  svg.selectAll("text.event-label")
    .attr("opacity", d => d.title.toLowerCase().includes(query) ? 1 : 0.2);
});
