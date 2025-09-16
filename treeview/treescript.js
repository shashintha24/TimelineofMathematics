const events = [
  {
    date: " 200–284",
    title: "Diophantus of Alexandria",
    subtitle: "Greek or Egyptian, 'father of algebra'",
    body: "Wrote a series of books 'Arithmetica'.",
    detail: "Diophantus made significant contributions to algebra, particularly in the area of solving algebraic equations. His work 'Arithmetica' is a collection of problems and solutions that laid the groundwork for future developments in algebra. He introduced methods for solving linear and quadratic equations and is often credited with early work on what would later be known as Diophantine equations, which are polynomial equations where integer solutions are sought.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/%CE%94%CE%B9%CF%8C%CF%86%CE%B1%CE%BD%CF%84%CE%BF%CF%82_-_Diophantos_-_%D0%94%D0%98%D0%9E%D0%A4%D0%90%D0%9D%D0%A2.jpg",
    video: "https://www.youtube.com/embed/8r7TLzLmB8c?si=d0AWYnfhX-ufm-_z" // <-- Add this
  },
  {
    date: "476–550 ",
    title: "Aryabhata",
    subtitle: "Indian mathematician and astronomer",
    body: "Developed place value system, introduced zero, and gave approximations of π.",
    detail: "Aryabhata was a pioneering Indian mathematician and astronomer who made significant contributions to the fields of mathematics and astronomy. He is credited with developing the place value system, which is fundamental to modern arithmetic, and he introduced the concept of zero as a numeral. Aryabhata also provided an accurate approximation of π (pi) and worked on trigonometric functions, laying the groundwork for future advancements in these areas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aryabhatta_of_Bihar.jpg/330px-Aryabhatta_of_Bihar.jpg",
    audio: "../assets/voice/shapeofyou.mp3"
  },
  {
    date: "1048–1131 ",
    title: "Omar Khayyam",
    subtitle: "Persian mathematician, poet, philosopher",
    body: "Classified cubic equations, linked algebra to geometry.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hakim_Omar_Khayam_-_panoramio.jpg/500px-Hakim_Omar_Khayam_-_panoramio.jpg"
  },
  {
    date: "1114–1185",
    title: "Bhāskara II",
    subtitle: "Indian mathematician",
    body: "Proved Pythagorean theorem, explained quadratic, cubic, and quartic solutions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Teorema_de_Pit%C3%A1goras.Bhaskara.svg/390px-Teorema_de_Pit%C3%A1goras.Bhaskara.svg.png",
    video: "https://www.youtube.com/embed/G4nzC0C62d8?si=xCrQImyc_gfRBkGa"
  },
  {
    date: "1170–1250",
    title: "Fibonacci",
    subtitle: "Italian mathematician",
    body: "Introduced Hindu-Arabic numerals to Europe in Liber Abaci, famous for Fibonacci sequence.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Leonardo_da_Pisa.jpg/500px-Leonardo_da_Pisa.jpg"
  },
  {
    date: "1201–1274",
    title: "Nasir al-Din Tusi",
    subtitle: "Persian mathematician",
    body: "Considered father of trigonometry; wrote first independent work on trigonometry.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nasir_al-Din_Tusi.jpg/500px-Nasir_al-Din_Tusi.jpg"
  },
  {
    date: "1238–1298",
    title: "Yang Hui",
    subtitle: "Chinese mathematician",
    body: "Studied magic squares, binomial theorem, quadratic equations, and Yang Hui’s triangle.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Yanghui_triangle.png"
  },
  {
    date: "1323–1382",
    title: "Nicole Oresme",
    subtitle: "French mathematician",
    body: "Invented coordinate geometry before Descartes; worked on infinite series and exponents.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Nicole_Oresme.jpg"
  },
  {
    date: "1447–1517",
    title: "Luca Pacioli",
    subtitle: "Italian mathematician",
    body: "Invented symbols for plus and minus; collaborated with Leonardo da Vinci.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Luca_Pacioli.jpg"
  },
  {
    date: "1452–1519",
    title: "Leonardo da Vinci",
    subtitle: "Italian polymath",
    body: "Artist, engineer, and mathematician; advanced geometry and mechanics.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Leonardo_self.jpg"
  },
  {
    date: "1499–1559",
    title: "Nicolo Tartaglia",
    subtitle: "Italian mathematician",
    body: "Solved general cubic equations, translated works of Euclid and Archimedes, originator of ballistics.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tartaglia.jpg"
  },
  {
    date: "1501–1576",
    title: "Gerolamo Cardan",
    subtitle: "Italian mathematician",
    body: "Published Ars Magna, systematic use of negative and imaginary numbers, probability theory.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Cardano.jpg"
  },
  {
    date: "1596–1650",
    title: "René Descartes",
    subtitle: "French mathematician",
    body: "Father of analytical geometry, introduced superscripts for exponents, Cartesian coordinates.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg"
  },
  {
    date: "1607–1665",
    title: "Pierre de Fermat",
    subtitle: "French mathematician",
    body: "Worked on number theory, probability, optics; known for Fermat’s Last Theorem.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Pierre_de_Fermat.jpg"
  },
  {
    date: "1646–1716",
    title: "Gottfried Wilhelm Leibniz",
    subtitle: "German mathematician",
    body: "Co-inventor of calculus, developed mechanical calculators.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Gottfried_Wilhelm_von_Leibniz%2C_Bernhard_Christoph_Francke.jpg"
  },
  {
    date: "1707–1783",
    title: "Leonhard Euler",
    subtitle: "Swiss mathematician",
    body: "Graph theory, topology, number theory, complex analysis, calculus, Euler’s formula.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Leonhard_Euler_2.jpg"
  },
  {
    date: "1728–1777",
    title: "Johann Lambert",
    subtitle: "Swiss mathematician",
    body: "Proved π is irrational, worked in geometry and cartography.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Johann_Heinrich_Lambert.jpg"
  },
  {
    date: "1736–1813",
    title: "Joseph-Louis Lagrange",
    subtitle: "Italian-French mathematician",
    body: "Developed calculus of variations, Lagrangian polynomials, Lagrange’s theorem in group theory.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Joseph-Louis_Lagrange2.jpg"
  },
  {
    date: "1777–1855",
    title: "Carl Friedrich Gauss",
    subtitle: "German mathematician",
    body: "Fundamental theorem of algebra, modular arithmetic, Gaussian quadrature, topology, number theory.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Carl_Friedrich_Gauss.jpg"
  },
  {
    date: "1789–1857",
    title: "Augustin Louis Cauchy",
    subtitle: "French mathematician",
    body: "Founded complex analysis, convergence tests, Cauchy-Riemann equations, residue theorem.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Augustin-Louis_Cauchy_1901.jpg"
  },
  {
    date: "1811–1832",
    title: "Évariste Galois",
    subtitle: "French mathematician",
    body: "Created group theory and Galois theory; proved unsolvability of general quintic.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Evariste_Galois.jpg"
  },
  {
    date: "1821–1895",
    title: "Arthur Cayley",
    subtitle: "British mathematician",
    body: "Developed matrix algebra, generalized group theory, worked on higher dimensions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Arthur_Cayley.jpg"
  },
  {
    date: "1821–1894",
    title: "Pafnuty Chebyshev",
    subtitle: "Russian mathematician",
    body: "Chebyshev inequality, prime number theorem, Chebyshev polynomials, probability theory.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Pafnuty_Chebyshev.jpg"
  },
  {
    date: "1804–1851",
    title: "Carl Jacobi",
    subtitle: "German mathematician",
    body: "Elliptic functions, Jacobian determinant, linear algebra contributions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Carl_Gustav_Jacob_Jacobi.jpg"
  },
  {
    date: "1826–1866",
    title: "Bernhard Riemann",
    subtitle: "German mathematician",
    body: "Riemannian geometry, Riemann hypothesis, Riemann integral, Riemann surfaces.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Georg_Friedrich_Bernhard_Riemann.jpeg"
  },
  {
    date: "1862–1943",
    title: "David Hilbert",
    subtitle: "German mathematician",
    body: "Founded Hilbert space, listed Hilbert’s problems, axioms of geometry.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/David_Hilbert_1912.jpg"
  },
  {
    date: "1875–1941",
    title: "Henri Lebesgue",
    subtitle: "French mathematician",
    body: "Created measure theory and Lebesgue integral, foundations for modern analysis.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Henri_Lebesgue_2.jpg"
  },
  {
    date: "1953–present",
    title: "Sir Andrew Wiles",
    subtitle: "British mathematician",
    body: "Proved Fermat’s Last Theorem after it remained unsolved for centuries.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Andrew_Wiles_2010.jpg"
  },
  {
    date: "1916–2001",
    title: "Claude Shannon",
    subtitle: "American mathematician",
    body: "Father of Information Theory, laid foundations of digital communications.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/ClaudeShannon_MFO3807.jpg"
  },
  {
    date: "1911–2004",
    title: "Shiing-Shen Chern",
    subtitle: "Chinese-American mathematician",
    body: "Father of modern differential geometry, with applications in physics and topology.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Shiing-shen_Chern_1979.jpg"
  }
];

