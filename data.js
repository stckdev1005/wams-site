// ============================================
//  DATA.JS - Produits du menu WAM'S
// ============================================

const PHONE = "tel:+33177030597";
const ORDER_ACTION = "tel";

function getOrderLink(productName) {
  return PHONE;
}

const menuData = {
  burgers: [
    { name: "Le Wam's", desc: "Steak, salade, tomate, sauce mayonnaise, barbecue, raclette fondue, cornichons, champignons, œuf", price: "7,90€", image: "assets/IMG_1.jpeg" },
    { name: "Le New-York", desc: "Steak, salade, sauce ail légère maison, fromage raclette, oignons confits, bacon", price: "9,00€", image: "assets/IMG_2.jpeg" },
    { name: "Le Parisien", desc: "Steak, salade, tomate, sauce poivre raclette maison, 2 cheddars épicés, oignons frits, champignons", price: "9,00€", image: "assets/IMG_3.jpeg" },
    { name: "Le Brooklyn", desc: "Steak, salade, tomate, sauce poivre, cheddar, œuf, lardons", price: "7,90€", image: "assets/IMG_4.jpeg" },
    { name: "Le Chicago", desc: "Steak, double cheddar, cornichons, salade, ketchup, mayonnaise, moutarde", price: "7,90€", image: "assets/IMG_5.jpeg" },
    { name: "Le Californien", desc: "Poulet croustillant, salade, tomate, sauce barbecue, mayonnaise, sauce pimentée, 2 tranches cheddar", price: "9,00€", image: "assets/IMG_6.jpeg" },
    { name: "Le Miami", desc: "Steak, salade, tomate, sauce cocktail, chèvre, oignons caramélisés, miel", price: "9,00€", image: "assets/IMG_7.jpeg" },
    { name: "Le Végétarien", desc: "Steak végétarien frais, salade, sauce blanche, 2 cheddars, oignons rouges, mozzarella, avocats", price: "10,90€", image: "assets/IMG_8.jpeg" }
  ],

  tacos: [
    { name: "Tacos 1 Viande", desc: "Compose et personnalise ton taco — Petit 5€, Moyen 7€, Grand 9€", price: "dès 5,00€", image: "assets/tacos-1.jpg" },
    { name: "Tacos 2 Viandes", desc: "Double viande, sauce, fromage — Petit 7€, Moyen 9€, Grand 11€", price: "dès 7,00€", image: "assets/tacos-2.jpg" },
    { name: "Tacos 3 Viandes", desc: "Triple viande gourmande — Petit 9€, Moyen 11€, Grand 13€", price: "dès 9,00€", image: "assets/tacos-3.jpg" },
    { name: "Formule Étudiant", desc: "Petit 1 viande 6,50€, Moyen 2 viandes 7,50€, Grand 3 viandes 9,50€ (avec boisson)", price: "dès 6,50€", image: "assets/tacos-etudiant.jpg" }
  ],

  bowls: [
    { name: "Barquette Frites Composée", desc: "Choisis : Fromage (Cheddar), Viande, Sauce — Formule étudiant 4,50€ | Menu 5,50€ | Simple 6,90€", price: "dès 4,50€", image: "assets/barquette-frites.jpg" },
    { name: "Bar à Salade", desc: "Compose ta salade — 4 ingrédients au choix : Salades, Protéines, Légumes, Fromages + Sauce maison", price: "5,90€", image: "assets/salade.jpg" },
    { name: "Menu Salade + Boisson", desc: "Salade composée + boisson", price: "7,00€", image: "assets/salade-menu.jpg" }
  ],

  box: [
    { name: "Petit Menu Tenders/Wings", desc: "1 barquette de frites + 1 canette + 5 Tenders ou 5 Wings", price: "6,00€", image: "assets/box-petit.jpg" },
    { name: "Menu Burgers", desc: "Burger au choix + boisson + frites", price: "11,90€", image: "assets/box-burgers.jpg" },
    { name: "Grand Menu Tenders/Wings", desc: "2 barquettes de frites + 1 grande boisson + 10 Tenders et 15 Wings", price: "24,90€", image: "assets/box-grand.jpg" }
  ],

  wings: [
    { name: "5 Tenders", desc: "Filets de poulet panés croustillants", price: "8,00€", image: "assets/tenders-5.jpg" },
    { name: "8 Wings", desc: "Ailes marinées et dorées", price: "7,90€", image: "assets/wings-8.jpg" },
    { name: "5 Tenders OU 5 Wings", desc: "Au choix, petite portion", price: "4,00€", image: "assets/wings-5.jpg" },
    { name: "15 Tenders OU 15 Wings", desc: "Pour les grands appétits", price: "18,90€", image: "assets/wings-15.jpg" },
    { name: "15 Tenders ET 15 Wings", desc: "Le combo XXL", price: "20,00€", image: "assets/wings-combo.jpg" }
  ],

  autres: [
    { name: "Hot-Dog 3,90€", desc: "Compose ton hot-dog : Saucisse végétarienne, Barbecue, Ketchup, Moutarde, Cheddar, Cornichons, Oignons", price: "dès 3,90€", image: "assets/hotdog.jpg" },
    { name: "Menu Hot-Dog", desc: "Hot-Dog + boisson + frites", price: "5,90€", image: "assets/hotdog-menu.jpg" },
    { name: "Wrap Poulet Tender", desc: "Sauce biggy crème fraîche, salade, tomates, cornichons, 2 tranches cheddar, poulet tender", price: "5,90€", image: "assets/wrap.jpg" },
    { name: "CheeseRurger", desc: "Simple et efficace", price: "2,95€", image: "assets/cheeseburger.jpg" }
  ],

  desserts: [
    { name: "Mini Tacos Nutella", desc: "Nutella, banane, coco", price: "3,50€", image: "assets/dessert-nutella.jpg" },
    { name: "Tiramisu", desc: "Classique italien", price: "3,00€", image: "assets/dessert-tiramisu.jpg" },
    { name: "Barre Chocolatée Glacée", desc: "Croustillante et gelée", price: "1,50€", image: "assets/dessert-chocolat.jpg" },
    { name: "Häagen-Dazs", desc: "Demande nos saveurs disponibles", price: "100ml 4€ | 500ml 10€", image: "assets/dessert-glace.jpg" }
  ],

  speciale: [
    { name: "WAM'S Croustiy Menu ⭐", desc: "Crousty à l'extérieur, fondant à l'intérieur — Choix : Chili Thaïs ou Aigre-douce sucré — Seul 8,50€ | Duo", price: "9,90€", image: "assets/croustiy-special.jpg" }
  ]
};