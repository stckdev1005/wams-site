// ============================================
//  APP.JS — Logique du site WAM'S
// ============================================

// Make functions global so onclick works
let openOrderModal = null;
let closeOrderModal = null;

document.addEventListener("DOMContentLoaded", () => {

  // ---- NAV SCROLL ----
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // ---- MOBILE MENU ----
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  burgerBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
  closeMenu.addEventListener("click", () => mobileMenu.classList.remove("open"));
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) mobileMenu.classList.remove("open");
  });

  // ---- ORDER LINKS ----
  const uberEatsLink = "https://www.ubereats.com/fr/store/wams/rXmxcTqeWVqGMcMMa7RlLA?diningMode=DELIVERY&surfaceName=";
  const deliverooLink = "https://deliveroo.fr/fr/menu/fontainebleau/avon/wams-fontainebleau";

  // ---- CREATE ORDER MODAL ----
  const orderModal = document.createElement("div");
  orderModal.className = "order-modal";
  orderModal.innerHTML = `
    <div class="order-modal-card" role="dialog" aria-modal="true" aria-labelledby="orderModalTitle">
      <button class="order-modal-close" type="button" aria-label="Fermer">&times;</button>
      <p class="section-tag">🔥 Commander</p>
      <h3 id="orderModalTitle">Comment veux-tu commander ?</h3>
      <p class="order-modal-sub">Appelle WAM'S directement ou commande en livraison.</p>
      <div class="order-modal-actions">
        <a href="${PHONE}" class="order-choice">📞 Appeler (01 77 03 05 97)</a>
        <a href="${uberEatsLink}" class="order-choice btn-uber" target="_blank" rel="noopener">🚗 Uber Eats</a>
        <a href="${deliverooLink}" class="order-choice btn-deliveroo" target="_blank" rel="noopener">🏪 Deliveroo</a>
      </div>
    </div>
  `;
  document.body.appendChild(orderModal);

  // ---- MAKE FUNCTIONS GLOBAL ----
  openOrderModal = function() {
    orderModal.classList.add("open");
    document.body.style.overflow = "hidden";
    mobileMenu.classList.remove("open");
  };

  closeOrderModal = function() {
    orderModal.classList.remove("open");
    document.body.style.overflow = "";
  };

  orderModal.addEventListener("click", (e) => {
    if (e.target === orderModal || e.target.closest(".order-modal-close")) closeOrderModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOrderModal();
  });

  // ---- COMMANDER BUTTONS ----
  document.querySelectorAll(".btn-nav, .btn-mobile-order, .btn-secondary").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openOrderModal();
    });
  });

  // ---- MENU TABS & PRODUCTS ----
  const catTabs = document.querySelectorAll(".cat-tab");
  const productsGrid = document.getElementById("productsGrid");

  let currentCat = "burgers";

  function renderProducts(cat) {
    const items = menuData[cat] || [];
    productsGrid.innerHTML = "";

    items.forEach((item, i) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.style.animationDelay = `${i * 40}ms`;

      card.innerHTML = `
        <div class="product-img"><img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;"></div>
        <div class="product-body">
          <div class="product-name">${item.name}</div>
          <div class="product-desc">${item.desc}</div>
          <div class="product-footer">
            <span class="product-price">${item.price}</span>
            <button type="button" class="btn-order" onclick="openOrderModal()">Commander</button>
          </div>
        </div>
      `;
      
      productsGrid.appendChild(card);
    });
  }

  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCat = tab.dataset.cat;
      renderProducts(currentCat);
    });
  });

  renderProducts(currentCat);

  // ---- SMOOTH ACTIVE LINK ----
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".nav-links a").forEach(link => {
          link.style.color = link.getAttribute("href") === `#${entry.target.id}`
            ? "var(--white)" : "var(--gray)";
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

  // ---- SMOOTH SCROLL ----
  document.querySelectorAll("a[href^='#']").forEach(a => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target && a.getAttribute("href") !== "#") {
        e.preventDefault();
        mobileMenu.classList.remove("open");
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});

function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}
