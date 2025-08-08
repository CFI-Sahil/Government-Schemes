const schemesData = [
  { title: "Pradhan Mantri Jan Dhan Yojana", category: "Banking", target: "All", description: "Zero balance savings account with insurance and DBT benefits.", applyLink: "https://pmjdy.gov.in/" },

  { title: "Sukanya Samriddhi Yojana", category: "Banking", target: "Women", description: "High interest savings for girl children under 10 years, with tax-free returns.", applyLink: "https://www.india.gov.in/sukanya-samriddhi-yojana" },

  { title: "Senior Citizens Savings Scheme (SCSS)", category: "Banking", target: "Senior Citizens", description: "Government-backed fixed income scheme for citizens above 60 years.", applyLink: "https://www.india.gov.in/senior-citizens-savings-scheme" },

  { title: "Stand-Up India Scheme", category: "Banking", target: "Women", description: "Loans from ₹10 lakh to ₹1 crore for women and SC/ST entrepreneurs.", applyLink: "https://www.standupmitra.in/" },

  { title: "Atal Pension Yojana", category: "Banking", target: "All", description: "Pension scheme for workers in unorganized sector aged 18-40.", applyLink: "https://npscra.nsdl.co.in/scheme-details.php" },

  { title: "National Scholarship Portal (NSP)", category: "Education", target: "Students", description: "Central portal for applying to various scholarships across ministries.", applyLink: "https://scholarships.gov.in/" },

  { title: "AICTE Pragati Scholarship", category: "Education", target: "Women", description: "₹50,000/year for girl students pursuing technical education.", applyLink: "https://www.aicte-india.org/schemes/students-development-schemes/Pragati" },

  { title: "Inspire Scholarship", category: "Education", target: "Students", description: "₹80,000/year for meritorious science students after Class 12.", applyLink: "https://online-inspire.gov.in/" },

  { title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)", category: "Education", target: "All", description: "Free skill training and certification for youth with job placement support.", applyLink: "https://www.pmkvyofficial.org/" },

  { title: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)", category: "Agriculture", target: "Small and marginal farmers", description: "Direct income support of ₹6,000 per year to small and marginal farmers, transferred in 3 equal installments directly into their bank accounts.", applyLink: "https://pmkisan.gov.in/" }
];

const schemeGrid = document.getElementById("schemeGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentFilter = "All";

function renderSchemes() {
  const searchValue = searchInput.value.toLowerCase();
  schemeGrid.innerHTML = "";

  const filtered = schemesData.filter(scheme =>
    (currentFilter === "All" || scheme.target === currentFilter) &&
    scheme.title.toLowerCase().includes(searchValue)
  );

  filtered.forEach(scheme => {
    const card = document.createElement("div");
    card.className = "scheme-card";
    card.innerHTML = `
      <h2 class="scheme-title">${scheme.title}</h2>
      <p class="scheme-meta">Category: <span>${scheme.category}</span> | Target: <span>${scheme.target}</span></p>
      <p class="scheme-desc">${scheme.description}</p>
      <a href="${scheme.applyLink}" target="_blank" class="apply-link">Apply / Learn More</a>
    `;

    card.addEventListener("click", () => {
      window.location.href = `details.html?title=${encodeURIComponent(scheme.title)}`;
    });

    schemeGrid.appendChild(card);
  });
}

// Event Listeners
searchInput.addEventListener("input", renderSchemes);

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderSchemes();
  });
});



// Initial render
renderSchemes();