const timeline = document.getElementById("timeline");

// Extract start year from date string
function extractStartYear(dateStr) {
  const match = dateStr.match(/-?\d{3,4}/);
  return match ? parseInt(match[0], 10) : 0;
}

// Sort events by start year for correct order
events.sort((a, b) => extractStartYear(a.date) - extractStartYear(b.date));

// Get numeric years from events (extract from date string if needed)
const years = events.map(ev => extractStartYear(ev.date));
const minYear = Math.min(...years);
const maxYear = Math.max(...years);
const timelineHeight = Math.max(800, (maxYear - minYear) * 5 + 200);
timeline.style.position ="relative";
timeline.style.right = "500px"; // Set X distance from the left
timeline.style.height = timelineHeight + "px";

let lastY = 0;
const minGap = 70; // Minimum vertical gap in px
const maxGap = 500; // Maximum vertical gap in px

// Render events
events.forEach((ev, index) => {
  const year = extractStartYear(ev.date);
  let y = ((year - minYear) / (maxYear - minYear)) * (timelineHeight - 100) + 50;

  // Clamp the gap between minGap and maxGap
  if (index > 0) {
    let gap = y - lastY;
    if (gap < minGap) {
      y = lastY + minGap;
    } else if (gap > maxGap) {
      y = lastY + maxGap;
    }
  }
  lastY = y;

  const eventEl = document.createElement("div");
  eventEl.className = `event ${index % 2 === 0 ? "left" : "right"}`;
  eventEl.style.position = "absolute";
  eventEl.style.top = `${y}px`;
  eventEl.style.left = index % 2 === 0 ? "10%" : "35%";
  // Add unique id for each event, first one as 'home'
  eventEl.id = index === 0 ? "home" : `${index}`;

  eventEl.innerHTML = `
    <div class="event-content">
      <span class="event-date">${ev.date}</span>
      <div style="display:flex;align-items:flex-start;">
        <img src="${ev.image}" alt="${ev.title}" />
        <div>
          <h3>${ev.title}</h3>
          <p class="subtitle">${ev.subtitle}</p>
          <p class="body">${ev.body}</p>
        </div>
      </div>
    </div>
  `;
  timeline.appendChild(eventEl);
});

