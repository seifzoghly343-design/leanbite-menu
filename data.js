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
    "checkoutEnabled": false,
    "bilingualNames": true
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
      "id": "starters-sides",
      "name": "Starters & Sides",
      "order": 3
    },
    {
      "id": "main-dishes",
      "name": "Main Dishes",
      "order": 4
    },
    {
      "id": "sandwiches-wraps",
      "name": "Sandwiches & Wraps",
      "order": 5
    },
    {
      "id": "snacks-desserts",
      "name": "Snacks & Desserts",
      "order": 6
    },
    {
      "id": "add-ons",
      "name": "Add-On's",
      "order": 7
    },
    {
      "id": "protein-shakes",
      "name": "Protein Shakes",
      "order": 8
    },
    {
      "id": "fresh-juices",
      "name": "Fresh Juices",
      "order": 9
    },
    {
      "id": "sauces",
      "name": "Sauces",
      "order": 10
    },
    {
      "id": "drinks",
      "name": "Drinks",
      "order": 11
    }
  ],
  "offers": [],
  "meals": [
    {
      "id": "meal-001",
      "odooProductId": null,
      "name": "Egg White Omelette",
      "nameAr": "أومليت بياض البيض",
      "category": "breakfast",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Egg White Omelet.jpg",
      "badge": "",
      "nutrition": {
        "calories": 409,
        "protein": 26.58,
        "carbs": 41,
        "fat": 15
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-002",
      "odooProductId": null,
      "name": "Our Shakshuka",
      "nameAr": "شكشوكة",
      "category": "breakfast",
      "description": "",
      "price": 6000,
      "image": "assets/images/meals/Shakshuka.jpg",
      "badge": "",
      "nutrition": {
        "calories": 542,
        "protein": 35,
        "carbs": 52,
        "fat": 22
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-003",
      "odooProductId": null,
      "name": "3 Eggs Any Way",
      "nameAr": "٣ بيضات بالطريقة التي تحبها",
      "category": "breakfast",
      "description": "",
      "price": 4000,
      "image": "assets/images/meals/3 Eggs Any Way.jpg",
      "badge": "",
      "nutrition": {
        "calories": 397,
        "protein": 26,
        "carbs": 40,
        "fat": 14.783
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-004",
      "odooProductId": null,
      "name": "Breakfast Burrito",
      "nameAr": "بوريتو الفطور",
      "category": "breakfast",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Breakfast Burrito.jpg",
      "badge": "",
      "nutrition": {
        "calories": 520,
        "protein": 28.34,
        "carbs": 52,
        "fat": 23
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-005",
      "odooProductId": null,
      "name": "Halloumi Pesto Bagel",
      "nameAr": "بيغل الحلوم بالبيستو",
      "category": "breakfast",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Bagel Halloumi.jpg",
      "badge": "",
      "nutrition": {
        "calories": 462,
        "protein": 25,
        "carbs": 56,
        "fat": 16
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-006",
      "odooProductId": null,
      "name": "Edamame (200 g)",
      "nameAr": "إدامامي (٢٠٠ غم)",
      "category": "salads-bowls",
      "description": "",
      "price": 6750,
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-007",
      "odooProductId": null,
      "name": "Arabic Salad",
      "nameAr": "سلطة عربية",
      "category": "salads-bowls",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Arabic Salad.jpg",
      "badge": "",
      "nutrition": {
        "calories": 125.19,
        "protein": 3.438,
        "carbs": 13,
        "fat": 7
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-008",
      "odooProductId": null,
      "name": "Freekeh Salad",
      "nameAr": "سلطة الفريكة",
      "category": "salads-bowls",
      "description": "Nutty freekeh with peppery rocket, tangy feta, sweet raisins and crunchy walnuts, dressed in pomegranate.",
      "price": 5000,
      "image": "assets/images/meals/Freekeh Salad.jpg",
      "badge": "",
      "nutrition": {
        "calories": 450,
        "protein": 16.915,
        "carbs": 59,
        "fat": 19
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "فريكة بنكهة الجوز مع جرجير حادّ وجبنة فيتا وزبيب حلو وجوز مقرمش، بصلصة الرمان."
    },
    {
      "id": "meal-009",
      "odooProductId": null,
      "name": "Lippi Salad",
      "nameAr": "سلطة ليبي",
      "category": "salads-bowls",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Lippi Salad.jpg",
      "badge": "",
      "nutrition": {
        "calories": 190,
        "protein": 2.895,
        "carbs": 14.295,
        "fat": 15.01
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-010",
      "odooProductId": null,
      "name": "Grilled Chicken Quinoa Salad",
      "nameAr": "سلطة الدجاج المشوي بالكينوا",
      "category": "salads-bowls",
      "description": "",
      "price": 8750,
      "image": "assets/images/meals/Grilled Chicken Qinuoa Salad.jpg",
      "badge": "",
      "nutrition": {
        "calories": 429,
        "protein": 32,
        "carbs": 38,
        "fat": 16
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-011",
      "odooProductId": null,
      "name": "Chicken Teriyaki Poke Bowl",
      "nameAr": "وعاء بوكي دجاج تيرياكي",
      "category": "salads-bowls",
      "description": "",
      "price": 9000,
      "image": "assets/images/meals/Chicken Teriyaki Poke Bowl.jpg",
      "badge": "",
      "nutrition": {
        "calories": 503,
        "protein": 39,
        "carbs": 51,
        "fat": 16
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-012",
      "odooProductId": null,
      "name": "Grilled Chicken Breast With White Rice",
      "nameAr": "صدر دجاج مشوي مع رز أبيض",
      "category": "main-dishes",
      "description": "",
      "price": 5750,
      "image": "assets/images/meals/Grilled Chicken Breast with White Rice.jpg",
      "badge": "",
      "nutrition": {
        "calories": 382,
        "protein": 34.683,
        "carbs": 47.2,
        "fat": 4
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-013",
      "odooProductId": null,
      "name": "Beef Tenderloin With Roasted Sweet Potatoes",
      "nameAr": "فيليه لحم مع بطاطا حلوة مشوية",
      "category": "main-dishes",
      "description": "",
      "price": 12000,
      "image": "assets/images/meals/Beef Tenderloin with Sweet Potatoes.jpg",
      "badge": "",
      "nutrition": {
        "calories": 383.35,
        "protein": 30.2,
        "carbs": 33.2,
        "fat": 14
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-014",
      "odooProductId": null,
      "name": "Mongolian Beef",
      "nameAr": "لحم منغولي",
      "category": "main-dishes",
      "description": "",
      "price": 12000,
      "image": "assets/images/meals/Mongolian Beef.jpg",
      "badge": "",
      "nutrition": {
        "calories": 493,
        "protein": 34.178,
        "carbs": 55,
        "fat": 15.171
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-015",
      "odooProductId": null,
      "name": "Chicken Penne Arabiatta",
      "nameAr": "دجاج بيني أرابياتا",
      "category": "main-dishes",
      "description": "",
      "price": 6750,
      "image": "assets/images/meals/Chicken Penne Arabiatta.jpg",
      "badge": "",
      "nutrition": {
        "calories": 449,
        "protein": 41.19,
        "carbs": 61.05,
        "fat": 5
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-016",
      "odooProductId": null,
      "name": "Burghul Meatballs with Rice",
      "nameAr": "كفتة البرغل مع الرز",
      "category": "main-dishes",
      "description": "",
      "price": 10500,
      "image": "assets/images/meals/Burghul Meatballs.jpg",
      "badge": "",
      "nutrition": {
        "calories": 629,
        "protein": 31,
        "carbs": 75,
        "fat": 22
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-017",
      "odooProductId": null,
      "name": "Biryani Chicken",
      "nameAr": "دجاج برياني",
      "category": "main-dishes",
      "description": "",
      "price": 7750,
      "image": "assets/images/meals/Biryani Chicken.jpg",
      "badge": "",
      "nutrition": {
        "calories": 447,
        "protein": 38,
        "carbs": 57,
        "fat": 6
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-018",
      "odooProductId": null,
      "name": "Paprika Chicken",
      "nameAr": "دجاج بالبابريكا",
      "category": "main-dishes",
      "description": "",
      "price": 7750,
      "image": "assets/images/meals/Paprika Chicken.jpg",
      "badge": "",
      "nutrition": {
        "calories": 427,
        "protein": 38,
        "carbs": 59,
        "fat": 5
      },
      "available": true,
      "featured": false,
      "order": 7,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-019",
      "odooProductId": null,
      "name": "Non-Butter Chicken",
      "nameAr": "دجاج بدون زبدة",
      "category": "main-dishes",
      "description": "",
      "price": 7750,
      "image": "assets/images/meals/Non-Butter Chicken.jpg",
      "badge": "",
      "nutrition": {
        "calories": 391,
        "protein": 37,
        "carbs": 23,
        "fat": 17
      },
      "available": true,
      "featured": false,
      "order": 8,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-020",
      "odooProductId": null,
      "name": "Fish Fillet with Saffron Rice",
      "nameAr": "فيليه سمك مع رز بالزعفران",
      "category": "main-dishes",
      "description": "",
      "price": 7750,
      "image": "assets/images/meals/Fish Fillet w Saffron Rice.jpg",
      "badge": "",
      "nutrition": {
        "calories": 356,
        "protein": 31.123,
        "carbs": 47,
        "fat": 3
      },
      "available": true,
      "featured": false,
      "order": 9,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-021",
      "odooProductId": null,
      "name": "Spaghetti Bolognese",
      "nameAr": "سباغيتي بولونيز",
      "category": "main-dishes",
      "description": "",
      "price": 9500,
      "image": "assets/images/meals/Spaghetti Bolognese.jpg",
      "badge": "",
      "nutrition": {
        "calories": 511,
        "protein": 27.705,
        "carbs": 54,
        "fat": 21
      },
      "available": true,
      "featured": false,
      "order": 10,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-022",
      "odooProductId": null,
      "name": "Mushroom Shrimp Risotto",
      "nameAr": "ريزوتو الروبيان بالفطر",
      "category": "main-dishes",
      "description": "",
      "price": 11000,
      "image": "assets/images/meals/Mushroom Shrimp Risotto.jpg",
      "badge": "",
      "nutrition": {
        "calories": 468,
        "protein": 34.45,
        "carbs": 48.19,
        "fat": 15
      },
      "available": true,
      "featured": false,
      "order": 11,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-023",
      "odooProductId": null,
      "name": "Roasted Pepper Shrimp Risotto",
      "nameAr": "ريزوتو الروبيان بالفلفل المشوي",
      "category": "main-dishes",
      "description": "",
      "price": 11000,
      "image": "assets/images/meals/Roasted Pepper Shrimp Risotto.jpg",
      "badge": "",
      "nutrition": {
        "calories": 507,
        "protein": 34,
        "carbs": 54.37,
        "fat": 17.066
      },
      "available": true,
      "featured": false,
      "order": 12,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-024",
      "odooProductId": null,
      "name": "Roasted Quzi",
      "nameAr": "قوزي مشوي",
      "category": "main-dishes",
      "description": "",
      "price": 12000,
      "image": "assets/images/meals/Roasted Quzi.jpg",
      "badge": "",
      "nutrition": {
        "calories": 582.4,
        "protein": 53.56,
        "carbs": 63,
        "fat": 12
      },
      "available": true,
      "featured": false,
      "order": 13,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-025",
      "odooProductId": null,
      "name": "Cajun Chicken",
      "nameAr": "دجاج كاجن",
      "category": "main-dishes",
      "description": "",
      "price": 7750,
      "image": "assets/images/meals/Cajun Chicken.jpg",
      "badge": "",
      "nutrition": {
        "calories": 420,
        "protein": 38,
        "carbs": 50,
        "fat": 6
      },
      "available": true,
      "featured": false,
      "order": 14,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-026",
      "odooProductId": null,
      "name": "Grilled Chicken Burger",
      "nameAr": "برغر الدجاج المشوي",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 6750,
      "image": "assets/images/meals/Grilled Chicken Burger.jpg",
      "badge": "",
      "nutrition": {
        "calories": 475,
        "protein": 40,
        "carbs": 55,
        "fat": 10
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-027",
      "odooProductId": null,
      "name": "Healthy Beef Burger",
      "nameAr": "برغر اللحم الصحي",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 9000,
      "image": "assets/images/meals/Healthy Beef Burger.jpg",
      "badge": "",
      "nutrition": {
        "calories": 618,
        "protein": 43,
        "carbs": 61,
        "fat": 24
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-028",
      "odooProductId": null,
      "name": "Shish Tawook Wrap",
      "nameAr": "لفة شيش طاووق",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 6000,
      "image": "assets/images/meals/Shish Tawook Wrap.jpg",
      "badge": "",
      "nutrition": {
        "calories": 445,
        "protein": 47.205,
        "carbs": 46,
        "fat": 7
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-029",
      "odooProductId": null,
      "name": "Pulled Beef Wrap",
      "nameAr": "لفة اللحم المسحّب",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 9000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 526,
        "protein": 37,
        "carbs": 64,
        "fat": 14
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-030",
      "odooProductId": null,
      "name": "Doner Kebab",
      "nameAr": "دونر كباب",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 9000,
      "image": "assets/images/meals/Doner Kebab.jpg",
      "badge": "",
      "nutrition": {
        "calories": 647,
        "protein": 35.63,
        "carbs": 56,
        "fat": 32
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-031",
      "odooProductId": null,
      "name": "Tunacado",
      "nameAr": "تونا أفوكادو",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 6750,
      "image": "assets/images/meals/Tunacado.jpg",
      "badge": "",
      "nutrition": {
        "calories": 581,
        "protein": 29,
        "carbs": 75,
        "fat": 21
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-032",
      "odooProductId": null,
      "name": "Protein Brownie",
      "nameAr": "براوني البروتين",
      "category": "snacks-desserts",
      "description": "",
      "price": 5000,
      "image": "assets/images/meals/Protein Brownie.jpg",
      "badge": "",
      "nutrition": {
        "calories": 244,
        "protein": 14,
        "carbs": 30.88,
        "fat": 10
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-033",
      "odooProductId": null,
      "name": "Peanut Butter Choco Balls",
      "nameAr": "كرات الشوكولاتة بالبروتين",
      "category": "snacks-desserts",
      "description": "Bite-sized oat and peanut butter balls with rich chocolate and coconut, a perfect sweet, protein-packed snack.",
      "price": 5000,
      "image": "assets/images/meals/Peanut Butter Choco Balls.jpg",
      "badge": "",
      "nutrition": {
        "calories": 514,
        "protein": 30,
        "carbs": 43,
        "fat": 26
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "كرات شوفان وزبدة فول سوداني بحجم اللقمة مع الشوكولاتة وجوز الهند، وجبة خفيفة حلوة غنية بالبروتين."
    },
    {
      "id": "meal-034",
      "odooProductId": null,
      "name": "Oatmeal Cookie",
      "nameAr": "كوكيز الشوفان",
      "category": "snacks-desserts",
      "description": "",
      "price": 5500,
      "image": "assets/images/meals/Oatmeal Cookie.jpg",
      "badge": "",
      "nutrition": {
        "calories": 321,
        "protein": 15,
        "carbs": 33,
        "fat": 15
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-035",
      "odooProductId": null,
      "name": "Peanut Butter Rice Cake",
      "nameAr": "كيك الرز",
      "category": "snacks-desserts",
      "description": "Crunchy rice cake layers bound with creamy peanut butter and honey, with a hint of vanilla and a pinch of salt.",
      "price": 5500,
      "image": "assets/images/meals/Peanut Butter Rice Cake.png",
      "badge": "",
      "nutrition": {
        "calories": 459,
        "protein": 12,
        "carbs": 39,
        "fat": 30
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "طبقات رز مقرمشة مع زبدة الفول السوداني والعسل، بلمسة فانيلا ورشة ملح."
    },
    {
      "id": "meal-036",
      "odooProductId": null,
      "name": "Double Choco Cookie",
      "nameAr": "كوكيز الشوكولاتة المزدوجة",
      "category": "snacks-desserts",
      "description": "",
      "price": 5500,
      "image": "assets/images/meals/Double Choco Cookie.jpg",
      "badge": "",
      "nutrition": {
        "calories": 319,
        "protein": 16,
        "carbs": 13,
        "fat": 25
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-037",
      "odooProductId": null,
      "name": "Vanilla Protein Pancake with Mixed Berries",
      "nameAr": "بان كيك البروتين بالفانيلا مع التوت المشكّل",
      "category": "snacks-desserts",
      "description": "",
      "price": 7000,
      "image": "assets/images/meals/Vanilla Protein Pancake with Mixed Berries.png",
      "badge": "",
      "nutrition": {
        "calories": 326,
        "protein": 37,
        "carbs": 27,
        "fat": 10
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-038",
      "odooProductId": null,
      "name": "Sweet Potato Pancake",
      "nameAr": "بان كيك البطاطا الحلوة",
      "category": "snacks-desserts",
      "description": "",
      "price": 7000,
      "image": "assets/images/meals/Sweet Potato Pancakes.jpg",
      "badge": "",
      "nutrition": {
        "calories": 600,
        "protein": 21,
        "carbs": 98,
        "fat": 16
      },
      "available": true,
      "featured": false,
      "order": 7,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-039",
      "odooProductId": null,
      "name": "Chicken Breast (50 g)",
      "nameAr": "صدر دجاج (٥٠ غم)",
      "category": "add-ons",
      "description": "",
      "price": 1500,
      "image": "assets/images/meals/Chicken Breast (50G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 78,
        "protein": 14.625,
        "carbs": 0,
        "fat": 1
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-040",
      "odooProductId": null,
      "name": "Beef Tenderloin (50 g)",
      "nameAr": "فيليه لحم (٥٠ غم)",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-041",
      "odooProductId": null,
      "name": "White Rice (100 g)",
      "nameAr": "رز أبيض (١٠٠ غم)",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-042",
      "odooProductId": null,
      "name": "Burghul (100 g)",
      "nameAr": "برغل (١٠٠ غم)",
      "category": "add-ons",
      "description": "",
      "price": 1000,
      "image": "assets/images/meals/Burghul (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 136.8,
        "protein": 4.92,
        "carbs": 30.4,
        "fat": 0
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-043",
      "odooProductId": null,
      "name": "Brown Rice (100 g)",
      "nameAr": "رز بني (١٠٠ غم)",
      "category": "add-ons",
      "description": "",
      "price": 1500,
      "image": "assets/images/meals/Brown Rice (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 148,
        "protein": 3,
        "carbs": 30,
        "fat": 1.08
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-044",
      "odooProductId": null,
      "name": "Steamed Vegetables (100 g)",
      "nameAr": "خضار مطبوخة على البخار (١٠٠ غم)",
      "category": "add-ons",
      "description": "",
      "price": 2750,
      "image": "assets/images/meals/Steamed Vegetables (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 31,
        "protein": 1.6,
        "carbs": 6,
        "fat": 0.3
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-045",
      "odooProductId": null,
      "name": "Baked Potatoes (100 g)",
      "nameAr": "بطاطا مشوية (١٠٠ غم)",
      "category": "add-ons",
      "description": "",
      "price": 1500,
      "image": "assets/images/meals/Baked Potatoes (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 84,
        "protein": 2.2,
        "carbs": 18,
        "fat": 0.11
      },
      "available": true,
      "featured": false,
      "order": 7,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-046",
      "odooProductId": null,
      "name": "Sweet Potatoes (100 g)",
      "nameAr": "بطاطا حلوة (١٠٠ غم)",
      "category": "add-ons",
      "description": "",
      "price": 2750,
      "image": "assets/images/meals/Sweep Potatoes (100G).jpg",
      "badge": "",
      "nutrition": {
        "calories": 111,
        "protein": 2.08,
        "carbs": 26,
        "fat": 0.13
      },
      "available": true,
      "featured": false,
      "order": 8,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-047",
      "odooProductId": null,
      "name": "Mushrooms & Potatoes (100 g)",
      "nameAr": "فطر وبطاطا (١٠٠ غم)",
      "category": "add-ons",
      "description": "",
      "price": 2750,
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-048",
      "odooProductId": null,
      "name": "Vanilla Voltage",
      "nameAr": "فانيلا فولتج",
      "category": "protein-shakes",
      "description": "",
      "price": 6500,
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-049",
      "odooProductId": null,
      "name": "Macho Mocha",
      "nameAr": "ماتشو موكا",
      "category": "protein-shakes",
      "description": "",
      "price": 6500,
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-050",
      "odooProductId": null,
      "name": "Crimson Fuel",
      "nameAr": "كريمسون فيول",
      "category": "protein-shakes",
      "description": "",
      "price": 6500,
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-051",
      "odooProductId": null,
      "name": "Evergreen Energy",
      "nameAr": "إيفرغرين إنرجي",
      "category": "protein-shakes",
      "description": "",
      "price": 6500,
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-052",
      "odooProductId": null,
      "name": "Brew Boost",
      "nameAr": "بيرو بوست",
      "category": "protein-shakes",
      "description": "",
      "price": 6500,
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-053",
      "odooProductId": null,
      "name": "Golden Glow",
      "nameAr": "غولدن غلو",
      "category": "fresh-juices",
      "description": "",
      "price": 4500,
      "image": "assets/images/meals/Golden Glow.jpg",
      "badge": "",
      "nutrition": {
        "calories": 147,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-054",
      "odooProductId": null,
      "name": "Detox Greenz",
      "nameAr": "ديتوكس غرينز",
      "category": "fresh-juices",
      "description": "",
      "price": 4500,
      "image": "assets/images/meals/Detox Greens.jpg",
      "badge": "",
      "nutrition": {
        "calories": 147,
        "protein": null,
        "carbs": null,
        "fat": null
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-055",
      "odooProductId": null,
      "name": "Heartbeat Ruby",
      "nameAr": "هارتبيت روبي",
      "category": "fresh-juices",
      "description": "",
      "price": 4500,
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-056",
      "odooProductId": null,
      "name": "Honey Mustard",
      "nameAr": "صوص العسل والخردل",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-057",
      "odooProductId": null,
      "name": "Sriracha Greek Yogurt",
      "nameAr": "زبادي يوناني بالسريراتشا",
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
      "nameAr": "فينيغريت الليمون",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-059",
      "odooProductId": null,
      "name": "Dakkus Sauce",
      "nameAr": "صوص دقوس",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-060",
      "odooProductId": null,
      "name": "Greek Yoghurt Sauce",
      "nameAr": "صوص الزبادي اليوناني",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-061",
      "odooProductId": null,
      "name": "Hot Sauce",
      "nameAr": "صوص حار",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-062",
      "odooProductId": null,
      "name": "Teriyaki Sauce",
      "nameAr": "صوص تيرياكي",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-063",
      "odooProductId": null,
      "name": "BBQ Sauce",
      "nameAr": "صوص باربكيو",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-064",
      "odooProductId": null,
      "name": "Aquafina Water (500 ml)",
      "nameAr": "مياه أكوافينا (٥٠٠ مل)",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-065",
      "odooProductId": null,
      "name": "Perrier (330 ml)",
      "nameAr": "بيريه (٣٣٠ مل)",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-066",
      "odooProductId": null,
      "name": "Diet Coke",
      "nameAr": "دايت كوكا كولا",
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
      "nameAr": "كولا زيرو",
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-068",
      "odooProductId": null,
      "name": "Matcha",
      "nameAr": "ماتشا",
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
      "nameAr": "ماتشا ماد نس",
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
      "nameAr": "فشار بالكراميل",
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
      "nameAr": "صدر دجاج (١٠٠ غم)",
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
      "nameAr": "فيليه سمك مع خضار على البخار",
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
      "nameAr": "صوص كاجن",
      "category": "sauces",
      "description": "",
      "price": 1000,
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
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-074",
      "odooProductId": null,
      "name": "English Breakfast",
      "nameAr": "وعاء الإنجليش",
      "category": "breakfast",
      "description": "A hearty English-style breakfast: eggs, crispy bacon and a baked potato with sourdough and fresh leafy greens.",
      "price": 7000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 427,
        "protein": 24,
        "carbs": 54,
        "fat": 13
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "فطور إنجليزي متكامل: بيض وبيكون مقرمش مع بطاطا مشوية وخبز سوردو وخضار ورقية طازجة."
    },
    {
      "id": "meal-075",
      "odooProductId": null,
      "name": "Poached Eggs Halloumi Bowl",
      "nameAr": "وعاء البيض المسلوق والحلوم",
      "category": "breakfast",
      "description": "Soft poached eggs and golden halloumi on sourdough, with grilled tomato and creamy avocado.",
      "price": 6000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 588,
        "protein": 34,
        "carbs": 46,
        "fat": 30
      },
      "available": true,
      "featured": false,
      "order": 7,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "بيض مسلوق طري مع حلوم ذهبي على خبز السوردو، يرافقه طماطم مشوية وأفوكادو كريمي."
    },
    {
      "id": "meal-076",
      "odooProductId": null,
      "name": "Turkey & Egg Quesadilla",
      "nameAr": "كيساديا الديك الرومي والبيض",
      "category": "breakfast",
      "description": "A toasted tortilla filled with fluffy eggs, smoked turkey and melted cheese, finished with a hint of black pepper.",
      "price": 6000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 490,
        "protein": 35,
        "carbs": 50,
        "fat": 17
      },
      "available": true,
      "featured": false,
      "order": 8,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "خبز تورتيلا محمّص محشو ببيض طري وشرائح ديك رومي وجبن ذائب، مع لمسة فلفل أسود."
    },
    {
      "id": "meal-077",
      "odooProductId": null,
      "name": "Egg Bun Brioche",
      "nameAr": "بيض في خبز البريوش",
      "category": "breakfast",
      "description": "A soft bun stacked with egg, crispy bacon and melted cheese, topped with a cool Greek yogurt sauce.",
      "price": 5000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 491,
        "protein": 31,
        "carbs": 51,
        "fat": 18
      },
      "available": true,
      "featured": false,
      "order": 9,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "خبز طري محشو بالبيض والبيكون المقرمش والجبن الذائب، مع صوص الزبادي اليوناني المنعش."
    },
    {
      "id": "meal-078",
      "odooProductId": null,
      "name": "Peanut Butter Crunch Toast",
      "nameAr": "توست زبدة الفول السوداني بالسوردو",
      "category": "breakfast",
      "description": "Crisp sourdough spread with peanut butter, layered with banana, drizzled with honey and sprinkled with walnuts.",
      "price": 4000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 499,
        "protein": 14,
        "carbs": 78,
        "fat": 17
      },
      "available": true,
      "featured": false,
      "order": 10,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "سوردو مقرمش مدهون بزبدة الفول السوداني مع شرائح الموز، ومرشوش بالعسل والجوز."
    },
    {
      "id": "meal-079",
      "odooProductId": null,
      "name": "Strawberry Sunrise Toast",
      "nameAr": "توست المربى بالسوردو",
      "category": "breakfast",
      "description": "Sourdough topped with creamy cheese and sweet jam, fresh green apple, a drizzle of honey and a touch of cinnamon.",
      "price": 4000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 306,
        "protein": 8,
        "carbs": 64,
        "fat": 2
      },
      "available": true,
      "featured": false,
      "order": 11,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "سوردو مع جبن كريمي ومربى حلوة وتفاح أخضر طازج، مع رشة عسل ولمسة قرفة."
    },
    {
      "id": "meal-080",
      "odooProductId": null,
      "name": "Healthy Chicken Ceaser Salad",
      "nameAr": "سلطة سيزر الصحية",
      "category": "salads-bowls",
      "description": "Crisp lettuce with grilled chicken breast, shaved parmesan and sourdough croutons, tossed in classic Caesar dressing.",
      "price": 8750,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 348,
        "protein": 35,
        "carbs": 22,
        "fat": 12
      },
      "available": true,
      "featured": false,
      "order": 7,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "خس مقرمش مع صدر دجاج مشوي وجبن بارميزان وقطع سوردو مقرمشة، تتبّلها صلصة سيزر الكلاسيكية."
    },
    {
      "id": "meal-081",
      "odooProductId": null,
      "name": "Halloumi Salad",
      "nameAr": "سلطة الحلوم",
      "category": "salads-bowls",
      "description": "Grilled halloumi over a colorful mix of fresh vegetables and crisp lettuce, finished with a zesty lemon vinaigrette.",
      "price": 6000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 238,
        "protein": 15,
        "carbs": 14,
        "fat": 14
      },
      "available": true,
      "featured": false,
      "order": 8,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "حلوم مشوي فوق تشكيلة ملوّنة من الخضار الطازجة والخس المقرمش، مع صلصة الليمون المنعشة."
    },
    {
      "id": "meal-082",
      "odooProductId": null,
      "name": "Tabbouleh",
      "nameAr": "تبولة",
      "category": "salads-bowls",
      "description": "A fresh Levantine classic of parsley, juicy tomato and bulgur, brightened with a pomegranate dressing.",
      "price": 5000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 247,
        "protein": 7,
        "carbs": 46,
        "fat": 5
      },
      "available": true,
      "featured": false,
      "order": 9,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "طبق شامي أصيل من البقدونس والطماطم العصيرية والبرغل، تنعشه صلصة الرمان."
    },
    {
      "id": "meal-083",
      "odooProductId": null,
      "name": "Lentil Soup",
      "nameAr": "شوربة العدس",
      "category": "starters-sides",
      "description": "Velvety red lentil soup gently spiced with cumin and turmeric, served with lemon and crunchy croutons.",
      "price": 4000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 283,
        "protein": 16,
        "carbs": 52,
        "fat": 1
      },
      "available": true,
      "featured": false,
      "order": 1,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "شوربة عدس أحمر ناعمة بتوابل الكمون والكركم، تُقدَّم مع الليمون وقطع الخبز المقرمشة."
    },
    {
      "id": "meal-084",
      "odooProductId": null,
      "name": "Tomato Soup",
      "nameAr": "شوربة الطماطم المحمّصة",
      "category": "starters-sides",
      "description": "Slow-roasted tomatoes and sweet peppers blended with garlic and basil, topped with golden croutons.",
      "price": 4000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 187,
        "protein": 6,
        "carbs": 28,
        "fat": 6
      },
      "available": true,
      "featured": false,
      "order": 2,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "طماطم وفلفل حلو محمّص ببطء مع الثوم والريحان، تعلوها قطع خبز ذهبية مقرمشة."
    },
    {
      "id": "meal-085",
      "odooProductId": null,
      "name": "Cheesy Beef Nachos",
      "nameAr": "ناتشوز اللحم بالجبن",
      "category": "starters-sides",
      "description": "Crunchy tortilla chips piled with spiced beef and a smooth, cheesy cheddar sauce.",
      "price": 9750,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 527,
        "protein": 27,
        "carbs": 48,
        "fat": 25
      },
      "available": true,
      "featured": false,
      "order": 3,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "رقائق تورتيلا مقرمشة مغطاة بلحم بقري متبّل وصوص الشيدر الكريمي."
    },
    {
      "id": "meal-086",
      "odooProductId": null,
      "name": "Crispy Tenders",
      "nameAr": "أصابع الدجاج",
      "category": "starters-sides",
      "description": "Golden, crunchy chicken strips with a tender juicy center, served with a spicy buffalo mayo dip.",
      "price": 6500,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 505,
        "protein": 44,
        "carbs": 41,
        "fat": 16
      },
      "available": true,
      "featured": false,
      "order": 4,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "أصابع دجاج ذهبية مقرمشة من الخارج وطرية من الداخل، تُقدَّم مع صوص مايو الجبل الحار."
    },
    {
      "id": "meal-087",
      "odooProductId": null,
      "name": "Lentil Crackers",
      "nameAr": "مقرمشات العدس",
      "category": "starters-sides",
      "description": "Crunchy, protein-rich lentil crackers lightly spiced with Cajun and paprika, served with cool ranch dip.",
      "price": 5750,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 195,
        "protein": 13,
        "carbs": 4,
        "fat": 5
      },
      "available": true,
      "featured": false,
      "order": 5,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "مقرمشات عدس غنية بالبروتين بنكهة الكاجون والبابريكا، تُقدَّم مع صوص الرانش البارد."
    },
    {
      "id": "meal-088",
      "odooProductId": null,
      "name": "Yellow Chicken Curry",
      "nameAr": "كاري الدجاج الأصفر",
      "category": "main-dishes",
      "description": "Tender chicken, potato and cabbage in a creamy, mildly spiced coconut curry, served with white rice.",
      "price": 7750,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 493,
        "protein": 37,
        "carbs": 69,
        "fat": 6
      },
      "available": true,
      "featured": false,
      "order": 16,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "دجاج طري مع البطاطا والملفوف في كاري جوز الهند الكريمي خفيف التوابل، يُقدَّم مع الرز الأبيض."
    },
    {
      "id": "meal-089",
      "odooProductId": null,
      "name": "Chicken Shawerma Bowl",
      "nameAr": "وعاء شاورما الدجاج",
      "category": "main-dishes",
      "description": "Juicy chicken shawarma over rice with sweet corn and a fresh tomato-parsley salad, drizzled with tarator.",
      "price": 6750,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 541,
        "protein": 38,
        "carbs": 68,
        "fat": 12
      },
      "available": true,
      "featured": false,
      "order": 17,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "شاورما دجاج طرية على الرز مع الذرة الحلوة وسلطة الطماطم والبقدونس، مع رشة صوص الطرطور."
    },
    {
      "id": "meal-090",
      "odooProductId": null,
      "name": "Beef Shawerma Bowl",
      "nameAr": "وعاء شاورما اللحم",
      "category": "main-dishes",
      "description": "Tender spiced steak over saffron rice with pickles, parsley and tangy onions, finished with tarator sauce.",
      "price": 10750,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 565,
        "protein": 34,
        "carbs": 56,
        "fat": 22
      },
      "available": true,
      "featured": false,
      "order": 18,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "شرائح لحم متبّلة وطرية على رز بالزعفران مع المخللات والبقدونس والبصل المخلل، وصوص الطرطور."
    },
    {
      "id": "meal-091",
      "odooProductId": null,
      "name": "Beef Mexican Bowl",
      "nameAr": "وعاء اللحم المكسيكي",
      "category": "main-dishes",
      "description": "Seasoned steak on rice with black beans, sweet corn and peppers, topped with creamy tarator sauce.",
      "price": 11750,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 551,
        "protein": 26,
        "carbs": 75,
        "fat": 16
      },
      "available": true,
      "featured": false,
      "order": 19,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "شرائح لحم متبّلة على الرز مع الفاصولياء السوداء والذرة والفلفل، يعلوها صوص الطرطور الكريمي."
    },
    {
      "id": "meal-092",
      "odooProductId": null,
      "name": "Fajita Chicken Sandwich",
      "nameAr": "ساندويتش دجاج الفاهيتا",
      "category": "sandwiches-wraps",
      "description": "Chicken fajita strips with peppers, mushrooms and melted mozzarella in warm fajita bread, with a kick of buffalo sauce.",
      "price": 6750,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 578,
        "protein": 44,
        "carbs": 64,
        "fat": 17
      },
      "available": true,
      "featured": false,
      "order": 7,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "شرائح دجاج فاهيتا مع الفلفل والفطر وجبن الموزاريلا الذائب في خبز فاهيتا دافئ، مع لمسة صوص بافلو."
    },
    {
      "id": "meal-093",
      "odooProductId": null,
      "name": "Chicken Kebab Wrap",
      "nameAr": "لفة كباب الدجاج",
      "category": "sandwiches-wraps",
      "description": "Juicy spiced chicken kebab wrapped in a soft tortilla with fresh lettuce, peppers and parsley.",
      "price": 6000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 381,
        "protein": 28,
        "carbs": 47,
        "fat": 8
      },
      "available": true,
      "featured": false,
      "order": 8,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "كباب دجاج متبّل وعصيري ملفوف في خبز تورتيلا طري مع الخس والفلفل والبقدونس."
    },
    {
      "id": "meal-094",
      "odooProductId": null,
      "name": "Arayes Roll",
      "nameAr": "رول عرايس ليان بايت",
      "category": "sandwiches-wraps",
      "description": "Our twist on the Levantine favorite: spiced beef with parsley and onion, rolled and toasted until crisp, served with tarator.",
      "price": 9000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 570,
        "protein": 28,
        "carbs": 51,
        "fat": 29
      },
      "available": true,
      "featured": false,
      "order": 9,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "لمستنا على الأكلة الشامية المحبوبة: لحم متبّل مع البقدونس والبصل، مشوي حتى يصبح مقرمشاً، مع صوص الطرطور."
    },
    {
      "id": "meal-095",
      "odooProductId": null,
      "name": "Beef Kebab Wrap",
      "nameAr": "لفة كباب اللحم",
      "category": "sandwiches-wraps",
      "description": "Smoky spiced beef kebab in a soft tortilla with crisp lettuce and a tangy sumac salad, drizzled with tarator.",
      "price": 7750,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 519,
        "protein": 24,
        "carbs": 48,
        "fat": 26
      },
      "available": true,
      "featured": false,
      "order": 10,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "كباب لحم متبّل في خبز تورتيلا طري مع الخس الطازج وسلطة السماق المنعشة، وصوص الطرطور."
    },
    {
      "id": "meal-096",
      "odooProductId": null,
      "name": "Fajita Beef Sandwich",
      "nameAr": "ساندويتش لحم فاهيتا",
      "category": "sandwiches-wraps",
      "description": "",
      "price": 8750,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 647,
        "protein": 43,
        "carbs": 67,
        "fat": 24
      },
      "available": true,
      "featured": false,
      "order": 11,
      "source": "pricing-xlsx-v2"
    },
    {
      "id": "meal-097",
      "odooProductId": null,
      "name": "Carrot Cake",
      "nameAr": "كيكة الجزر",
      "category": "snacks-desserts",
      "description": "A moist, lightly spiced carrot cake with warm cinnamon and vanilla, made with Greek yogurt and oats.",
      "price": 7000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 380,
        "protein": 29,
        "carbs": 29,
        "fat": 16
      },
      "available": true,
      "featured": false,
      "order": 9,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "كيكة جزر طرية بتوابل خفيفة ودفء القرفة والفانيلا، محضّرة بالزبادي اليوناني والشوفان."
    },
    {
      "id": "meal-098",
      "odooProductId": null,
      "name": "Protein Chocolate Mousse",
      "nameAr": "موس الشوكولاتة بالبروتين",
      "category": "snacks-desserts",
      "description": "Silky chocolate mousse made with Greek yogurt and dark chocolate, topped with crunchy walnuts and biscuit crumble.",
      "price": 8000,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 507,
        "protein": 40,
        "carbs": 44,
        "fat": 18
      },
      "available": true,
      "featured": false,
      "order": 10,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "موس شوكولاتة ناعم بالزبادي اليوناني والشوكولاتة الداكنة، يعلوه الجوز المقرمش وفتات البسكويت."
    },
    {
      "id": "meal-099",
      "odooProductId": null,
      "name": "Protein Vanilla Mousse",
      "nameAr": "موس الفانيلا بالبروتين",
      "category": "snacks-desserts",
      "description": "Light, creamy vanilla mousse with chia seeds, topped with fresh blueberries.",
      "price": 7500,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 317,
        "protein": 43,
        "carbs": 24,
        "fat": 5
      },
      "available": true,
      "featured": false,
      "order": 11,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "موس فانيلا خفيف وكريمي مع بذور الشيا، يعلوه توت أزرق طازج."
    },
    {
      "id": "meal-100",
      "odooProductId": null,
      "name": "Granola Yogurt Parfait",
      "nameAr": "بارفيه الزبادي اليوناني والغرانولا",
      "category": "snacks-desserts",
      "description": "Creamy Greek yogurt layered with fresh berries and crunchy homemade granola, with a drizzle of honey.",
      "price": 7500,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 298,
        "protein": 23,
        "carbs": 39,
        "fat": 5
      },
      "available": true,
      "featured": false,
      "order": 12,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "زبادي يوناني كريمي بطبقات من التوت الطازج والغرانولا المنزلية المقرمشة، مع رشة عسل."
    },
    {
      "id": "meal-101",
      "odooProductId": null,
      "name": "Vanilla Monkey Bites",
      "nameAr": "لقيمات الموز والفانيلا بالبروتين",
      "category": "snacks-desserts",
      "description": "Soft banana and oat bites with peanut butter and vanilla, studded with dark chocolate.",
      "price": 5500,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 242,
        "protein": 15,
        "carbs": 25,
        "fat": 10
      },
      "available": true,
      "featured": false,
      "order": 13,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "لقيمات موز وشوفان طرية مع زبدة الفول السوداني والفانيلا، تتخللها قطع الشوكولاتة الداكنة."
    },
    {
      "id": "meal-102",
      "odooProductId": null,
      "name": "Healthy Tiramisu",
      "nameAr": "تيراميسو صحي",
      "category": "snacks-desserts",
      "description": "A lighter take on the Italian classic: coffee-soaked ladyfingers with a creamy layer, dusted with cocoa.",
      "price": 7500,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 331,
        "protein": 14,
        "carbs": 31,
        "fat": 16
      },
      "available": true,
      "featured": false,
      "order": 14,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "نسخة أخف من الحلوى الإيطالية الكلاسيكية: أصابع سافوياردي مبلّلة بالقهوة مع طبقة كريمية، ومرشوشة بالكاكاو."
    },
    {
      "id": "meal-103",
      "odooProductId": null,
      "name": "Cheesecake Crumb",
      "nameAr": "تشيز كيك",
      "category": "protein-shakes",
      "description": "Creamy, light cheesecake on a crunchy biscuit base, topped with sweet strawberry.",
      "price": 6500,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 317,
        "protein": 28,
        "carbs": 36,
        "fat": 7
      },
      "available": true,
      "featured": false,
      "order": 6,
      "source": "pricing-xlsx-v2",
      "descriptionAr": "تشيز كيك كريمي وخفيف على قاعدة بسكويت مقرمشة، يعلوه فراولة حلوة."
    },
    {
      "id": "meal-104",
      "odooProductId": null,
      "name": "Fish Fillet (50g)",
      "nameAr": "فيليه سمك (٥٠ غم)",
      "category": "add-ons",
      "description": "",
      "price": 2500,
      "image": "",
      "badge": "",
      "nutrition": {
        "calories": 51,
        "protein": 12,
        "carbs": 0,
        "fat": 0
      },
      "available": true,
      "featured": false,
      "order": 11,
      "source": "pricing-xlsx-v2"
    }
  ],
  "integrationNotes": {
    "pricingWorkbookItems": 67,
    "imageFilesProvided": 67,
    "combinedUniqueMenuItems": 104,
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
    ],
    "itemsAddedWithoutImage": [
      "English Breakfast",
      "Poached Eggs Halloumi Bowl",
      "Turkey & Egg Quesadilla",
      "Egg Bun Brioche",
      "Peanut Butter Crunch Toast",
      "Strawberry Sunrise Toast",
      "Healthy Chicken Ceaser Salad",
      "Halloumi Salad",
      "Tabbouleh",
      "Lentil Soup",
      "Tomato Soup",
      "Cheesy Beef Nachos",
      "Crispy Tenders",
      "Lentil Crackers",
      "Yellow Chicken Curry",
      "Chicken Shawerma Bowl",
      "Beef Shawerma Bowl",
      "Beef Mexican Bowl",
      "Fajita Chicken Sandwich",
      "Chicken Kebab Wrap",
      "Arayes Roll",
      "Beef Kebab Wrap",
      "Fajita Beef Sandwich",
      "Carrot Cake",
      "Protein Chocolate Mousse",
      "Protein Vanilla Mousse",
      "Granola Yogurt Parfait",
      "Vanilla Monkey Bites",
      "Healthy Tiramisu",
      "Cheesecake Crumb",
      "Fish Fillet (50g)"
    ],
    "lastUpdate": "Prices/nutrition from تسعير_المنيو.xlsx; descriptions (EN+AR) from menu_descriptions_EN_AR.xlsx"
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
