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
    { name: "WAM'S", desc: "Burger signature WAM'S, steak, fromage, salade, tomate et sauce maison.", price: "Menu 11,90\u20ac", emoji: "\u{1F354}" },
    { name: "WAM'S 2.0", desc: "Version genereuse du classique avec double plaisir et sauce maison.", price: "Menu 11,90\u20ac", emoji: "\u{1F354}" },
    { name: "Brooklyn", desc: "Burger gourmand facon WAM'S avec fromage fondant et sauce au choix.", price: "Menu 11,90\u20ac", emoji: "\u{1F354}" },
    { name: "Miami", desc: "Recette maison genereuse, servie avec frites et boisson en menu.", price: "Menu 11,90\u20ac", emoji: "\u{1F354}" },
    { name: "Boston", desc: "Burger complet, pain moelleux, viande et sauce maison.", price: "Menu 11,90\u20ac", emoji: "\u{1F354}" },
    { name: "Californien", desc: "Burger gourmand avec une touche fraiche et sauce signature.", price: "Menu 11,90\u20ac", emoji: "\u{1F354}" },
    { name: "Chicago", desc: "Burger genereux et fondant, prepare a la commande.", price: "Menu 11,90\u20ac", emoji: "\u{1F354}" },
    { name: "Vegetarien", desc: "Alternative veggie, fromage, crudites et sauce au choix.", price: "Menu 11,90\u20ac", emoji: "\u{1F951}" },
    { name: "WAM'S Smoked", desc: "Burger fume et gourmand pour les grosses faims.", price: "Menu 14,90\u20ac", emoji: "\u{1F525}" }
  ],

  tacos: [
    { name: "Tacos 1 viande", desc: "Viande au choix, sauce fromagere, frites et sauce au choix.", price: "5,00\u20ac", emoji: "\u{1F32F}" },
    { name: "Tacos 2 viandes", desc: "Deux viandes au choix, sauce fromagere, frites et sauce au choix.", price: "7,00\u20ac", emoji: "\u{1F32F}" },
    { name: "Tacos 3 viandes", desc: "Trois viandes au choix, sauce fromagere, frites et sauce au choix.", price: "9,00\u20ac", emoji: "\u{1F32F}" },
    { name: "Formule etudiant", desc: "Menu 1 viande, menu 2 viandes ou menu 3 viandes selon ton appetit.", price: "6,00\u20ac / 8,00\u20ac / 10,00\u20ac", emoji: "\u{1F393}" }
  ],

  bowls: [
    { name: "WAM'S Bowl'z", desc: "Base frites, viande au choix, fromage, sauces et toppings gourmands.", price: "5,50\u20ac", emoji: "\u{1F957}" },
    { name: "Bowl'z etudiant", desc: "Version etudiant du WAM'S Bowl'z.", price: "4,50\u20ac (menu 5,50\u20ac)", emoji: "\u{1F393}" },
    { name: "Fromages", desc: "Cheddar, sauce fromagere, boursin (+0,50\u20ac), raclette (+0,50\u20ac).", price: "Au choix", emoji: "\u{1F9C0}" },
    { name: "Viandes", desc: "Viande hachee, merguez, tender, cordon-bleu, kebab, nuggets, poulet curry, poulet tandoori, poulet nature, bacon.", price: "Au choix", emoji: "\u{1F357}" },
    { name: "Sauces", desc: "Algerienne, biggy, barbecue, samourai, blanche, ketchup, mayo, poivre, curry, harissa.", price: "Au choix", emoji: "\u{1FAD9}" }
  ],

  box: [
    { name: "Box 6\u20ac", desc: "Cheeseburger, frite et 2 wings.", price: "6\u20ac", emoji: "\u{1F4E6}" },
    { name: "Box 10\u20ac", desc: "Cheeseburger, frite composee avec sauce et poulet croustillant, 3 wings, 1 Capri-Sun.", price: "10\u20ac", emoji: "\u{1F4E6}" },
    { name: "Box 14\u20ac", desc: "2 burgers boeuf + tenders de poulet, frites, 4 wings, sauces cheddar, fromagere, barbecue et oignons, 1 Capri-Sun.", price: "14\u20ac", emoji: "\u{1F4E6}" }
  ],

  wings: [
    { name: "Wings", desc: "Wings croustillants, parfaits a partager ou en menu.", price: "Menu 8 wings 9,90\u20ac / 5 wings 7,90\u20ac / 3 wings 5,90\u20ac", emoji: "\u{1F357}" },
    { name: "Tenders", desc: "Tenders de poulet croustillants, servis avec sauce au choix.", price: "Menu 8 tenders 10,90\u20ac / 5 tenders 8,90\u20ac / 3 tenders 6,90\u20ac", emoji: "\u{1F357}" },
    { name: "Menu enfant", desc: "5 nuggets ou cheeseburger avec Capri-Sun.", price: "5,50\u20ac", emoji: "\u2b50" }
  ],

  etudiant: [
    { name: "Burger etudiant", desc: "Burger etudiant WAM'S.", price: "4,50\u20ac (menu 5,50\u20ac)", emoji: "\u{1F393}" },
    { name: "Tacos etudiant 1 viande", desc: "Tacos 1 viande en formule etudiant.", price: "6,00\u20ac", emoji: "\u{1F32F}" },
    { name: "Tacos etudiant 2 viandes", desc: "Tacos 2 viandes en formule etudiant.", price: "8,00\u20ac", emoji: "\u{1F32F}" },
    { name: "Tacos etudiant 3 viandes", desc: "Tacos 3 viandes en formule etudiant.", price: "10,00\u20ac", emoji: "\u{1F32F}" }
  ]
};