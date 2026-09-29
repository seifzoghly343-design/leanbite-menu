/* =========================================================
   LEAN BITE MENU — data.js
   Pricing and nutrition values come from:
   "Leanbite Pricing A La Carte.xlsx"

   Images come from the uploaded Lean Bite meal image ZIP.

   Notes:
   - Category structure follows the Excel pricing workbook.
   - All products are currently available.
   - Missing image/pricing links are listed in integrationNotes.
   - Odoo product IDs remain null until backend integration.
   ========================================================= */

window.LEAN_BITE_DATA = {
  "settings": {
    "brandName": "Lean Bite",
    "locale": "en-IQ",
    "currencyCode": "IQD",
    "currencyLabel": "IQD",
    "odooConnected": false,
    "checkoutEnabled": false
  },
  "categories": [
    {
      "id": "breakfast",
      "name": "Breakfast",
      "order": 1
    },
    {
      "id": "salads-bowls",
      "name": "Salads & Bowls",
      "order": 2
    },
    {
      "id": "main-dishes",
      "name": "Main Dishes",
      "order": 3
    },
    {
      "id": "sandwiches-wraps",
      "name": "Sandwiches & Wraps",
      "order": 4
    },
    {
      "id": "snacks-desserts",
      "name": "Snacks & Desserts",
      "order": 5
    },
    {
      "id": "add-ons",
      "name": "Add-On's",
      "order": 6
    },
    {
      "id": "protein-shakes",
      "name": "Protein Shakes",
      "order": 7
    },
    {
      "id": "fresh-juices",
      "name": "Fresh Juices",
      "order": 8
    },
    {
      "id": "sauces",
      "name": "Sauces",
      "order": 9
    },
    {
      "id": "drinks",
      "name": "Drinks",
      "order": 10
    }
  ],
  "offers": [],
  "meals": [
    {
      "id": "meal-001",
      "odooProductId": null,
      "name": "Egg White Omelette",
      "category": "breakfast",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Egg White Omelet.jpg",
      "badge": "",
      "nutrition": {
        "calories": 373.19,
        "protein": 26.58,
        "carbs": 32.09,
        "fat": 14.967
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-002",
      "odooProductId": null,
      "name": "Our Shakshuka",
      "category": "breakfast",
      "description": "",
      "price": 6000,
      "image": "assets/images/meals/Shakshuka.jpg",
      "badge": "",
      "nutrition": {
        "calories": 582,
        "protein": 34.16,
        "carbs": 44.825,
        "fat": 32.669
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-003",
      "odooProductId": null,
      "name": "3 Eggs Any Way",
      "category": "breakfast",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/3 Eggs Any Way.jpg",
      "badge": "",
      "nutrition": {
        "calories": 361.51,
        "protein": 25.1,
        "carbs": 30.29,
        "fat": 14.783
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-004",
      "odooProductId": null,
      "name": "Breakfast Burrito",
      "category": "breakfast",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/Breakfast Burrito.jpg",
      "badge": "",
      "nutrition": {
        "calories": 569.055,
        "protein": 28.34,
        "carbs": 53.26,
        "fat": 27.936
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-005",
      "odooProductId": null,
      "name": "Halloumi Pesto Bagel",
      "category": "breakfast",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/Bagel Halloumi.jpg",
      "badge": "",
      "nutrition": {
        "calories": 432.35,
        "protein": 26.75,
        "carbs": 49,
        "fat": 14.81
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-006",
      "odooProductId": null,
      "name": "Edamame (200 g)",
      "category": "salads-bowls",
      "description": "",
      "price": 6500,
      "image": "assets/images/meals/Edamame (200G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 242,
        "protein": 22,
        "carbs": 20,
        "fat": 10
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-007",
      "odooProductId": null,
      "name": "Arabic Salad",
      "category": "salads-bowls",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Arabic Salad.jpg",
      "badge": "",
      "nutrition": {
        "calories": 125.19,
        "protein": 3.438,
        "carbs": 13.747,
        "fat": 7.744
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-008",
      "odooProductId": null,
      "name": "Freekeh Salad",
      "category": "salads-bowls",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Freekeh Salad.jpg",
      "badge": "",
      "nutrition": {
        "calories": 412,
        "protein": 16.915,
        "carbs": 46.32,
        "fat": 16.175
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-009",
      "odooProductId": null,
      "name": "Lippi Salad",
      "category": "salads-bowls",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Lippi Salad.jpg",
      "badge": "",
      "nutrition": {
        "calories": 190.8,
        "protein": 2.895,
        "carbs": 14.295,
        "fat": 15.01
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-010",
      "odooProductId": null,
      "name": "Grilled Chicken Quinoa Salad",
      "category": "salads-bowls",
      "description": "",
      "price": 8000,
      "image": "assets/images/meals/Grilled Chicken Qinuoa Salad.jpg",
      "badge": "",
      "nutrition": {
        "calories": 467.8,
        "protein": 38.93,
        "carbs": 39.465,
        "fat": 17.115
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-011",
      "odooProductId": null,
      "name": "Chicken Teriyaki Poke Bowl",
      "category": "salads-bowls",
      "description": "",
      "price": 9000,
      "image": "assets/images/meals/Chicken Teriyaki Poke Bowl.jpg",
      "badge": "",
      "nutrition": {
        "calories": 509.35,
        "protein": 39.3,
        "carbs": 51.6,
        "fat": 16.99
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-012",
      "odooProductId": null,
      "name": "Grilled Chicken Breast With White Rice",
      "category": "main-dishes",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Grilled Chicken Breast with White Rice.jpg",
      "badge": "",
      "nutrition": {
        "calories": 382.62,
        "protein": 34.683,
        "carbs": 47.2,
        "fat": 4.912
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-013",
      "odooProductId": null,
      "name": "Beef Tenderloin With Roasted Sweet Potatoes",
      "category": "main-dishes",
      "description": "",
      "price": 12000,
      "image": "assets/images/meals/Beef Tenderloin with Sweet Potatoes.jpg",
      "badge": "",
      "nutrition": {
        "calories": 383.35,
        "protein": 30.2,
        "carbs": 33.2,
        "fat": 14.615
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-014",
      "odooProductId": null,
      "name": "Mongolian Beef",
      "category": "main-dishes",
      "description": "",
      "price": 12000,
      "image": "assets/images/meals/Mongolian Beef.jpg",
      "badge": "",
      "nutrition": {
        "calories": 510.75,
        "protein": 34.178,
        "carbs": 59.6,
        "fat": 15.171
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-015",
      "odooProductId": null,
      "name": "Chicken Penne Arabiatta",
      "category": "main-dishes",
      "description": "",
      "price": 6000,
      "image": "assets/images/meals/Chicken Penne Arabiatta.jpg",
      "badge": "",
      "nutrition": {
        "calories": 449.76,
        "protein": 41.19,
        "carbs": 61.05,
        "fat": 5.588
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-016",
      "odooProductId": null,
      "name": "Burghul Meatballs with Rice",
      "category": "main-dishes",
      "description": "",
      "price": 10500,
      "image": "assets/images/meals/Burghul Meatballs.jpg",
      "badge": "",
      "nutrition": {
        "calories": 544.85,
        "protein": 31.508,
        "carbs": 78.85,
        "fat": 23.136
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-017",
      "odooProductId": null,
      "name": "Biryani Chicken",
      "category": "main-dishes",
      "description": "",
      "price": 7000,
      "image": "assets/images/meals/Biryani Chicken.jpg",
      "badge": "",
      "nutrition": {
        "calories": 479.2,
        "protein": 39.703,
        "carbs": 63.55,
        "fat": 7.236
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-018",
      "odooProductId": null,
      "name": "Paprika Chicken",
      "category": "main-dishes",
      "description": "",
      "price": 7000,
      "image": "assets/images/meals/Paprika Chicken.jpg",
      "badge": "",
      "nutrition": {
        "calories": 441.92,
        "protein": 38.855,
        "carbs": 62.905,
        "fat": 6.361
      },
      "available": true,
      "featured": false,
      "order": 7,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-019",
      "odooProductId": null,
      "name": "Non-Butter Chicken",
      "category": "main-dishes",
      "description": "",
      "price": 8000,
      "image": "assets/images/meals/Non-Butter Chicken.jpg",
      "badge": "",
      "nutrition": {
        "calories": 442.687,
        "protein": 33.371,
        "carbs": 21.611,
        "fat": 25.706
      },
      "available": true,
      "featured": false,
      "order": 8,
      "source": "pricing-xlsx"
    },
         {
      "id": "meal-020",
      "odooProductId": null,
      "name": "Fish Fillet with Saffron Rice",
      "category": "main-dishes",
      "description": "",
      "price": 7000,
      "image": "assets/images/meals/Fish Fillet w Saffron Rice.jpg",
      "badge": "",
      "nutrition": {
        "calories": 366.96,
        "protein": 31.123,
        "carbs": 49.87,
        "fat": 4.144
      },
      "available": true,
      "featured": false,
      "order": 9,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-021",
      "odooProductId": null,
      "name": "Spaghetti Bolognese",
      "category": "main-dishes",
      "description": "",
      "price": 9500,
      "image": "assets/images/meals/Spaghetti Bolognese.jpg",
      "badge": "",
      "nutrition": {
        "calories": 515.96,
        "protein": 27.705,
        "carbs": 55.02,
        "fat": 21.973
      },
      "available": true,
      "featured": false,
      "order": 10,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-022",
      "odooProductId": null,
      "name": "Mushroom Shrimp Risotto",
      "category": "main-dishes",
      "description": "",
      "price": 11000,
      "image": "assets/images/meals/Mushroom Shrimp Risotto.jpg",
      "badge": "",
      "nutrition": {
        "calories": 473.71,
        "protein": 34.45,
        "carbs": 48.19,
        "fat": 15.686
      },
      "available": true,
      "featured": false,
      "order": 11,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-023",
      "odooProductId": null,
      "name": "Roasted Pepper Shrimp Risotto",
      "category": "main-dishes",
      "description": "",
      "price": 11000,
      "image": "assets/images/meals/Roasted Pepper Shrimp Risotto.jpg",
      "badge": "",
      "nutrition": {
        "calories": 512.41,
        "protein": 34.71,
        "carbs": 54.37,
        "fat": 17.066
      },
      "available": true,
      "featured": false,
      "order": 12,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-024",
      "odooProductId": null,
      "name": "Roasted Quzi",
      "category": "main-dishes",
      "description": "",
      "price": 12000,
      "image": "assets/images/meals/Roasted Quzi.jpg",
      "badge": "",
      "nutrition": {
        "calories": 582.4,
        "protein": 53.56,
        "carbs": 63.643,
        "fat": 12.943
      },
      "available": true,
      "featured": false,
      "order": 13,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-025",
      "odooProductId": null,
      "name": "Cajun Chicken",
      "category": "main-dishes",
      "description": "",
      "price": 7000,
      "image": "assets/images/meals/Cajun Chicken.jpg",
      "badge": "",
      "nutrition": {
        "calories": 457.95,
        "protein": 39.243,
        "carbs": 57.65,
        "fat": 7.691
      },
      "available": true,
      "featured": false,
      "order": 14,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-026",
      "odooProductId": null,
      "name": "Grilled Chicken Burger",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 6000,
      "image": "assets/images/meals/Grilled Chicken Burger.jpg",
      "badge": "",
      "nutrition": {
        "calories": 474,
        "protein": 43.27,
        "carbs": 50.77,
        "fat": 10.52
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-027",
      "odooProductId": null,
      "name": "Healthy Beef Burger",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 8500,
      "image": "assets/images/meals/Healthy Beef Burger.jpg",
      "badge": "",
      "nutrition": {
        "calories": 581.6,
        "protein": 44.11,
        "carbs": 61.65,
        "fat": 25.4
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-028",
      "odooProductId": null,
      "name": "Shish Tawook Wrap",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 6000,
      "image": "assets/images/meals/Shish Tawook Wrap.jpg",
      "badge": "",
      "nutrition": {
        "calories": 410.75,
        "protein": 47.205,
        "carbs": 43.935,
        "fat": 8.32
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-029",
      "odooProductId": null,
      "name": "Pulled Beef Wrap",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 9000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 524.2,
        "protein": 43.35,
        "carbs": 62.53,
        "fat": 16.05
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-030",
      "odooProductId": null,
      "name": "Doner Kebab",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 9000,
      "image": "assets/images/meals/Doner Kebab.jpg",
      "badge": "",
      "nutrition": {
        "calories": 545.4,
        "protein": 35.63,
        "carbs": 59.19,
        "fat": 36.05
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-031",
      "odooProductId": null,
      "name": "Tunacado",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 6000,
      "image": "assets/images/meals/Tunacado.jpg",
      "badge": "",
      "nutrition": {
        "calories": 407.88,
        "protein": 29.88,
        "carbs": 56.84,
        "fat": 17.899
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-032",
      "odooProductId": null,
      "name": "Protein Brownie",
      "category": "snacks-desserts",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Protein Brownie.jpg",
      "badge": "",
      "nutrition": {
        "calories": 241.783,
        "protein": 13.471,
        "carbs": 30.88,
        "fat": 10.521
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-033",
      "odooProductId": null,
      "name": "Peanut Butter Choco Balls",
      "category": "snacks-desserts",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/Peanut Butter Choco Balls.jpg",
      "badge": "",
      "nutrition": {
        "calories": 260,
        "protein": 26,
        "carbs": 22,
        "fat": 12
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-034",
      "odooProductId": null,
      "name": "Oatmeal Cookie",
      "category": "snacks-desserts",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/Oatmeal Cookie.jpg",
      "badge": "",
      "nutrition": {
        "calories": 192,
        "protein": 14,
        "carbs": 26,
        "fat": 11
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-035",
      "odooProductId": null,
      "name": "Peanut Butter Rice Cake",
      "category": "snacks-desserts",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/Peanut Butter Rice Cake.png",
      "badge": "",
      "nutrition": {
        "calories": 392,
        "protein": 12,
        "carbs": 29,
        "fat": 19
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-036",
      "odooProductId": null,
      "name": "Double Choco Cookie",
      "category": "snacks-desserts",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/Double Choco Cookie.jpg",
      "badge": "",
      "nutrition": {
        "calories": 255,
        "protein": 14,
        "carbs": 11,
        "fat": 21
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-037",
      "odooProductId": null,
      "name": "Vanilla Protein Pancake with Mixed Berries",
      "category": "snacks-desserts",
      "description": "",
      "price": 7000,
      "image": "assets/images/meals/Vanilla Protein Pancake with Mixed Berries.png",
      "badge": "",
      "nutrition": {
        "calories": 410,
        "protein": 37.97,
        "carbs": 39,
        "fat": 6
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-038",
      "odooProductId": null,
      "name": "Sweet Potato Pancake",
      "category": "snacks-desserts",
      "description": "",
      "price": 7000,
      "image": "assets/images/meals/Sweet Potato Pancakes.jpg",
      "badge": "",
      "nutrition": {
        "calories": 406,
        "protein": 18,
        "carbs": 47,
        "fat": 8
      },
      "available": true,
      "featured": false,
      "order": 7,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-039",
      "odooProductId": null,
      "name": "Chicken Breast (50 g)",
      "category": "add-ons",
      "description": "",
      "price": 1500,
      "image": "assets/images/meals/Chicken Breast (50G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 78,
        "protein": 14.625,
        "carbs": 0,
        "fat": 1.69
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-040",
      "odooProductId": null,
      "name": "Beef Tenderloin (50 g)",
      "category": "add-ons",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/Beef Tenderloin (50G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 120.9,
        "protein": 13.65,
        "carbs": 0,
        "fat": 7.15
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-041",
      "odooProductId": null,
      "name": "White Rice (100 g)",
      "category": "add-ons",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/White Rice (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 146,
        "protein": 2.84,
        "carbs": 32,
        "fat": 0.28
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-042",
      "odooProductId": null,
      "name": "Burghul (100 g)",
      "category": "add-ons",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/Burghul (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 136.8,
        "protein": 4.92,
        "carbs": 30.4,
        "fat": 0.52
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx"
    },    {
      "id": "meal-043",
      "odooProductId": null,
      "name": "Brown Rice (100 g)",
      "category": "add-ons",
      "description": "",
      "price": 1500,
      "image": "assets/images/meals/Brown Rice (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 148,
        "protein": 3,
        "carbs": 30.8,
        "fat": 1.08
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-044",
      "odooProductId": null,
      "name": "Steamed Vegetables (100 g)",
      "category": "add-ons",
      "description": "",
      "price": 2000,
      "image": "assets/images/meals/Steamed Vegetables (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 31,
        "protein": 1.6,
        "carbs": 6.6,
        "fat": 0.3
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-045",
      "odooProductId": null,
      "name": "Baked Potatoes (100 g)",
      "category": "add-ons",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/Baked Potatoes (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 84.7,
        "protein": 2.2,
        "carbs": 18.7,
        "fat": 0.11
      },
      "available": true,
      "featured": false,
      "order": 7,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-046",
      "odooProductId": null,
      "name": "Sweet Potatoes (100 g)",
      "category": "add-ons",
      "description": "",
      "price": 2000,
      "image": "assets/images/meals/Sweep Potatoes (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 111.8,
        "protein": 2.08,
        "carbs": 26,
        "fat": 0.13
      },
      "available": true,
      "featured": false,
      "order": 8,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-047",
      "odooProductId": null,
      "name": "Mushrooms & Potatoes (100 g)",
      "category": "add-ons",
      "description": "",
      "price": 2000,
      "image": "assets/images/meals/Mushrooms & Potatoes (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 55,
        "protein": 2.75,
        "carbs": 11,
        "fat": 0.22
      },
      "available": true,
      "featured": false,
      "order": 9,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-048",
      "odooProductId": null,
      "name": "Vanilla Voltage",
      "category": "protein-shakes",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Vanilla Voltage.jpg",
      "badge": "",
      "nutrition": {
        "calories": 548,
        "protein": 42.62,
        "carbs": 52,
        "fat": 18.11
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-049",
      "odooProductId": null,
      "name": "Macho Mocha",
      "category": "protein-shakes",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Macho Mocha.jpg",
      "badge": "",
      "nutrition": {
        "calories": 584,
        "protein": 39.995,
        "carbs": 56,
        "fat": 29.8
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-050",
      "odooProductId": null,
      "name": "Crimson Fuel",
      "category": "protein-shakes",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Crimson Fuel.jpg",
      "badge": "",
      "nutrition": {
        "calories": 319.3,
        "protein": 34.9,
        "carbs": 36.45,
        "fat": 5.2
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-051",
      "odooProductId": null,
      "name": "Evergreen Energy",
      "category": "protein-shakes",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Evergreen Energy.jpg",
      "badge": "",
      "nutrition": {
        "calories": 332.5,
        "protein": 32.25,
        "carbs": 31.45,
        "fat": 11.16
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-052",
      "odooProductId": null,
      "name": "Brew Boost",
      "category": "protein-shakes",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Brew Boost.jpg",
      "badge": "",
      "nutrition": {
        "calories": 302.31,
        "protein": 33.81,
        "carbs": 30.26,
        "fat": 5.25
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-053",
      "odooProductId": null,
      "name": "Golden Glow",
      "category": "fresh-juices",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/Golden Glow.jpg",
      "badge": "",
      "nutrition": {
        "calories": 148,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-054",
      "odooProductId": null,
      "name": "Detox Greenz",
      "category": "fresh-juices",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/Detox Greens.jpg",
      "badge": "",
      "nutrition": {
        "calories": 136,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-055",
      "odooProductId": null,
      "name": "Heartbeat Ruby",
      "category": "fresh-juices",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/Heartbeat Ruby.jpg",
      "badge": "",
      "nutrition": {
        "calories": 150,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-056",
      "odooProductId": null,
      "name": "Honey Mustard",
      "category": "sauces",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/Honey Mustard Sauce.jpg",
      "badge": "",
      "nutrition": {
        "calories": 51,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-057",
      "odooProductId": null,
      "name": "Sriracha Greek Yogurt",
      "category": "sauces",
      "description": "",
      "price": 1000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 20,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-058",
      "odooProductId": null,
      "name": "Lemon Vinaigrette",
      "category": "sauces",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/Lemon Vinigranette.jpg",
      "badge": "",
      "nutrition": {
        "calories": 93,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-059",
      "odooProductId": null,
      "name": "Dakkus Sauce",
      "category": "sauces",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/Dakkus Sauce.jpg",
      "badge": "",
      "nutrition": {
        "calories": 11,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-060",
      "odooProductId": null,
      "name": "Greek Yoghurt Sauce",
      "category": "sauces",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/Greek Yogurt Sauce.jpg",
      "badge": "",
      "nutrition": {
        "calories": 18,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-061",
      "odooProductId": null,
      "name": "Hot Sauce",
      "category": "sauces",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/Hot Sriracha Sauce.jpg",
      "badge": "",
      "nutrition": {
        "calories": 5,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-062",
      "odooProductId": null,
      "name": "Teriyaki Sauce",
      "category": "sauces",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/Teriyaki Sauce.jpg",
      "badge": "",
      "nutrition": {
        "calories": 36,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 7,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-063",
      "odooProductId": null,
      "name": "BBQ Sauce",
      "category": "sauces",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/BBQ Sauce.jpg",
      "badge": "",
      "nutrition": {
        "calories": 32,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 8,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-064",
      "odooProductId": null,
      "name": "Aquafina Water (500 ml)",
      "category": "drinks",
      "description": "",
      "price": 1000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": null,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx"
    },    {
      "id": "meal-065",
      "odooProductId": null,
      "name": "Perrier (330 ml)",
      "category": "drinks",
      "description": "",
      "price": 3000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": null,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-066",
      "odooProductId": null,
      "name": "Diet Coke",
      "category": "drinks",
      "description": "",
      "price": 1000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": null,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-067",
      "odooProductId": null,
      "name": "Cola Zero",
      "category": "drinks",
      "description": "",
      "price": 1000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": null,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx"
    },
    {
      "id": "meal-068",
      "odooProductId": null,
      "name": "Matcha",
      "category": "drinks",
      "description": "",
      "price": null,
      "image": "assets/images/meals/Matcha.jpg",
      "badge": "",
      "nutrition": {
        "calories": null,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "image-only"
    },
    {
      "id": "meal-069",
      "odooProductId": null,
      "name": "Matcha Madness",
      "category": "drinks",
      "description": "",
      "price": null,
      "image": "assets/images/meals/Matcha Madness.jpg",
      "badge": "",
      "nutrition": {
        "calories": null,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "image-only"
    },
    {
      "id": "meal-070",
      "odooProductId": null,
      "name": "Caramel Popcorn",
      "category": "snacks-desserts",
      "description": "",
      "price": null,
      "image": "assets/images/meals/Caramel Popcorn.jpg",
      "badge": "",
      "nutrition": {
        "calories": null,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 8,
      "source": "image-only"
    },
    {
      "id": "meal-071",
      "odooProductId": null,
      "name": "Chicken Breast (100G)",
      "category": "add-ons",
      "description": "",
      "price": null,
      "image": "assets/images/meals/Chicken Breast (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": null,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 10,
      "source": "image-only"
    },
    {
      "id": "meal-072",
      "odooProductId": null,
      "name": "Fish Fillet with Steamed Vegetables",
      "category": "main-dishes",
      "description": "",
      "price": null,
      "image": "assets/images/meals/Fish Fillet with Steamed Vegetables.jpg",
      "badge": "",
      "nutrition": {
        "calories": null,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 15,
      "source": "image-only"
    },
    {
      "id": "meal-073",
      "odooProductId": null,
      "name": "Cajun Sauce",
      "category": "sauces",
      "description": "",
      "price": null,
      "image": "assets/images/meals/Cajun Sauce.jpg",
      "badge": "",
      "nutrition": {
        "calories": null,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 9,
      "source": "image-only"
    }
  ],
  "integrationNotes": {
    "pricingWorkbookItems": 67,
    "imageFilesProvided": 67,
    "combinedUniqueMenuItems": 73,
    "itemsWithoutMatchedImage": [
      "Pulled Beef Wrap",
      "Sriracha Greek Yogurt",
      "Aquafina Water (500 ml)",
      "Perrier (330 ml)",
      "Diet Coke",
      "Cola Zero"
    ],
    "imageItemsWithoutPricingRow": [
      "Matcha",
      "Matcha Madness",
      "Caramel Popcorn",
      "Chicken Breast (100G)",
      "Fish Fillet with Steamed Vegetables",
      "Cajun Sauce"
    ]
  }
};


window.getAvailableLeanBiteMeals = function () {
  var categoryOrder = {};

  window.LEAN_BITE_DATA.categories.forEach(function (category) {
    categoryOrder[category.id] = category.order || 9999;
  });

  return window.LEAN_BITE_DATA.meals
    .filter(function (meal) {
      return meal.available !== false;
    })
    .slice()
    .sort(function (a, b) {
      var categoryDifference =
        (categoryOrder[a.category] || 9999) -
        (categoryOrder[b.category] || 9999);

      if (categoryDifference !== 0) {
        return categoryDifference;
      }

      return (a.order || 9999) - (b.order || 9999);
    });
};


window.getActiveLeanBiteOffers = function () {
  return window.LEAN_BITE_DATA.offers
    .filter(function (offer) {
      return offer.active !== false;
    })
    .slice()
    .sort(function (a, b) {
      return (a.order || 9999) - (b.order || 9999);
    });
};


window.getLeanBiteCategories = function () {
  return window.LEAN_BITE_DATA.categories
    .slice()
    .sort(function (a, b) {
      return (a.order || 9999) - (b.order || 9999);
    });
};


window.getLeanBiteMealById = function (mealId) {
  return window.LEAN_BITE_DATA.meals.find(function (meal) {
    return meal.id === mealId;
  }) || null;
};


window.formatLeanBitePrice = function (price) {
  if (price === null || price === undefined || price === "") {
    return "";
  }

  var numericPrice = Number(price);

  if (Number.isNaN(numericPrice)) {
    return "";
  }

  try {
    return new Intl.NumberFormat(
      window.LEAN_BITE_DATA.settings.locale
    ).format(numericPrice) + " " +
      window.LEAN_BITE_DATA.settings.currencyLabel;
  } catch (error) {
    return numericPrice.toLocaleString() + " " +
      window.LEAN_BITE_DATA.settings.currencyLabel;
  }
};
