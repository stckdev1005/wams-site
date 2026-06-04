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
    { name: "Petit — 1 Viande", desc: "Compose ton tacos — Viandes : Boeuf haché, Cordon bleu, Escalope, Merguez, Poulet curry, Tandoori, Tender, Nuggets, Bacon", price: "5,00€", image: "assets/Tacos1viande.png" },
    { name: "Moyen — 2 Viandes", desc: "Fromages : Boursin, Cheddar, Chèvre, Comté, Emmental, Gouda, Raclette (supplément +1,00€)", price: "7,00€", image: "assets/Tacos2viandes.png" },
    { name: "Grand — 3 Viandes", desc: "Sauces : Ail, Algérienne, Barbecue, Bigi, Blanche, Cocktail, Curry, Harissa, Ketchup, Mayo, Poivre, Samouraï — Accompagnements : Maïs, Oignons caramélisés, Olives, Poivrons (+0,50€)", price: "9,00€", image: "assets/Tacos3viandes.png" },
    { name: "Formule Étudiant — Petit", desc: "Tacos 1 viande + boisson", price: "5,50€", image: "assets/Tacos1viande.png" },
    { name: "Formule Étudiant — Moyen", desc: "Tacos 2 viandes + boisson", price: "7,50€", image: "assets/Tacos2viandes.png" },
    { name: "Formule Étudiant — Grand", desc: "Tacos 3 viandes + boisson", price: "9,50€", image: "assets/Tacos3viandes.png" }
  ],

  bowls: [
    { name: "Menu Barquette", desc: "Barquette composée + boisson", price: "5,50€", image: "assets/barquette.png" },
    { name: "Bar à Salade", desc: "4 ingrédients au choix — Protéines : Poulet, Thon, Poulet curry, Poulet tender, Poulet tandoori — Légumes : Tomates, Maïs, Oignons, Olives, Noix, Raisins — Fromages : Chèvre, Emmental, Mozzarella + Sauce maison moutarde légère (ingrédient ajouté +0,50€)", price: "5,90€", image: "assets/salade.png" },
    { name: "Menu Salade + Boisson", desc: "Salade composée + boisson", price: "7,00€", image: "assets/salade.png" }
  ],

  box: [
    { name: "Box 6€", desc: "Cheeseburger + frite + 2 wings", price: "6,00€", image: "assets/petitebox6 .png" },
    { name: "Box 10€", desc: "Cheeseburger + frite composée (sauce + poulet croustillant) + 3 wings + 1 Capri-Sun", price: "10,00€", image: "assets/moyenbox8.png" },
    { name: "Box 14€", desc: "2 burgers (boeuf + tenders) + frites + 4 wings + sauces cheddar, fromagère, barbecue et oignons + 1 Capri-Sun", price: "14,00€", image: "assets/bigbox14.png" }
  ],

  wings: [
    { name: "3 Tenders ou 3 Wings", desc: "Petite portion croustillante", price: "4,00€", image: "assets/3wings.png" },
    { name: "Petit Menu 8 Tenders", desc: "8 Tenders + 1 barquette de frites + 1 canette", price: "10,90€", image: "assets/menu8tenders.png" },
    { name: "Petit Menu 8 Wings", desc: "8 Wings + 1 barquette de frites + 1 canette", price: "9,90€", image: "assets/menu8wings.png" },
    { name: "Grand Menu 10 Tenders + 15 Wings", desc: "2 barquettes de frites + 1 grande boisson", price: "24,90€", image: "assets/menutenderswings.png" },
  ],

  autres: [
    { name: "Hot-Dog", desc: "Compose ton hot-dog — 1. Saucisse végétarienne 2. Barbecue/Ketchup/Mayonnaise/Moutarde 3. Cheddar 4. Cornichon/Oignons — Supplément +0,50€", price: "3,90€", image: "assets/hotdog.png" },
    { name: "Menu Hot-Dog", desc: "Hot-Dog + boisson + frites", price: "5,90€", image: "assets/menuhotdog.png" },
    { name: "Wrap Poulet Tender", desc: "Sauce biggy crème fraîche, salade, tomates, cornichons, 2 tranches cheddar, poulet tender", price: "5,90€", image: "assets/wrap.png" }
  ],

  desserts: [
    { name: "Mini Tacos Nutella", desc: "Nutella, banane, coco", price: "3,50€", image: "assets/minitacosnutella.png" },
    { name: "Tiramisu", desc: "Classique italien", price: "3,00€", image: "assets/tiramisu.png" },
    { name: "Barre Chocolatée Glacée", desc: "Croustillante et glacée", price: "1,50€", image: "assets/barreglace.png" },
    { name: "Häagen-Dazs", desc: "Demande nos saveurs disponibles", price: "100ml 4€ | 500ml 10€", image: "assets/Haagen-dasz.png" },
    { name: "Canette", desc: "Oasis, Coca, etc.", price: "1,50€", image: "assets/cannetes.png" },
    { name: "Bouteille de Soda 1,5L", desc: "", price: "3,00€", image: "assets/bottle15lit.png" },
    { name: "Bouteille d'eau", desc: "Petite", price: "1,00€", image: "assets/waterbottle.png" }
  ],

  speciale: [
    { name: "WAM'S Croustiy Menu ⭐", desc: "Crousty à l'extérieur, fondant à l'intérieur — Choix sauce : Chili Thaïs (Tiquan) ou Aigre-douce sucré — Fait maison, préparé à la commande", price: "Seul 8,50€ | Duo 9,90€", image: "assets/tastycrousty.png" }
  ],

  etudiant: [
    { name: "Formule Étudiant Burger", desc: "Burger au choix + boisson + frites — sur présentation carte étudiant", price: "10,90€", image: "assets/moyenbox8.png" },
    { name: "Formule Étudiant Tacos Petit", desc: "Tacos 1 viande + boisson", price: "5,50€", image: "assets/Tacos1viande.png" },
    { name: "Formule Étudiant Tacos Moyen", desc: "Tacos 2 viandes + boisson", price: "7,50€", image: "assets/Tacos2viandes.png" },
    { name: "Formule Étudiant Tacos Grand", desc: "Tacos 3 viandes + boisson", price: "9,50€", image: "assets/Tacos3viandes.png" },
    { name: "Formule Étudiant Frites", desc: "Barquette de frites composée + boisson", price: "4,50€", image: "assets/barquette.png" }
  ]
};