// Intersection Observer for scroll animations
// Hide events when out of viewport range (above or below window)
function updateEventVisibility() {
  document.querySelectorAll('.event').forEach(event => {
    const rect = event.getBoundingClientRect();
    // Show if any part of the event is in the viewport (with a margin)
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      event.style.visibility = 'visible';
      event.style.opacity = '1';
      event.classList.add('show');
    } else {
      event.style.visibility = 'hidden';
      event.style.opacity = '0';
      event.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', updateEventVisibility);
window.addEventListener('resize', updateEventVisibility);
setTimeout(updateEventVisibility, 100); // Initial call after DOM ready

// Back to Top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Add click event to each event box

// Create a fixed details box on the right
let detailsBox = document.getElementById('fixedDetailsBox');
if (!detailsBox) {
  detailsBox = document.createElement('div');
  detailsBox.id = 'fixedDetailsBox';
  detailsBox.style.right = '0px';
  detailsBox.style.position = 'sticky';
  detailsBox.style.transform='translateX(90%)';
  detailsBox.style.top = '0px';
  detailsBox.style.width = '50vw';
  detailsBox.style.maxHeight = '80vh';
  detailsBox.style.overflowY = 'auto';
  detailsBox.style.background = 'rgba(20, 30, 60, 0.95)';
  detailsBox.style.color = 'white';
  detailsBox.style.borderRadius = '12px';
  detailsBox.style.boxShadow = '0 2px 16px rgba(0,0,0,0.25)';
  detailsBox.style.padding = '24px 18px 18px 18px';
  detailsBox.style.zIndex = '99999';
  detailsBox.style.display = 'none';
  document.body.appendChild(detailsBox);
}

document.querySelectorAll('.event').forEach((eventEl, idx) => {
  eventEl.addEventListener('click', function(e) {
    e.stopPropagation();
    const ev = events[idx];
    let videoHTML = '';
    if (ev.video) {
      if (ev.video.includes('youtube.com') || ev.video.includes('youtu.be')) {
        let src = ev.video;
        if (!src.includes('autoplay=1')) {
          src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
        }
        videoHTML = `<iframe src="${src}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="width:100%;height:40vh;"></iframe>`;
      } else {
        videoHTML = `<video controls autoplay style="margin-top:8px;width:100%;border-radius:8px;">
          <source src="${ev.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>`;
      }
    }
    let audioHTML = '';
    if (ev.audio) {
      audioHTML = `<audio autoplay controls style="width:100px;margin-top:10px;outline:none;border-radius:8px;background:#222;" controlsList="nodownload noplaybackrate nofullscreen">
        <source src="${ev.audio}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <style>
        #fixedDetailsBox audio::-webkit-media-controls-panel { justify-content: center; }
        #fixedDetailsBox audio::-webkit-media-controls-timeline,
        #fixedDetailsBox audio::-webkit-media-controls-current-time-display,
        #fixedDetailsBox audio::-webkit-media-controls-time-remaining-display,
        #fixedDetailsBox audio::-webkit-media-controls-volume-slider,
        #fixedDetailsBox audio::-webkit-media-controls-mute-button,
        #fixedDetailsBox audio::-webkit-media-controls-seek-back-button,
        #fixedDetailsBox audio::-webkit-media-controls-seek-forward-button,
        #fixedDetailsBox audio::-webkit-media-controls-fullscreen-button,
        #fixedDetailsBox audio::-webkit-media-controls-download-button {
          display: none !important;
        }
      </style>`;
    }
    detailsBox.innerHTML = `
      <button id="closeDetailsBox" style="position:absolute;top:8px;right:12px;font-size:1.5rem;background:none;border:none;color:white;cursor:pointer;">&times;</button>
      <h2>${ev.title}</h2>
      <p><strong>${ev.subtitle}</strong></p>
      <div style="display:flex;align-items:flex-start;gap:18px;">
        <img src="${ev.image}" alt="${ev.title}" style="max-height:30vh;max-width:180px;margin-bottom:10px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.18);">
        ${ev.detail ? `<div style='flex:1;background:rgba(255,255,255,0.08);padding:12px 16px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,0.10);margin-bottom:10px;'><span style='font-size:1.05em;'>${ev.detail}</span></div>` : ''}
      </div>
      <p>${ev.body}</p>
      ${videoHTML}
      ${audioHTML}
    `;
    detailsBox.style.display = 'block';
    
    document.getElementById('closeDetailsBox').onclick = function() {
      detailsBox.style.display = 'none';
    };
  });
});

// Close modal on click
document.getElementById("closeModal").onclick = function() {
  const modal = document.getElementById("eventModal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
    document.getElementById("modalDetails").innerHTML = "";
  }, 300); // match the CSS transition duration
};

document.getElementById("eventModal").onclick = function(e) {
  if (e.target === this) {
    this.classList.remove("show");
    setTimeout(() => {
      this.style.display = "none";
      document.getElementById("modalDetails").innerHTML = "";
    }, 300);
  }
};

document.getElementById('themeToggle').onclick = function() {
  document.body.classList.toggle('dark-theme');
   document.getElementById('themeToggle').textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙' ;
  // Optionally, save preference
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
};
// On page load, restore preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
}

// Enable smooth scroll for the whole page
document.documentElement.style.scrollBehavior = 'smooth';

// --- Auto-scroll and click events one by one with delay ---
function autoScrollAndClickEvents(delay = 2000) {
  const events = Array.from(document.querySelectorAll('.event'));
  let i = 0;
  function next() {
    if (i >= events.length) return;
    const el = events[i];
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      el.click();
      i++;
      setTimeout(next, delay);
    }, 600); // Wait for scroll before click
  }
  next();
}


// // To start auto-scroll and click, call:

// // --- Add a button to start auto-scroll and click ---
if (!document.getElementById('autoScrollBtn')) {
  const btn = document.createElement('button');
  btn.id = 'autoScrollBtn';
  btn.textContent = 'Start Auto Scroll';
  btn.style.position = 'fixed';
  btn.style.top = '50px';
  btn.style.right = '100px';
  btn.style.zIndex = '100000';
  btn.style.padding = '12px 24px';
  btn.style.fontSize = '1.1rem';
  btn.style.background = 'linear-gradient(90deg,#2b5876,#4e4376)';
  btn.style.color = 'white';
  btn.style.border = 'none';
  btn.style.borderRadius = '8px';
  btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
  btn.style.cursor = 'pointer';
  btn.onclick = function() {
    btn.disabled = true;
    btn.textContent = 'Auto Scrolling...';
    autoScrollAndClickEvents(5000); // 2.2s delay for visible effect
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = 'Start Auto Scroll';
    }, (document.querySelectorAll('.event').length + 1) * 2200);
  };
  document.body.appendChild(btn);
}

