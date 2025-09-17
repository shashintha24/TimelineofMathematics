const events = [
  {
    date: " 200–284",
    title: "Diophantus of Alexandria",
    subtitle: "Greek or Egyptian, 'father of algebra'",
    body: "Wrote a series of books 'Arithmetica'.",
    detail: "Diophantus of Alexandria, often regarded as either Greek or Egyptian, is widelyknown as the “father of algebra.” He authored the influential series of booksArithmetica, which explored algebraic problems and introduced methods for solving equations. His work laid an early foundation for symbolic algebra, although his notation was not as developed as modern algebraic symbolism.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/%CE%94%CE%B9%CF%8C%CF%86%CE%B1%CE%BD%CF%84%CE%BF%CF%82_-_Diophantos_-_%D0%94%D0%98%D0%9E%D0%A4%D0%90%D0%9D%D0%A2.jpg",
    audio: "../assets/voice/Diophantus.wav"
    // video: "https://www.youtube.com/embed/8r7TLzLmB8c?si=d0AWYnfhX-ufm-_z" // <-- Add this
    
  },
  {
    date: "476–550 ",
    title: "Aryabhata",
    subtitle: "Indian mathematician and astronomer",
    body: "Developed place value system, introduced zero, and gave approximations of π.",
    detail: "Aryabhata was a pioneering Indian mathematician and astronomer who made significant contributions to the fields of mathematics and astronomy. He is credited with developing the place value system, which is fundamental to modern arithmetic, and he introduced the concept of zero as a numeral. Aryabhata also provided an accurate approximation of π (pi) and worked on trigonometric functions, laying the groundwork for future advancements in these areas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aryabhatta_of_Bihar.jpg/330px-Aryabhatta_of_Bihar.jpg",
    audio: "../assets/voice/Aryabhata.wav"
  },
  {
    date: "1048–1131 ",
    title: "Omar Khayyam",
    subtitle: "Persian mathematician, poet, philosopher",
    body: "Classified cubic equations, linked algebra to geometry.",
    detail: "Omar Khayyam, the Persian mathematician, astronomer, and poet, made significant advances in algebra. He classified cubic equations into three categories: those solvable with compass and straightedge, those requiring conic sections, and those involving more complex methods such as inverse operations. Khayyam also established a strong link between algebra and geometry, paving the way for the later development of analytic geometry.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hakim_Omar_Khayam_-_panoramio.jpg/500px-Hakim_Omar_Khayam_-_panoramio.jpg",
    audio: "../assets/voice/omar.wav"
  },
  {
    date: "1114–1185",
    title: "Bhāskara II",
    subtitle: "Indian mathematician",
    body: "Proved Pythagorean theorem, explained quadratic, cubic, and quartic solutions.",
    detail:"Bhāskara II, an Indian mathematician and astronomer, made remarkable contributions to algebra, arithmetic, and geometry. He provided a proof of the Pythagorean theorem and explained methods for solving quadratic, cubic, and quartic indeterminate equations. His works, such as the Lilavati and Bijaganita, became foundational texts in Indian mathematics and influenced later mathematical traditions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Teorema_de_Pit%C3%A1goras.Bhaskara.svg/390px-Teorema_de_Pit%C3%A1goras.Bhaskara.svg.png",
    // video: "https://www.youtube.com/embed/G4nzC0C62d8?si=xCrQImyc_gfRBkGa",
    audio: "../assets/voice/Bhaskara.wav"
  },
  {
    date: "1170–1250",
    title: "Fibonacci",
    subtitle: "Italian mathematician",
    body: "Introduced Hindu-Arabic numerals to Europe in Liber Abaci, famous for Fibonacci sequence.",
    detail: "Leonardo of Pisa, better known as Fibonacci, was an Italian mathematician who introduced the Hindu-Arabic numeral system to Europe through his famous book Liber Abaci (1202). This work transformed European mathematics by replacing the cumbersome Roman numeral system with a more efficient decimal system. Fibonacci is also remembered for the Fibonacci sequence, a numerical pattern that appears in various natural and mathematical contexts.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Leonardo_da_Pisa.jpg/500px-Leonardo_da_Pisa.jpg",
    audio: "../assets/voice/Leonardo.wav"
  },
  {
    date: "1201–1274",
    title: "Nasir al-Din Tusi",
    subtitle: "Persian mathematician",
    detail:"Nasir al-Din al-Tusi, a Persian polymath, is often regarded as the father of trigonometry. He was the first to treat trigonometry as an independent discipline, distinct from astronomy, and wrote a systematic work on the subject. His contributions laid the groundwork for the development of spherical trigonometry and had a lasting influence on both Islamic and European mathematics.",
    body: "Considered father of trigonometry; wrote first independent work on trigonometry.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nasir_al-Din_Tusi.jpg/500px-Nasir_al-Din_Tusi.jpg",
    audio: "../assets/voice/Nasir.wav"
  },
  {
    date: "1238–1298",
    title: "Yang Hui",
    subtitle: "Chinese mathematician",
    detail: "Studied magic squares, binomial theorem, quadratic equations, and Yang Hui’s triangle.",
    detail:"Yang Hui, a Chinese mathematician, made important advances in number theory and algebra. He studied magic squares, magic circles, quadratic equations, and provided an early version of the binomial theorem. He is also associated with Yang Hui’s triangle, which later became known in Europe as Pascal’s triangle. In addition, Yang wrote geometric proofs and demonstrated a strong grasp of decimal fractions, showcasing his versatility in mathematical problem-solving.",
    image: "https://mathshistory.st-andrews.ac.uk/Biographies/Yang_Hui/Yang_Hui.jpeg",
    audio: "../assets/voice/Yang.wav"
  },
  {
    date: "1323–1382",
    title: "Nicole Oresme",
    subtitle: "French mathematician",
    body: "Nicole Oresme, a French mathematician and philosopher, made early contributions that foreshadowed analytic geometry by using graphical methods to represent variable quantities.",
    detail: "Nicole Oresme, a French mathematician and philosopher, made early contributions that foreshadowed analytic geometry by using graphical methods to represent variable quantities. He was also the first to use fractional exponents and carried out important studies on infinite series, anticipating later developments in calculus and algebra.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Oresme.jpg/500px-Oresme.jpg",
    audio: "../assets/voice/Nicole.wav"
  },
  {
    date: "1447–1517",
    title: "Luca Pacioli",
    subtitle: "Italian mathematician",
    body: "Invented symbols for plus and minus; collaborated with Leonardo da Vinci.",
    detail:"Luca Pacioli, an Italian mathematician and Franciscan friar, is best known for his comprehensive work Summa de arithmetica (1494), which brought together much of the mathematical knowledge of his era. He collaborated with Leonardo da Vinci and made significant contributions to the study of arithmetic, algebra, and geometry. Pacioli is also regarded as the “father of accounting” for formalizing double-entry bookkeeping..",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Pacioli.jpg/500px-Pacioli.jpg",
    audio: "../assets/voice/Luca.wav"
  },
  {
    date: "1452–1519",
    title: "Leonardo da Vinci",
    subtitle: "Italian polymath",
    body: "Artist, engineer, and mathematician; advanced geometry and mechanics.",
    detail:"Leonardo da Vinci, the Italian artist, inventor, and polymath, applied mathematics in a wide range of fields, from art and anatomy to engineering and mechanics. His studies of proportion, perspective, and geometry influenced both his artistic masterpieces and his technical designs, reflecting the deep interplay between mathematics and creativity during the Renaissance.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/500px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
    audio: "../assets/voice/Lenardo_davinc.wav"
  },
  {
    date: "1499–1559",
    title: "Nicolo Tartaglia",
    subtitle: "Italian mathematician",
    body: "Solved general cubic equations, translated works of Euclid and Archimedes, originator of ballistics.",
    detail:"Niccolò Tartaglia, an Italian mathematician, contributed significantly to algebra through his methods of solving certain cases of the cubic equation. He also produced Italian translations of the works of Archimedes and Euclid, making classical mathematics more widely accessible. In addition, his studies on the trajectories of cannonballs established him as a founder of the science of ballistics.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Portret_van_Niccolo_Tartaglia_Nicolavs_Tartaglia_Brixianvs_%28titel_op_object%29_Portretten_van_beroemde_Europese_geleerden_%28serietitel%29_Virorum_doctorum_de_Disciplinis_benemerentium_effigies_%28serietitel%29%2C_RP-P-1909-4459.jpg/500px-thumbnail.jpg",
    audio: "../assets/voice/Nicolla.wav"
  },
  {
    date: "1501–1576",
    title: "Gerolamo Cardan",
    subtitle: "Italian mathematician",
    body: "Published Ars Magna, systematic use of negative and imaginary numbers, probability theory.",
    detail:"Gerolamo Cardano, an Italian mathematician and polymath, was among the first Europeans to apply negative numbers systematically. In his landmark book Ars Magna (1545), he published algebraic solutions for cubic and quartic equations,building on earlier work. Cardano also explored binomial coefficients, discussed imaginary numbers, and studied probability in his treatise Liber de ludo aleae (The Book on Games of Chance), which is considered the first systematic work on probability theory.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Girolamo_Cardano._Stipple_engraving_by_R._Cooper._Wellcome_V0001004.jpg/500px-Girolamo_Cardano._Stipple_engraving_by_R._Cooper._Wellcome_V0001004.jpg",
    audio: "../assets/voice/Gerolamo.wav"
  },
  {
    date: "1596–1650",
    title: "René Descartes",
    subtitle: "French mathematician",
    body: "Father of analytical geometry, introduced superscripts for exponents, Cartesian coordinates.",
    detail:"René Descartes, a French mathematician and philosopher, is known as the father of analytical geometry, which unified algebra and geometry by describing geometric figures through equations. His introduction of the Cartesian coordinate system revolutionized mathematics and provided a foundation for the later development of calculus. Descartes also introduced the modern use of superscripts to denote powers or exponents, a notation still in use today.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/500px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
    audio: "../assets/voice/Rene.wav"
  },
  {
    date: "1607–1665",
    title: "Pierre de Fermat",
    subtitle: "French mathematician",
    body: "Worked on number theory, probability, optics; known for Fermat’s Last Theorem.",
    detail: "Pierre de Fermat, a French mathematician, made influential contributions to number theory, geometry, probability, and optics. He was an early pioneer of ideas that anticipated calculus, particularly through his method of finding maxima, minima, and tangents. Fermat is best remembered for Fermat’s Last Theorem, a conjecture he noted in the margin of his copy of Arithmetica, which remained one of the most famous unsolved problems in mathematics until its proof by Andrew Wiles in 1994.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Pierre_de_Fermat.jpg",
    audio: "../assets/voice/Pierre.wav"
  },
  {
    date: "1646–1716",
    title: "Gottfried Wilhelm Leibniz",
    subtitle: "German mathematician",
    body: "Co-inventor of calculus, developed mechanical calculators.",
    detail: "Gottfried Wilhelm Leibniz, a German mathematician and philosopher, was one of the inventors of calculus, independently of Isaac Newton. He developed much of the notation for calculus that is still used today, such as the integral sign (∫) and the differential (d). Beyond pure mathematics, Leibniz also designed and built some of the earliest mechanical calculators, demonstrating his vision of connecting abstract reasoning with practical computation.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg/500px-Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg",
    audio: "../assets/voice/Gottfried.wav"
  },
  {
    date: "1707–1783",
    title: "Leonhard Euler",
    subtitle: "Swiss mathematician",
    body: "Graph theory, topology, number theory, complex analysis, calculus, Euler’s formula.",
    detail:"Leonhard Euler, a Swiss mathematician, was one of the most prolific and influential figures in the history of mathematics. He solved the famous Königsberg bridge problem, laying the foundations of graph theory, and his work anticipated the development of topology. In complex analysis, he introduced Euler’s formula and Euler’s identity, which remain central results. Euler also advanced number theory, building on Fermat’s work to prove results such as Fermat’s little theorem and Fermat’s theorem on sums of two squares, while also contributing to Lagrange’s four- square theorem. He unified the calculus of Leibniz and Newton and developed powerful methods that made calculus widely applicable to physics and engineering.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Leonhard_Euler_-_Jakob_Emanuel_Handmann_%28Kunstmuseum_Basel%29.jpg/500px-Leonhard_Euler_-_Jakob_Emanuel_Handmann_%28Kunstmuseum_Basel%29.jpg",
    audio: "../assets/voice/leonhard.wav"
  },
  {
    date: "1718-1799",
    title:"Maria Gaetana Agnesi",
    subtitle:"Italian mathematician",
    body :"philosopher, and humanitarian",
    detail:"Maria Gaetana Agnesi, an Italian mathematician, philosopher, and humanitarian, was the first Western woman to write a comprehensive mathematics textbook and the first woman to be appointed as a mathematics professor at a university. Her textbook, Instituzioni analitiche ad uso della gioventù italiana (Analytical Institutions for the Use of Italian Youth), presented differential and integral calculus clearly and systematically, earning international acclaim. She also studied a curve now known as the “Witch of Agnesi,” which has applications in probability theory and physics.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Maria_Gaetana_Agnesi.jpg",
    audio: "../assets/voice/Maria.wav"
  },
  {
    date: "1728–1777",
    title: "Johann Lambert",
    subtitle: "Swiss mathematician",
    body: "Proved π is irrational, worked in geometry and cartography.",
    detail:"Johann Lambert, a Swiss mathematician and physicist, was the first to prove rigorously that π is an irrational number. He also made contributions to geometry and cartography by developing innovative map projections, and he anticipated the concept of non-Euclidean spaces, foreshadowing the later revolution in geometry.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/JHLambert.jpg",
    audio: "../assets/voice/Johann.wav"
  },
  {
    date: "1736–1813",
    title: "Joseph-Louis Lagrange",
    subtitle: "Italian-French mathematician",
    body: "Developed calculus of variations, Lagrangian polynomials, Lagrange’s theorem in group theory.",
    detail:"Joseph-Louis Lagrange, born in Italy and later a naturalized French mathematician, was a leading figure of 18th-century mathematics. He founded the calculus of variations, formulating the Euler–Lagrange equations and introducing the method of Lagrange multipliers for handling constraints. His contributions to analysis included new approaches to Taylor series with the Lagrange remainder, and in algebra he created the Lagrange interpolation polynomial. In group theory, his theorem established that the order of a subgroup divides the order of the group. He also proved the four-square theorem, showing that every integer can be written as the sum of four squares.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lagrange_crop.jpg/500px-Lagrange_crop.jpg",
    audio: "../assets/voice/joseph.wav"
  },
  {
    date: "1777–1855",
    title: "Carl Friedrich Gauss",
    subtitle: "German mathematician",
    body: "Fundamental theorem of algebra, modular arithmetic, Gaussian quadrature, topology, number theory.",
    detail:"Carl Friedrich Gauss, the German mathematician often called the Prince of Mathematicians, made foundational contributions across many fields. In algebra and number theory, he proved the fundamental theorem of algebra, introduced modular arithmetic with the congruence symbol ≡, developed the theory of quadratic residues, and worked with complex integers such as the Gaussian integers. In analysis, he studied arithmetic–geometric means, continued fractions, and trigonometric interpolation, which led to the discrete Fourier transform. In numerical analysis, he developed Gaussian quadrature and iterative methods for solving linear systems. Gauss was also an early pioneer of topology, employing topological ideas in proofs of the fundamental theorem of algebra and developing classification methods for curves. His work set the stage for much of modern mathematics.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Carl_Friedrich_Gauss_1840_by_Jensen.jpg/500px-Carl_Friedrich_Gauss_1840_by_Jensen.jpg",
    audio: "../assets/voice/carl.wav"
  },
  {
    date: "1789–1857",
    title: "Augustin Louis Cauchy",
    subtitle: "French mathematician",
    body: "Founded complex analysis, convergence tests, Cauchy-Riemann equations, residue theorem.",
    detail:"Augustin-Louis Cauchy, a French mathematician, was a founder of rigorous analysis and complex function theory. He introduced the Cauchy integral theorem, established the Cauchy–Riemann equations, and developed the residue theorem, which became cornerstones of complex analysis. He created tests for the convergence of infinite series, including the Cauchy condensation test, and gave the first rigorous proof of Taylor’s theorem with a clear remainder term. Cauchy’s insistence on precision and rigor reshaped mathematics, influencing nearly every branch of the discipline.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Augustin-Louis_Cauchy_1901.jpg",
    audio: "../assets/voice/augustin.wav"
  },
   {
    date: "1804–1851",
    title: "Carl Jacobi",
    subtitle: "German mathematician",
    body: "Elliptic functions, Jacobian determinant, linear algebra contributions.",
    detail:"Carl Jacobi, a German mathematician, was a founder of the theory of elliptic functions and made wide-ranging contributions to analysis. In linear algebra, he developed important results in matrix theory, including the Jacobi identity for Lie brackets. He also introduced the functional determinant known as the Jacobian, which is fundamental for changing variables in multivariable integrals and has numerous applications in probability, statistics, and applied mathematics.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Carl_Jacobi.jpg/500px-Carl_Jacobi.jpg",
    audio: "../assets/voice/carljacobi.wav"
  },
  {
    date: "1811–1832",
    title: "Évariste Galois",
    subtitle: "French mathematician",
    body: "Created group theory and Galois theory; proved unsolvability of general quintic.",
    detail: "Évariste Galois, a French mathematician, transformed algebra with his development of group theory and Galois theory. His insights revealed that polynomial equations of degree five or higher cannot be solved by radicals, building on the work of Niels Henrik Abel. Though his life was tragically short, Galois’s work became foundational for modern algebra and continues to influence mathematics today.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Evariste_galois.jpg/500px-Evariste_galois.jpg",
    audio: "../assets/voice/Evariste.wav"
  },
  {
    date: "1821–1895",
    title: "Arthur Cayley",
    subtitle: "British mathematician",
    body: "Developed matrix algebra, generalized group theory, worked on higher dimensions.",
    detail:"Arthur Cayley, a British mathematician, was instrumental in formalizing group theory by giving the modern abstract definition of a “group.” He also advanced matrix algebra, laying the groundwork for linear algebra, and explored higher-dimensional geometry. Cayley’s work unified many areas of algebra and geometry, opening new directions for future research.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Arthur_Cayley.jpg/500px-Arthur_Cayley.jpg",
    audio: "../assets/voice/Arthur.wav"
  },
  {
    date: "1821–1894",
    title: "Pafnuty Chebyshev",
    subtitle: "Russian mathematician",
    body: "Chebyshev inequality, prime number theorem, Chebyshev polynomials, probability theory.",
    detail:"Pafnuty Chebyshev, a Russian mathematician, made important contributions to analysis, probability, and number theory. He is known for the Chebyshev inequality, which became a key tool in probability theory and statistics. His work on prime numbers established crucial bounds that later paved the way for the proof of the prime number theorem. Chebyshev also introduced Chebyshev polynomials, widely used in approximation theory, and studied the distribution of primes in different residue classes, a phenomenon now known as “Chebyshev’s bias.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Pafnuty_Lvovich_Chebyshev.jpg/500px-Pafnuty_Lvovich_Chebyshev.jpg",
    audio: "../assets/voice/Pafnuty.wav"
  },

  {
    date: "1826–1866",
    title: "Bernhard Riemann",
    subtitle: "German mathematician",
    body: "Riemannian geometry, Riemann hypothesis, Riemann integral, Riemann surfaces.",
    detail:"Bernhard Riemann, a German mathematician, revolutionized mathematics with his deep insights. In geometry, he developed Riemannian geometry, a framework for studying curved spaces that later became the foundation of Einstein’s theory of general relativity. In analysis, he introduced the Riemann integral and Riemann surfaces, key concepts in real and complex analysis. His 1859 paper on the zeta function proposed the famous Riemann Hypothesis, one of the greatest unsolved problems in mathematics, concerning the distribution of prime numbers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Georg_Friedrich_Bernhard_Riemann.jpeg/500px-Georg_Friedrich_Bernhard_Riemann.jpeg",
    audio: "../assets/voice/Bernhard.wav"
  },
  {
    date: "1862–1943",
    title: "David Hilbert",
    subtitle: "German mathematician",
    body: "Founded Hilbert space, listed Hilbert’s problems, axioms of geometry.",
    detail:"David Hilbert, a German mathematician, was one of the most influential figures of modern mathematics. In his Foundations of Geometry, he formulated 21 axioms to provide a rigorous basis for geometry. At the 1900 International Congress of Mathematicians, he presented 23 unsolved problems, known as Hilbert’s Problems, which shaped 20th-century mathematical research. He also developed Hilbert spaces, infinite-dimensional generalizations of Euclidean space, which became central in functional analysis and quantum mechanics.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hilbert.jpg/375px-Hilbert.jpg",
    audio: "../assets/voice/David.wav"
  },
  {
    date: "1875–1941",
    title: "Henri Lebesgue",
    subtitle: "French mathematician",
    body: "Created measure theory and Lebesgue integral, foundations for modern analysis.",
    detail:"Henri Lebesgue, a French mathematician, transformed analysis by developing measure theory and the Lebesgue integral. Unlike the Riemann integral, which partitions the domain, Lebesgue’s approach partitions the range of functions, allowing highly discontinuous functions to be integrated. This breakthrough provided powerful tools for probability theory, Fourier analysis, and partial differential equations, establishing the modern framework of analysis.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Lebesgue_2.jpeg",
    audio: "../assets/voice/Henri.wav"
  },
  {
    date:"1882-1935",
    title:"Emmy Noether",
    subtitle:"German mathematician",
    body:"abstract algebra,modern algebraic structures",
    detail:"Amalie Emmy Noether, a German mathematician, is widely regarded as the most influential woman in the history of mathematics. She made groundbreaking contributions to abstract algebra, developing concepts that underpin modern algebraic structures such as rings and fields. In physics, Noether’s theorem established the profound connection between symmetries and conservation laws, a cornerstone of modern theoretical physics. Her clarity of thought and originality transformed both mathematics and science.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Emmy_Noether_%283x4_cropped%29.jpg/500px-Emmy_Noether_%283x4_cropped%29.jpg",
    audio: "../assets/voice/Emmy.wav"
  },
  {
    date: "1916–2001",
    title: "Claude Shannon",
    subtitle: "American mathematician",
    body: "Father of Information Theory, laid foundations of digital communications.",
    detail:"Claude Shannon, an American mathematician and electrical engineer, is widely regarded as the father of information theory. He laid the mathematical foundations for digital communication and data compression, introducing key concepts such as the bit, entropy, and the Shannon limit. His work transformed telecommunications, computer science, and modern digital technology.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/C.E._Shannon._Tekniska_museet_43069_%28cropped%29.jpg/500px-C.E._Shannon._Tekniska_museet_43069_%28cropped%29.jpg",
    audio: "../assets/voice/claude.wav"
  },
  {
    date: "1911–2004",
    title: "Shiing-Shen Chern",
    subtitle: "Chinese-American mathematician",
    body: "Father of modern differential geometry, with applications in physics and topology.",
    detail:"Shiing-Shen Chern, a Chinese-American mathematician, is considered the father of modern differential geometry. He made profound contributions to geometry, topology, and the theory of characteristic classes. His work has had lasting applications in theoretical physics, including string theory and quantum mechanics, and continues to influence research in mathematics and geometry.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Shiing-Shen_Chern.jpg/500px-Shiing-Shen_Chern.jpg",
    audio: "../assets/voice/Shiing.wav"
  },
  {
    date: "1919-1985",
    title: "Julia Robinson",
    subtitle:"American mathematician",
    body:"Diophantine equation has integer solutions,MRDP theorem,computability theory and computational complexity theory.",
    detail:"Julia Robinson, an American mathematician, was the first woman elected to the U.S. National Academy of Sciences and the first female president of the American Mathematical Society. Her research focused on Hilbert’s tenth problem, which asked whether there exists a general algorithm to determine if a Diophantine equation has integer solutions. Her work contributed to the eventual proof of the MRDP theorem. Robinson also made significant contributions to computability theory and computational complexity theory.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Julia_Robinson_1975.jpg/375px-Julia_Robinson_1975.jpg",
    audio: "../assets/voice/julia.wav"
  },
  {
    date: "1953–present",
    title: "Sir Andrew Wiles",
    subtitle: "British mathematician",
    body: "Proved Fermat’s Last Theorem after it remained unsolved for centuries.",
    detail:"Sir Andrew Wiles, a British mathematician, is renowned for proving Fermat’s Last Theorem, a problem that had remained unsolved for over 350 years. His proof, published in 1995, employed modern techniques from algebraic geometry and number theory, including modular forms and elliptic curves, representing a major milestone in the history of mathematics.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Andrew_wiles1-3.jpg/500px-Andrew_wiles1-3.jpg",
    audio: "../assets/voice/Andrew.wav"
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
      audioHTML = `<audio autoplay controls style="width:120px;margin-top:10px;outline:none;border-radius:8px;" controlsList="nodownload noplaybackrate nofullscreen">
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
// On page load, set dark theme as default unless user prefers light
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.remove('dark-theme');
  document.getElementById('themeToggle').textContent = '🌙';
} else {
  document.body.classList.add('dark-theme');
  document.getElementById('themeToggle').textContent = '☀️';
}

// Enable smooth scroll for the whole page
document.documentElement.style.scrollBehavior = 'smooth';

// --- Auto-scroll and click events one by one with delay ---
function autoScrollAndClickEvents(delay = 2000) {
  const events = Array.from(document.querySelectorAll('.event'));
  let i = 0;
  function next() {
    if (i >= events.length) {
      i = 0;
      setTimeout(next, delay);
      return;
    }
    const el = events[i];
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      el.click();
      // Wait for audio to end, or fallback to delay
      setTimeout(() => {
        const audio = document.querySelector('#fixedDetailsBox audio');
        if (audio) {
          // Remove any previous event listeners
          audio.onended = null;
          let advanced = false;
          // Fallback: advance if audio fails to play or load in 10s
          const audioTimeout = setTimeout(() => {
            if (!advanced) {
              advanced = true;
              i++;
              next();
            }
          }, Math.max(10000, audio.duration ? audio.duration * 1200 : 10000));
          audio.onended = function() {
            if (!advanced) {
              advanced = true;
              clearTimeout(audioTimeout);
              i++;
              next();
            }
          };
          // If audio is already ended (very short or error), play again to ensure ended event fires
          if (audio.ended || audio.duration === 0) {
            audio.currentTime = 0;
            audio.play();
          }
        } else {
          i++;
          setTimeout(next, delay);
        }
      }, 400);
    }, 600);
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
  btn.style.background = 'linear-gradient(45deg,rgba(0, 128, 232,0.8), rgba(2, 62, 112,0.8), rgba(3, 30, 59,0.8)) 90%';
  btn.style.color = 'white';
  btn.style.border = 'none';
  btn.style.borderRadius = '8px';
  btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
  btn.style.cursor = 'pointer';
  btn.style.transition = 'transform 0.3s cubic-bezier(.4,2,.6,1)'
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

