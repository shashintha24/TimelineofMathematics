const timelineData = [
  { 
    title: "Ancient Era (before 500 CE)",
    items: [
      "Arithmetic & Number Systems → Sumerians, Babylonians (base-60); Egyptians (fractions); India (zero, Brahmagupta).",
      "Geometry → Pythagoras, Euclid, Archimedes.",
      "Trigonometry → Hipparchus, Aryabhata."
    ]
  },
  {
    title: "Medieval Era (500–1500 CE)",
    items: [
      "Omar Khayyam → cubic equations.",
      "Al-Tusi → spherical trigonometry.",
      "Fibonacci → Hindu–Arabic numerals."
    ]
  },
  {
    title: "Renaissance & Early Modern (1500–1700)",
    items: [
      "François Viète → symbolic algebra.",
      "Pascal & Fermat → probability theory.",
      "René Descartes → Cartesian coordinates.",
      "Newton & Leibniz → calculus."
    ]
  },
  {
    title: "18th Century",
    items: [
      "Euler → functions, graph theory.",
      "Lagrange → calculus of variations.",
      "Jakob Bernoulli → Law of Large Numbers."
    ]
  },
  {
    title: "19th Century",
    items: [
      "Gauss → number theory.",
      "Lobachevsky, Bolyai, Riemann → geometry.",
      "Cauchy, Weierstrass → analysis.",
      "Évariste Galois → group theory.",
      "George Boole → Boolean algebra."
    ]
  },
  {
    title: "20th Century",
    items: [
      "Hilbert → Hilbert’s problems.",
      "Gödel → incompleteness theorems.",
      "Poincaré, Brouwer → topology.",
      "Pearson → statistics.",
      "Turing, Shannon, Erdős → CS, graph theory.",
      "Von Neumann → game theory, quantum mechanics.",
      "Ramanujan → infinite series, partitions."
    ]
  },
  {
    title: "21st Century",
    items: [
      "Cryptography",
      "Data Science",
      "AI & Machine Learning",
      "Quantum Computing"
    ]
  }
];

// Render timeline
const container = document.getElementById("timeline");

timelineData.forEach((era, index) => {
  const card = document.createElement("div");
  card.className = "event";
  card.innerHTML = `<h2>${era.title}</h2>`;
  for (let i = 0; i < era.items.length; i++) {
    card.innerHTML += `<p>${era.items[i]}</p>`;
  }


  // On click → open modal with details
  card.addEventListener("mouseover", () => showModal(era));
  container.appendChild(card);
});

// Modal logic
const modal = document.createElement("div");
modal.id = "modal";
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <div id="modalBody"></div>
  </div>
`;
document.body.appendChild(modal);

// function showModal(era) {
//   const body = modal.querySelector("#modalBody");
//   body.innerHTML = `
//     <h2>${era.title}</h2>
//     <ul>${era.items.map(i => `<li>${i}</li>`).join("")}</ul>
//   `;
//   modal.style.display = "flex";
//   setTimeout(() => modal.classList.add("show"), 10); // trigger scale animation
// }

// // Close modal when clicking outside
// window.onclick = e => {
//   if (e.target === modal) hideModal();
// };

// const closeBtn = modal.querySelector(".close");
// closeBtn.onclick = () => hideModal();

// function hideModal() {
//   modal.classList.remove("show");
//   setTimeout(() => {
//     modal.style.display = "none";
//   }, 300); // match the CSS transition duration
// }