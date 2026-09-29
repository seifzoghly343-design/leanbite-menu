/* =========================================================
   LEAN BITE MENU — app.js
   Updated for the current data.js structure.

   Handles:
   - Categories
   - Offers
   - Search
   - Menu rendering
   - Missing images / missing prices
   - Meal details modal
   - Cart
   - Local cart persistence

   Odoo checkout is NOT connected yet.
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1) SAFETY CHECK
     ========================================================= */
  if (!window.LEAN_BITE_DATA) {
    console.error(
      "Lean Bite data was not found. Make sure data.js is loaded before app.js."
    );
    return;
  }

  /* =========================================================
     2) DATA SHORTCUTS
     ========================================================= */
  var DATA = window.LEAN_BITE_DATA;

  var getMeals =
    window.getAvailableLeanBiteMeals ||
    function () {
      return (DATA.meals || []).filter(function (meal) {
        return meal.available !== false;
      });
    };

  var getOffers =
    window.getActiveLeanBiteOffers ||
    function () {
      return (DATA.offers || []).filter(function (offer) {
        return offer.active !== false;
      });
    };

  var getCategories =
    window.getLeanBiteCategories ||
    function () {
      return DATA.categories || [];
    };

  var getMealById =
    window.getLeanBiteMealById ||
    function (id) {
      return (DATA.meals || []).find(function (meal) {
        return meal.id === id;
      }) || null;
    };

  var formatPrice =
    window.formatLeanBitePrice ||
    function (price) {
      if (price === null || price === undefined || price === "") {
        return "";
      }

      return Number(price || 0).toLocaleString() + " IQD";
    };

  /* =========================================================
     3) DOM REFERENCES
     ========================================================= */
  var els = {
    searchToggle: document.getElementById("searchToggle"),
    searchPanel: document.getElementById("searchPanel"),
    menuSearch: document.getElementById("menuSearch"),
    searchClear: document.getElementById("searchClear"),

    offersSection: document.querySelector(".offers-section"),
    offersTrack: document.getElementById("offersTrack"),
    viewAllOffers: document.getElementById("viewAllOffers"),

    categoryNav: document.getElementById("categoryNav"),
    categoryNavInner: document.querySelector(".category-nav-inner"),

    activeCategoryLabel: document.getElementById("activeCategoryLabel"),
    menuTitle: document.getElementById("menuTitle"),
    resultsCount: document.getElementById("resultsCount"),
    menuGrid: document.getElementById("menuGrid"),
    emptyState: document.getElementById("emptyState"),

    cartToggle: document.getElementById("cartToggle"),
    cartDrawer: document.getElementById("cartDrawer"),
    cartBackdrop: document.getElementById("cartBackdrop"),
    cartClose: document.getElementById("cartClose"),
    cartItems: document.getElementById("cartItems"),
    cartEmpty: document.getElementById("cartEmpty"),
    cartSummary: document.getElementById("cartSummary"),
    cartSubtotal: document.getElementById("cartSubtotal"),
    cartCount: document.getElementById("cartCount"),

    mealModal: document.getElementById("mealModal"),
    mealModalClose: document.getElementById("mealModalClose"),
    mealModalImage: document.getElementById("mealModalImage"),
    mealModalCategory: document.getElementById("mealModalCategory"),
    mealModalName: document.getElementById("mealModalName"),
    mealModalDescription: document.getElementById("mealModalDescription"),
    mealModalNutrition: document.getElementById("mealModalNutrition"),
    mealModalPrice: document.getElementById("mealModalPrice"),
    mealModalAdd: document.getElementById("mealModalAdd"),

    copyrightYear: document.getElementById("copyrightYear")
  };

  /* =========================================================
     4) APP STATE
     ========================================================= */
  var state = {
    activeCategory: "all",
    searchTerm: "",
    selectedMealId: null,
    cart: loadCart()
  };

  /* =========================================================
     5) BRAND PLACEHOLDER IMAGE
     ========================================================= */
  var PLACEHOLDER_IMAGE =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="700" viewBox="0 0 900 700">' +
        '<rect width="900" height="700" fill="#FFF8F2"/>' +
        '<circle cx="760" cy="100" r="72" fill="#BED33B"/>' +
        '<path d="M0 520 C150 430 220 610 390 520 C520 450 615 555 900 420 L900 700 L0 700 Z" fill="#F7B7A6"/>' +
        '<text x="450" y="320" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="700" fill="#EC4D29">Lean Bite</text>' +
        '<text x="450" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#332824">Image coming soon</text>' +
      "</svg>"
    );

  /* =========================================================
     6) LOCAL STORAGE
     ========================================================= */
  function loadCart() {
    try {
      var saved = localStorage.getItem("leanBiteCart");

      if (!saved) {
        return [];
      }

      var parsed = JSON.parse(saved);

      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed
        .filter(function (item) {
          return item && item.id && Number(item.qty) > 0;
        })
        .map(function (item) {
          return {
            id: String(item.id),
            qty: Math.max(1, Number(item.qty) || 1)
          };
        });
    } catch (error) {
      console.warn("Could not load Lean Bite cart:", error);
      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem("leanBiteCart", JSON.stringify(state.cart));
    } catch (error) {
      console.warn("Could not save Lean Bite cart:", error);
    }
  }

  /* =========================================================
     7) GENERAL HELPERS
     ========================================================= */
  function escapeHTML(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function hasValue(value) {
    return value !== null && value !== undefined && value !== "";
  }

  function hasPrice(meal) {
    return meal && hasValue(meal.price) && !Number.isNaN(Number(meal.price));
  }

  function getMealImage(meal) {
    if (!meal || !meal.image) {
      return PLACEHOLDER_IMAGE;
    }

    return meal.image;
  }

  function getCategoryName(categoryId) {
    if (categoryId === "all") {
      return "All";
    }

    var category = getCategories().find(function (item) {
      return item.id === categoryId;
    });

    return category ? category.name : "Menu";
  }

  function normaliseText(value) {
    return String(value || "")
      .trim()
      .toLowerCase();
  }

  function pluraliseItems(count) {
    return count === 1 ? "1 item" : count + " items";
  }

  function formatMacroNumber(value) {
    if (!hasValue(value)) {
      return "";
    }

    var number = Number(value);

    if (Number.isNaN(number)) {
      return escapeHTML(value);
    }

    if (Number.isInteger(number)) {
      return String(number);
    }

    return String(Math.round(number * 10) / 10);
  }

  function createNutritionChip(label, value, suffix) {
    if (!hasValue(value)) {
      return "";
    }

    return (
      '<span class="nutrition-chip">' +
      escapeHTML(label) +
      ": " +
      escapeHTML(formatMacroNumber(value)) +
      escapeHTML(suffix || "") +
      "</span>"
    );
  }

  function createPriceHTML(meal, className) {
    className = className || "meal-price";

    if (!hasPrice(meal)) {
      return (
        '<span class="' +
        escapeHTML(className) +
        ' meal-price-pending">Price coming soon</span>'
      );
    }

    return (
      '<strong class="' +
      escapeHTML(className) +
      '">' +
      escapeHTML(formatPrice(meal.price)) +
      "</strong>"
    );
  }

  function handleImageError(img) {
    if (!img || img.dataset.placeholderApplied === "true") {
      return;
    }

    img.dataset.placeholderApplied = "true";
    img.src = PLACEHOLDER_IMAGE;
  }

  function attachImageFallbacks(scope) {
    var root = scope || document;

    root
      .querySelectorAll("img[data-leanbite-image]")
      .forEach(function (img) {
        img.addEventListener(
          "error",
          function () {
            handleImageError(img);
          },
          { once: true }
        );
      });
  }  /* =========================================================
     8) CATEGORIES
     ========================================================= */
  function renderCategories() {
    if (!els.categoryNavInner) {
      return;
    }

    els.categoryNavInner.innerHTML = "";

    var allButton = document.createElement("button");
    allButton.className =
      "category-pill" +
      (state.activeCategory === "all" ? " is-active" : "");
    allButton.type = "button";
    allButton.dataset.category = "all";
    allButton.setAttribute(
      "aria-pressed",
      state.activeCategory === "all" ? "true" : "false"
    );
    allButton.textContent = "All";
    els.categoryNavInner.appendChild(allButton);

    getCategories().forEach(function (category) {
      var button = document.createElement("button");

      button.className =
        "category-pill" +
        (state.activeCategory === category.id ? " is-active" : "");

      button.type = "button";
      button.dataset.category = category.id;
      button.setAttribute(
        "aria-pressed",
        state.activeCategory === category.id ? "true" : "false"
      );
      button.textContent = category.name;

      els.categoryNavInner.appendChild(button);
    });
  }

  function setActiveCategory(categoryId) {
    state.activeCategory = categoryId || "all";

    renderCategories();
    renderMenu();

    if (!els.categoryNavInner) {
      return;
    }

    var buttons = els.categoryNavInner.querySelectorAll("[data-category]");
    var activeButton = null;

    buttons.forEach(function (button) {
      if (button.dataset.category === state.activeCategory) {
        activeButton = button;
      }
    });

    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }

  /* =========================================================
     9) OFFERS
     ========================================================= */
  function renderOffers() {
    if (!els.offersTrack || !els.offersSection) {
      return;
    }

    var offers = getOffers();

    if (!offers.length) {
      els.offersSection.hidden = true;
      return;
    }

    els.offersSection.hidden = false;

    els.offersTrack.innerHTML = offers
      .map(function (offer) {
        var image = offer.image || PLACEHOLDER_IMAGE;

        return (
          '<article class="offer-card" data-offer-id="' +
          escapeHTML(offer.id) +
          '">' +
          '<img class="offer-card-image" data-leanbite-image src="' +
          escapeHTML(image) +
          '" alt="' +
          escapeHTML(offer.title || "Lean Bite offer") +
          '" loading="lazy">' +
          '<div class="offer-card-overlay">' +
          '<h3 class="offer-card-title">' +
          escapeHTML(offer.title || "Lean Bite Offer") +
          "</h3>" +
          '<p class="offer-card-text">' +
          escapeHTML(offer.description || "") +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    attachImageFallbacks(els.offersTrack);
  }

  /* =========================================================
     10) MENU FILTERING
     ========================================================= */
  function getFilteredMeals() {
    var meals = getMeals();
    var search = normaliseText(state.searchTerm);

    return meals.filter(function (meal) {
      var categoryMatches =
        state.activeCategory === "all" ||
        meal.category === state.activeCategory;

      if (!categoryMatches) {
        return false;
      }

      if (!search) {
        return true;
      }

      var searchBlob = normaliseText(
        [
          meal.name,
          meal.description,
          meal.category,
          getCategoryName(meal.category),
          meal.badge
        ].join(" ")
      );

      return searchBlob.indexOf(search) !== -1;
    });
  }

  /* =========================================================
     11) MENU CARD RENDERING
     ========================================================= */
  function mealCardHTML(meal) {
    var nutrition = meal.nutrition || {};

    var nutritionHTML = [
      createNutritionChip("Kcal", nutrition.calories, ""),
      createNutritionChip("Protein", nutrition.protein, "g"),
      createNutritionChip("Carbs", nutrition.carbs, "g"),
      createNutritionChip("Fat", nutrition.fat, "g")
    ]
      .filter(Boolean)
      .join("");

    return (
      '<article class="meal-card" data-meal-id="' +
      escapeHTML(meal.id) +
      '" tabindex="0" role="button" aria-label="View ' +
      escapeHTML(meal.name) +
      '">' +

      '<div class="meal-card-media">' +
      '<img class="meal-card-image" data-leanbite-image src="' +
      escapeHTML(getMealImage(meal)) +
      '" alt="' +
      escapeHTML(meal.name) +
      '" loading="lazy">' +

      (meal.badge
        ? '<span class="meal-badge">' +
          escapeHTML(meal.badge) +
          "</span>"
        : "") +

      "</div>" +

      '<div class="meal-card-body">' +

      '<div>' +
      '<p class="meal-card-category">' +
      escapeHTML(getCategoryName(meal.category)) +
      "</p>" +

      '<h3 class="meal-card-title">' +
      escapeHTML(meal.name) +
      "</h3>" +
      "</div>" +

      (meal.description
        ? '<p class="meal-card-description">' +
          escapeHTML(meal.description) +
          "</p>"
        : "") +

      (nutritionHTML
        ? '<div class="meal-card-meta">' +
          nutritionHTML +
          "</div>"
        : "") +

      '<div class="meal-card-footer">' +
      createPriceHTML(meal, "meal-price") +

      '<button class="add-button" type="button" data-add-meal="' +
      escapeHTML(meal.id) +
      '" aria-label="Add ' +
      escapeHTML(meal.name) +
      ' to cart">+</button>' +

      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function renderMenu() {
    if (!els.menuGrid) {
      return;
    }

    var meals = getFilteredMeals();

    els.menuGrid.innerHTML = meals.map(mealCardHTML).join("");

    attachImageFallbacks(els.menuGrid);

    if (els.resultsCount) {
      els.resultsCount.textContent = pluraliseItems(meals.length);
    }

    if (els.activeCategoryLabel) {
      els.activeCategoryLabel.textContent =
        state.activeCategory === "all"
          ? "Explore"
          : getCategoryName(state.activeCategory);
    }

    if (els.menuTitle) {
      els.menuTitle.textContent =
        state.activeCategory === "all"
          ? "Our Menu"
          : getCategoryName(state.activeCategory);
    }

    if (els.emptyState) {
      els.emptyState.hidden = meals.length !== 0;
    }
  }

  /* =========================================================
     12) MEAL DETAILS MODAL
     ========================================================= */
  function openMealModal(mealId) {
    var meal = getMealById(mealId);

    if (!meal || !els.mealModal) {
      return;
    }

    state.selectedMealId = meal.id;

    if (els.mealModalImage) {
      els.mealModalImage.dataset.placeholderApplied = "false";
      els.mealModalImage.src = getMealImage(meal);
      els.mealModalImage.alt = meal.name || "Lean Bite meal";
      els.mealModalImage.onerror = function () {
        handleImageError(els.mealModalImage);
      };
    }

    if (els.mealModalCategory) {
      els.mealModalCategory.textContent =
        getCategoryName(meal.category);
    }

    if (els.mealModalName) {
      els.mealModalName.textContent = meal.name || "";
    }

    if (els.mealModalDescription) {
      if (meal.description) {
        els.mealModalDescription.textContent = meal.description;
        els.mealModalDescription.hidden = false;
      } else {
        els.mealModalDescription.textContent = "";
        els.mealModalDescription.hidden = true;
      }
    }

    if (els.mealModalPrice) {
      if (hasPrice(meal)) {
        els.mealModalPrice.textContent = formatPrice(meal.price);
        els.mealModalPrice.classList.remove("meal-price-pending");
      } else {
        els.mealModalPrice.textContent = "Price coming soon";
        els.mealModalPrice.classList.add("meal-price-pending");
      }
    }

    if (els.mealModalNutrition) {
      var nutrition = meal.nutrition || {};

      var nutritionHTML = [
        createNutritionChip("Calories", nutrition.calories, ""),
        createNutritionChip("Protein", nutrition.protein, "g"),
        createNutritionChip("Carbs", nutrition.carbs, "g"),
        createNutritionChip("Fat", nutrition.fat, "g")
      ]
        .filter(Boolean)
        .join("");

      els.mealModalNutrition.innerHTML = nutritionHTML;
      els.mealModalNutrition.hidden = !nutritionHTML;
    }

    if (typeof els.mealModal.showModal === "function") {
      els.mealModal.showModal();
    } else {
      els.mealModal.setAttribute("open", "");
    }

    document.body.style.overflow = "hidden";
  }

  function closeMealModal() {
    if (!els.mealModal) {
      return;
    }

    if (
      typeof els.mealModal.close === "function" &&
      els.mealModal.open
    ) {
      els.mealModal.close();
    } else {
      els.mealModal.removeAttribute("open");
    }

    state.selectedMealId = null;
    document.body.style.overflow = "";
  }  /* =========================================================
     13) CART LOGIC
     ========================================================= */
  function cleanCart() {
    state.cart = state.cart.filter(function (cartItem) {
      return Boolean(getMealById(cartItem.id));
    });

    saveCart();
  }

  function addToCart(mealId) {
    var meal = getMealById(mealId);

    if (!meal) {
      return;
    }

    var existing = state.cart.find(function (item) {
      return item.id === mealId;
    });

    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        id: mealId,
        qty: 1
      });
    }

    saveCart();
    renderCart();
    animateCartCount();
  }

  function changeCartQuantity(mealId, difference) {
    var item = state.cart.find(function (cartItem) {
      return cartItem.id === mealId;
    });

    if (!item) {
      return;
    }

    item.qty += difference;

    if (item.qty <= 0) {
      state.cart = state.cart.filter(function (cartItem) {
        return cartItem.id !== mealId;
      });
    }

    saveCart();
    renderCart();
  }

  function getCartCount() {
    return state.cart.reduce(function (total, item) {
      return total + item.qty;
    }, 0);
  }

  function getCartSubtotal() {
    return state.cart.reduce(function (total, item) {
      var meal = getMealById(item.id);

      if (!meal || !hasPrice(meal)) {
        return total;
      }

      return total + Number(meal.price) * item.qty;
    }, 0);
  }

  function cartHasUnpricedItems() {
    return state.cart.some(function (item) {
      var meal = getMealById(item.id);
      return meal && !hasPrice(meal);
    });
  }

  function cartItemHTML(item) {
    var meal = getMealById(item.id);

    if (!meal) {
      return "";
    }

    var priceHTML = hasPrice(meal)
      ? escapeHTML(formatPrice(meal.price))
      : "Price coming soon";

    return (
      '<div class="cart-item" data-cart-id="' +
      escapeHTML(meal.id) +
      '">' +

      '<img class="cart-item-image" data-leanbite-image src="' +
      escapeHTML(getMealImage(meal)) +
      '" alt="' +
      escapeHTML(meal.name) +
      '">' +

      '<div>' +
      '<p class="cart-item-name">' +
      escapeHTML(meal.name) +
      "</p>" +

      '<span class="cart-item-price">' +
      priceHTML +
      "</span>" +
      "</div>" +

      '<div class="cart-qty">' +
      '<button type="button" data-cart-minus="' +
      escapeHTML(meal.id) +
      '" aria-label="Reduce quantity">−</button>' +

      "<span>" +
      escapeHTML(item.qty) +
      "</span>" +

      '<button type="button" data-cart-plus="' +
      escapeHTML(meal.id) +
      '" aria-label="Increase quantity">+</button>' +
      "</div>" +

      "</div>"
    );
  }

  function renderCart() {
    cleanCart();

    var count = getCartCount();
    var subtotal = getCartSubtotal();
    var hasUnpricedItems = cartHasUnpricedItems();

    if (els.cartCount) {
      els.cartCount.textContent = count;
    }

    if (els.cartItems) {
      els.cartItems.innerHTML = state.cart
        .map(cartItemHTML)
        .join("");

      attachImageFallbacks(els.cartItems);
    }

    if (els.cartEmpty) {
      els.cartEmpty.hidden = state.cart.length > 0;
    }

    if (els.cartSummary) {
      els.cartSummary.hidden = state.cart.length === 0;
    }

    if (els.cartSubtotal) {
      if (state.cart.length === 0) {
        els.cartSubtotal.textContent = formatPrice(0);
      } else if (hasUnpricedItems && subtotal === 0) {
        els.cartSubtotal.textContent = "Pending";
      } else if (hasUnpricedItems) {
        els.cartSubtotal.textContent =
          formatPrice(subtotal) + " + pending items";
      } else {
        els.cartSubtotal.textContent = formatPrice(subtotal);
      }
    }
  }

  function openCart() {
    if (!els.cartDrawer) {
      return;
    }

    renderCart();

    els.cartDrawer.classList.add("is-open");
    els.cartDrawer.setAttribute("aria-hidden", "false");

    if (els.cartToggle) {
      els.cartToggle.setAttribute("aria-expanded", "true");
    }

    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    if (!els.cartDrawer) {
      return;
    }

    els.cartDrawer.classList.remove("is-open");
    els.cartDrawer.setAttribute("aria-hidden", "true");

    if (els.cartToggle) {
      els.cartToggle.setAttribute("aria-expanded", "false");
    }

    document.body.style.overflow = "";
  }

  function animateCartCount() {
    if (!els.cartCount || !els.cartCount.animate) {
      return;
    }

    els.cartCount.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.25)" },
        { transform: "scale(1)" }
      ],
      {
        duration: 260,
        easing: "ease-out"
      }
    );
  }

  /* =========================================================
     14) SEARCH
     ========================================================= */
  function openSearch() {
    if (!els.searchPanel) {
      return;
    }

    els.searchPanel.hidden = false;

    if (els.searchToggle) {
      els.searchToggle.setAttribute("aria-expanded", "true");
    }

    window.setTimeout(function () {
      if (els.menuSearch) {
        els.menuSearch.focus();
      }
    }, 30);
  }

  function closeSearch() {
    if (!els.searchPanel) {
      return;
    }

    els.searchPanel.hidden = true;

    if (els.searchToggle) {
      els.searchToggle.setAttribute("aria-expanded", "false");
    }
  }

  function toggleSearch() {
    if (!els.searchPanel) {
      return;
    }

    if (els.searchPanel.hidden) {
      openSearch();
    } else {
      closeSearch();
    }
  }

  function clearSearch() {
    state.searchTerm = "";

    if (els.menuSearch) {
      els.menuSearch.value = "";
      els.menuSearch.focus();
    }

    renderMenu();
  }  /* =========================================================
     15) EVENT LISTENERS
     ========================================================= */

  if (els.categoryNavInner) {
    els.categoryNavInner.addEventListener("click", function (event) {
      var button = event.target.closest("[data-category]");

      if (!button) {
        return;
      }

      setActiveCategory(button.dataset.category);
    });
  }

  if (els.searchToggle) {
    els.searchToggle.addEventListener("click", toggleSearch);
  }

  if (els.searchClear) {
    els.searchClear.addEventListener("click", clearSearch);
  }

  if (els.menuSearch) {
    els.menuSearch.addEventListener("input", function (event) {
      state.searchTerm = event.target.value || "";
      renderMenu();
    });
  }

  if (els.menuGrid) {
    els.menuGrid.addEventListener("click", function (event) {
      var addButton = event.target.closest("[data-add-meal]");

      if (addButton) {
        event.stopPropagation();
        addToCart(addButton.dataset.addMeal);
        return;
      }

      var card = event.target.closest("[data-meal-id]");

      if (card) {
        openMealModal(card.dataset.mealId);
      }
    });

    els.menuGrid.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      var card = event.target.closest("[data-meal-id]");

      if (!card) {
        return;
      }

      event.preventDefault();
      openMealModal(card.dataset.mealId);
    });
  }

  if (els.mealModalClose) {
    els.mealModalClose.addEventListener("click", closeMealModal);
  }

  if (els.mealModalAdd) {
    els.mealModalAdd.addEventListener("click", function () {
      if (!state.selectedMealId) {
        return;
      }

      addToCart(state.selectedMealId);
      closeMealModal();
      openCart();
    });
  }

  if (els.mealModal) {
    els.mealModal.addEventListener("click", function (event) {
      if (event.target === els.mealModal) {
        closeMealModal();
      }
    });

    els.mealModal.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeMealModal();
    });
  }

  if (els.cartToggle) {
    els.cartToggle.addEventListener("click", openCart);
  }

  if (els.cartClose) {
    els.cartClose.addEventListener("click", closeCart);
  }

  if (els.cartBackdrop) {
    els.cartBackdrop.addEventListener("click", closeCart);
  }

  if (els.cartItems) {
    els.cartItems.addEventListener("click", function (event) {
      var plus = event.target.closest("[data-cart-plus]");
      var minus = event.target.closest("[data-cart-minus]");

      if (plus) {
        changeCartQuantity(plus.dataset.cartPlus, 1);
        return;
      }

      if (minus) {
        changeCartQuantity(minus.dataset.cartMinus, -1);
      }
    });
  }

  if (els.viewAllOffers) {
    els.viewAllOffers.addEventListener("click", function () {
      if (!els.offersTrack) {
        return;
      }

      els.offersTrack.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") {
      return;
    }

    if (
      els.cartDrawer &&
      els.cartDrawer.classList.contains("is-open")
    ) {
      closeCart();
      return;
    }

    if (
      els.mealModal &&
      els.mealModal.hasAttribute("open")
    ) {
      closeMealModal();
    }
  });

  /* =========================================================
     16) INITIAL APP RENDER
     ========================================================= */
  function init() {
    renderCategories();
    renderOffers();
    renderMenu();
    renderCart();

    if (els.copyrightYear) {
      els.copyrightYear.textContent =
        "© " +
        new Date().getFullYear() +
        " " +
        (DATA.settings.brandName || "Lean Bite");
    }

    console.log(
      "Lean Bite Menu front end loaded with " +
      getMeals().length +
      " available items."
    );
  }

  init();
})();
