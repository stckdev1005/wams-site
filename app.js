// ============================================
//  APP.JS - Logique du site WAM'S
// ============================================

document.addEventListener("DOMContentLoaded", () => {

  // ---- NAV SCROLL ----
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // ---- MOBILE MENU ----
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu  = document.getElementById("closeMenu");

  burgerBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
  closeMenu.addEventListener("click",  () => mobileMenu.classList.remove("open"));

  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) mobileMenu.classList.remove("open");
  });

  // ---- ORDER CHOICE ----
  const uberEatsLink = "https://www.ubereats.com/fr/store/wams/rXmxcTqeWVqGMcMMa7RlLA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkF2b24lMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKcjlrUFkxSDA1VWNSXzNuUVgxNk4zcFklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDguNDA0ODM4OTk5OTk5OTk2JTJDJTIybG9uZ2l0dWRlJTIyJTNBMi43MjA3MzMlN0Q%3D&ps=1";
  const deliverooLink = "https://deliveroo.fr/fr/menu/fontainebleau/avon/wams-fontainebleau";

  const orderModal = document.createElement("div");
  orderModal.className = "order-modal";
  orderModal.innerHTML = `
    <div class="order-modal-card" role="dialog" aria-modal="true" aria-labelledby="orderModalTitle">
      <button class="order-modal-close" type="button" aria-label="Fermer">&times;</button>
      <p class="section-tag">Commander</p>
      <h3 id="orderModalTitle">Comment souhaitez-vous commander ?</h3>
      <p class="order-modal-sub">Appelle directement WAM'S ou commande en livraison.</p>
      <div class="order-modal-actions">
        <a href="${PHONE}" class="order-choice order-call">Appeler</a>
        <a href="${uberEatsLink}" class="order-choice btn-uber" target="_blank" rel="noopener">Uber Eats</a>
        <a href="${deliverooLink}" class="order-choice btn-deliveroo" target="_blank" rel="noopener">Deliveroo</a>
      </div>
    </div>
  `;
  document.body.appendChild(orderModal);

  function openOrderModal() {
    orderModal.classList.add("open");
    document.body.classList.add("modal-open");
    mobileMenu.classList.remove("open");
  }

  function closeOrderModal() {
    orderModal.classList.remove("open");
    document.body.classList.remove("modal-open");
  }

  orderModal.addEventListener("click", (e) => {
    if (e.target === orderModal || e.target.closest(".order-modal-close")) closeOrderModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOrderModal();
  });

  document.querySelectorAll(".btn-nav, .btn-mobile-order, .btn-secondary, .btn-promo").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openOrderModal();
    });
  });

  // ---- MENU TABS ----
  const catTabs = document.querySelectorAll(".cat-tab");
  const productsGrid = document.getElementById("productsGrid");

  let currentCat = "burgers";

  function renderProducts(cat) {
    const items = menuData[cat] || [];
    productsGrid.innerHTML = "";

    items.forEach((item, i) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.style.animationDelay = `${i * 60}ms`;

      card.innerHTML = `
        <div class="product-img">${item.emoji}</div>
        <div class="product-body">
          <div class="product-name">${item.name}</div>
          <div class="product-desc">${item.desc}</div>
          <div class="product-footer">
            <span class="product-price">${item.price}</span>
            <button type="button" class="btn-order">Commander</button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });
  }

  productsGrid.addEventListener("click", (e) => {
    if (e.target.closest(".btn-order")) openOrderModal();
  });

  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCat = tab.dataset.cat;
      renderProducts(currentCat);
    });
  });

  renderProducts(currentCat);

  // ---- SMOOTH ACTIVE LINK en scroll ----
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".nav-links a").forEach(link => {
          link.style.color = link.getAttribute("href") === `#${entry.target.id}`
            ? "var(--white)" : "";
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

});

function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}