// ============================================
//  APP.JS — Logique du site WAM'S
// ============================================

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
        <div class="product-img" onclick="openProductModal(${i}, '${cat}')" style="cursor:pointer;">
          ${item.image
            ? `<img src="${item.image}" alt="${item.name}" style="width:100%; height:100%; object-fit:cover;">`
            : `<span style="font-size:4rem;">${item.emoji}</span>`
          }
        </div>
        <div class="product-body">
          <div class="product-name">${item.name}</div>
          <div class="product-desc">${item.desc}</div>
          <div class="product-footer">
            <span class="product-price">${item.price}</span>
            <button type="button" class="btn-order" onclick="openProductModal(${i}, '${cat}')">Voir +</button>
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

// ============================================
//  PRODUCT MODAL
// ============================================
function openProductModal(index, cat) {
  const item = menuData[cat][index];

  const old = document.getElementById("productModal");
  if (old) old.remove();

  const modal = document.createElement("div");
  modal.id = "productModal";
  modal.style.cssText = `
    position: fixed; inset: 0; z-index: 4000;
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: center;
    animation: fadeIn 0.3s ease;
  `;

  modal.innerHTML = `
    <div style="
      background: #1a1a1a;
      border: 1px solid rgba(245,197,24,0.3);
      border-radius: 20px;
      padding: 40px;
      max-width: 480px;
      width: 90%;
      position: relative;
      animation: slideUp 0.4s cubic-bezier(0.16,1,0.3,1);
    ">
      <button onclick="document.getElementById('productModal').remove()" style="
        position: absolute; top: 16px; right: 20px;
        background: none; border: none; color: white;
        font-size: 1.8rem; cursor: pointer; line-height: 1;
      ">&times;</button>

      <div style="
        width: 100%; height: 220px;
        border-radius: 16px; margin-bottom: 24px;
        overflow: hidden;
      ">
        ${item.image
          ? `<img src="${item.image}" alt="${item.name}" style="width:100%; height:100%; object-fit:cover;">`
          : `<div style="width:100%; height:100%; background:#222; display:flex; align-items:center; justify-content:center; font-size:5rem;">${item.emoji}</div>`
        }
      </div>

      <h2 style="
        font-family: 'Bebas Neue', sans-serif;
        font-size: 2rem; letter-spacing: 2px;
        color: white; margin-bottom: 12px;
      ">${item.name}</h2>

      <p style="
        color: #888; font-size: 0.95rem;
        line-height: 1.7; margin-bottom: 24px;
      ">${item.desc}</p>

      <div style="
        display: flex; align-items: center;
        justify-content: space-between;
        border-top: 1px solid rgba(255,255,255,0.08);
        padding-top: 24px;
      ">
        <span style="
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem; color: #f5c518;
          letter-spacing: 2px;
        ">${item.price}</span>

        <button onclick="openOrderModal()" style="
          background: #f5c518; color: black;
          border: none; border-radius: 8px;
          font-size: 0.85rem; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 14px 28px; cursor: pointer;
          box-shadow: 0 4px 15px rgba(245,197,24,0.4);
        ">📞 Commander</button>
      </div>
    </div>
  `;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });

  document.addEventListener("keydown", function handler(e) {
    if (e.key === "Escape") {
      modal.remove();
      document.removeEventListener("keydown", handler);
    }
  });

  document.body.appendChild(modal);
}

// ============================================
//  HELPERS
// ============================================
function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}