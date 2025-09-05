// Timeline data
const events = [
  {
    year: "3000 BC",
    title: "Ancient Egypt",
    description: "Earliest records of mathematics for building pyramids.",
    image: "assets/egypt.jpg",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY"
  },
  {
    year: "600 BC",
    title: "Pythagoras",
    description: "Famous for the Pythagorean theorem.",
    video: "assets/pythagoras.mp4"
  },
  {
    year: "1600 AD",
    title: "Descartes",
    description: "Father of analytic geometry."
  },
  {
    year: "1900 AD",
    title: "Hilbert",
    description: "Presented his famous 23 problems."
  },
  {
    year: "2000 AD",
    title: "Modern Era",
    description: "Rise of computer science and AI in mathematics.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

function createMediaHTML(event) {
  if (event.video) {
    if (event.video.includes("youtube.com") || event.video.includes("youtu.be")) {
      return `<button class="open-video" data-src="${event.video}">▶ Watch Video</button>`;
    } else {
      return `<button class="open-video" data-src="${event.video}">▶ Play Video</button>`;
    }
  } else if (event.image) {
    return `<img src="${event.image}" alt="${event.title}">`;
  }
  return "";
}

// Render timeline
const timeline = document.getElementById("timeline");

events.forEach(event => {
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event");

  eventDiv.innerHTML = `
    <div class="dot"></div>
    <span>${event.year}</span>
    <div class="card">
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      ${createMediaHTML(event)}
    </div>
  `;

  eventDiv.addEventListener("click", () => {
    document.querySelectorAll(".event").forEach(e => e.classList.remove("active"));
    eventDiv.classList.add("active");
  });

  timeline.appendChild(eventDiv);
});

// Auto-scroll to middle
timeline.scrollLeft = timeline.scrollWidth / 2 - window.innerWidth / 2;

// Modal logic
const modal = document.getElementById("videoModal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close");

document.addEventListener("click", e => {
  if (e.target.classList.contains("open-video")) {
    const src = e.target.getAttribute("data-src");
    let mediaHTML = "";
    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      mediaHTML = `<iframe src="${src}" frameborder="0" allowfullscreen></iframe>`;
    } else {
      mediaHTML = `<video controls autoplay>
                     <source src="${src}" type="video/mp4">
                   </video>`;
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

// GSAP animation (dots bounce in)
gsap.from(".dot", {
  scale: 0,
  duration: 0.6,
  ease: "back.out(1.7)",
  stagger: 0.2
});
