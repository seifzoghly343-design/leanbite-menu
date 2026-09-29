/* =========================================================
   LEAN BITE MENU — data.js
   Central data source for categories, offers, meals and settings.

   IMPORTANT:
   - This file contains NO Odoo credentials or API secrets.
   - Real menu data will be inserted here after the final menu file
     is provided.
   - app.js will read this object and render the UI automatically.
   ========================================================= */

window.LEAN_BITE_DATA = {
  /* ---------------------------------------------------------
     BASIC SETTINGS
     --------------------------------------------------------- */
  settings: {
    brandName: "Lean Bite",
    locale: "en-IQ",
    currencyCode: "IQD",
    currencyLabel: "IQD",

    /* Future Odoo connection status.
       Keep false until backend/API integration is completed. */
    odooConnected: false,

    /* Checkout remains disabled in the current front-end phase. */
    checkoutEnabled: false
  },

  /* ---------------------------------------------------------
     CATEGORY NAVIGATION
     ---------------------------------------------------------
     Real categories will be added once the final menu data arrives.

     Each category should follow this format:

     {
       id: "breakfast",
       name: "Breakfast",
       order: 1
     }

     The "All" button already exists in index.html, so it is not
     repeated here.
     --------------------------------------------------------- */
  categories: [],

  /* ---------------------------------------------------------
     MONTHLY / CURRENT OFFERS
     ---------------------------------------------------------
     Example structure only:

     {
       id: "offer-001",
       title: "Offer title",
       description: "Short offer description",
       image: "assets/images/offers/offer-001.webp",
       active: true,
       order: 1
     }

     Real offers will be added after receiving the final offer data.
     --------------------------------------------------------- */
  offers: [],

  /* ---------------------------------------------------------
     MENU ITEMS
     ---------------------------------------------------------
     Every meal will be stored as a structured object so later it
     can be mapped easily to Odoo product IDs.

     Expected item structure:

     {
       id: "meal-001",

       // This will later match the related Odoo product ID.
       odooProductId: null,

       name: "Meal name",
       category: "category-id",

       description: "Short description",

       price: 0,

       image: "assets/images/meals/meal-001.webp",

       badge: "",

       nutrition: {
         calories: null,
         protein: null,
         carbs: null,
         fat: null
       },

       available: true,
       featured: false,
       order: 1
     }

     IMPORTANT:
     Do not manually place meal HTML inside index.html.
     app.js will generate the cards from this array.
     --------------------------------------------------------- */
  meals: []
};


/* =========================================================
   DATA HELPERS
   These functions keep app.js clean and make future Odoo
   integration easier.
   ========================================================= */

/**
 * Returns only currently available meals.
 */
window.getAvailableLeanBiteMeals = function () {
  return window.LEAN_BITE_DATA.meals
    .filter(function (meal) {
      return meal.available !== false;
    })
    .sort(function (a, b) {
      return (a.order || 9999) - (b.order || 9999);
    });
};


/**
 * Returns active offers only.
 */
window.getActiveLeanBiteOffers = function () {
  return window.LEAN_BITE_DATA.offers
    .filter(function (offer) {
      return offer.active !== false;
    })
    .sort(function (a, b) {
      return (a.order || 9999) - (b.order || 9999);
    });
};


/**
 * Returns categories in display order.
 */
window.getLeanBiteCategories = function () {
  return window.LEAN_BITE_DATA.categories
    .slice()
    .sort(function (a, b) {
      return (a.order || 9999) - (b.order || 9999);
    });
};


/**
 * Returns one meal by its internal front-end ID.
 */
window.getLeanBiteMealById = function (mealId) {
  return window.LEAN_BITE_DATA.meals.find(function (meal) {
    return meal.id === mealId;
  }) || null;
};


/**
 * Formats a Lean Bite price for the current menu.
 */
window.formatLeanBitePrice = function (price) {
  var numericPrice = Number(price) || 0;

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
