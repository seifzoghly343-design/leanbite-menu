/* Lean Bite Menu - app.js
   Front-end only. Odoo submission will be connected later. */

(() => {
  "use strict";

  if (!window.LEAN_BITE_DATA) {
    console.error("data.js must load before app.js");
    return;
  }

  const DATA = window.LEAN_BITE_DATA;
  const $ = (id) => document.getElementById(id);

  const getMeals =
    window.getAvailableLeanBiteMeals ||
    (() => DATA.meals || []);

  const getOffers =
    window.getActiveLeanBiteOffers ||
    (() => DATA.offers || []);

  const getCategories =
    window.getLeanBiteCategories ||
    (() => DATA.categories || []);

  const getMealById =
    window.getLeanBiteMealById ||
    ((id) =>
      (DATA.meals || []).find((meal) => meal.id === id) || null);

  const formatPrice =
    window.formatLeanBitePrice ||
    ((price) =>
      price === null ||
      price === undefined ||
      price === ""
        ? ""
        : `${Number(price).toLocaleString()} IQD`);

  const el = {
    searchToggle: $("searchToggle"),
    searchPanel: $("searchPanel"),
    menuSearch: $("menuSearch"),
    searchClear: $("searchClear"),

    offersSection: document.querySelector(".offers-section"),
    offersTrack: $("offersTrack"),
    viewAllOffers: $("viewAllOffers"),

    categoryNavInner:
      document.querySelector(".category-nav-inner"),

    activeCategoryLabel: $("activeCategoryLabel"),
    menuTitle: $("menuTitle"),
    resultsCount: $("resultsCount"),
    menuGrid: $("menuGrid"),
    emptyState: $("emptyState"),

    cartToggle: $("cartToggle"),
    cartDrawer: $("cartDrawer"),
    cartBackdrop: $("cartBackdrop"),
    cartClose: $("cartClose"),
    cartItems: $("cartItems"),
    cartEmpty: $("cartEmpty"),
    cartSummary: $("cartSummary"),
    cartSubtotal: $("cartSubtotal"),
    cartCount: $("cartCount"),
    checkoutOpen: $("checkoutOpen"),

    checkoutModal: $("checkoutModal"),
    checkoutClose: $("checkoutClose"),
    checkoutForm: $("checkoutForm"),

    customerName: $("customerName"),
    customerPhone: $("customerPhone"),
    customerArea: $("customerArea"),
    customerAddress: $("customerAddress"),
    orderNotes: $("orderNotes"),

    checkoutMessage: $("checkoutMessage"),
    checkoutSummaryItems: $("checkoutSummaryItems"),
    checkoutItemCount: $("checkoutItemCount"),
    checkoutTotal: $("checkoutTotal"),

    mealModal: $("mealModal"),
    mealModalClose: $("mealModalClose"),
    mealModalImage: $("mealModalImage"),
    mealModalCategory: $("mealModalCategory"),
    mealModalName: $("mealModalName"),
    mealModalDescription: $("mealModalDescription"),
    mealModalNutrition: $("mealModalNutrition"),
    mealModalPrice: $("mealModalPrice"),
    mealModalAdd: $("mealModalAdd"),

    copyrightYear: $("copyrightYear")
  };

  const PLACEHOLDER_IMAGE =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg"
        width="900"
        height="700"
        viewBox="0 0 900 700">

        <rect
          width="900"
          height="700"
          fill="#FFF8F2"
        />

        <circle
          cx="760"
          cy="100"
          r="72"
          fill="#BED33B"
        />

        <path
          d="M0 520 C150 430 220 610 390 520 C520 450 615 555 900 420 L900 700 L0 700 Z"
          fill="#F7B7A6"
        />

        <text
          x="450"
          y="320"
          text-anchor="middle"
          font-family="Arial,sans-serif"
          font-size="72"
          font-weight="700"
          fill="#EC4D29"
        >
          Lean Bite
        </text>

        <text
          x="450"
          y="385"
          text-anchor="middle"
          font-family="Arial,sans-serif"
          font-size="28"
          fill="#332824"
        >
          Image coming soon
        </text>
      </svg>
    `);

  /* =========================================================
     CART STORAGE
     ========================================================= */

  const loadCart = () => {
    try {
      const raw = JSON.parse(
        localStorage.getItem("leanBiteCart") || "[]"
      );

      if (!Array.isArray(raw)) {
        return [];
      }

      return raw
        .filter(
          (item) =>
            item?.id &&
            Number(item.qty) > 0
        )
        .map((item) => ({
          id: String(item.id),
          qty: Math.max(
            1,
            Number(item.qty) || 1
          )
        }));
    } catch {
      return [];
    }
  };

  const state = {
    activeCategory: "all",
    searchTerm: "",
    selectedMealId: null,
    cart: loadCart()
  };

  const saveCart = () => {
    try {
      localStorage.setItem(
        "leanBiteCart",
        JSON.stringify(state.cart)
      );
    } catch (error) {
      console.warn(
        "Cart could not be saved.",
        error
      );
    }
  };

  /* =========================================================
     HELPERS
     ========================================================= */

  const escapeHTML = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const hasValue = (value) =>
    value !== null &&
    value !== undefined &&
    value !== "";

  const hasPrice = (meal) =>
    meal &&
    hasValue(meal.price) &&
    !Number.isNaN(Number(meal.price));

  const mealImage = (meal) =>
    meal?.image || PLACEHOLDER_IMAGE;

  const isOpen = (dialog) =>
    Boolean(
      dialog?.hasAttribute("open")
    );

  const categoryName = (id) => {
    if (id === "all") {
      return "All";
    }

    return (
      getCategories().find(
        (category) =>
          category.id === id
      )?.name || "Menu"
    );
  };

  const macroValue = (value) => {
    if (!hasValue(value)) {
      return "";
    }

    const number = Number(value);

    if (Number.isNaN(number)) {
      return value;
    }

    return Number.isInteger(number)
      ? String(number)
      : String(
          Math.round(number * 10) / 10
        );
  };

  const nutritionChip = (
    label,
    value,
    suffix = ""
  ) =>
    hasValue(value)
      ? `
        <span class="nutrition-chip">
          ${escapeHTML(label)}:
          ${escapeHTML(macroValue(value))}
          ${escapeHTML(suffix)}
        </span>
      `
      : "";

  const priceHTML = (
    meal,
    className = "meal-price"
  ) =>
    hasPrice(meal)
      ? `
        <strong class="${className}">
          ${escapeHTML(
            formatPrice(meal.price)
          )}
        </strong>
      `
      : `
        <span
          class="${className} meal-price-pending"
        >
          Price coming soon
        </span>
      `;

  const applyImageFallbacks = (
    scope = document
  ) => {
    scope
      .querySelectorAll(
        "img[data-leanbite-image]"
      )
      .forEach((img) => {
        img.addEventListener(
          "error",
          () => {
            if (
              img.dataset
                .placeholderApplied ===
              "true"
            ) {
              return;
            }

            img.dataset.placeholderApplied =
              "true";

            img.src =
              PLACEHOLDER_IMAGE;
          },
          {
            once: true
          }
        );
      });
  };

  const updateBodyLock = () => {
    const cartOpen =
      el.cartDrawer?.classList.contains(
        "is-open"
      );

    document.body.style.overflow =
      cartOpen ||
      isOpen(el.mealModal) ||
      isOpen(el.checkoutModal)
        ? "hidden"
        : "";
  };

  /* =========================================================
     CATEGORIES
     ========================================================= */

  const renderCategories = () => {
    if (!el.categoryNavInner) {
      return;
    }

    const categories = [
      {
        id: "all",
        name: "All"
      },
      ...getCategories()
    ];

    el.categoryNavInner.innerHTML =
      categories
        .map(
          (category) => `
            <button
              class="category-pill ${
                state.activeCategory ===
                category.id
                  ? "is-active"
                  : ""
              }"
              type="button"
              data-category="${escapeHTML(
                category.id
              )}"
              aria-pressed="${
                state.activeCategory ===
                category.id
                  ? "true"
                  : "false"
              }"
            >
              ${escapeHTML(
                category.name
              )}
            </button>
          `
        )
        .join("");
  };

  const setActiveCategory = (
    categoryId
  ) => {
    state.activeCategory =
      categoryId || "all";

    renderCategories();
    renderMenu();

    const active = [
      ...(
        el.categoryNavInner?.querySelectorAll(
          "[data-category]"
        ) || []
      )
    ].find(
      (button) =>
        button.dataset.category ===
        state.activeCategory
    );

    active?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  };

  /* =========================================================
     OFFERS
     ========================================================= */

  const renderOffers = () => {
    if (
      !el.offersTrack ||
      !el.offersSection
    ) {
      return;
    }

    const offers = getOffers();

    el.offersSection.hidden =
      offers.length === 0;

    if (!offers.length) {
      return;
    }

    el.offersTrack.innerHTML = offers
      .map(
        (offer) => `
          <article class="offer-card">

            <img
              class="offer-card-image"
              data-leanbite-image
              src="${escapeHTML(
                offer.image ||
                  PLACEHOLDER_IMAGE
              )}"
              alt="${escapeHTML(
                offer.title ||
                  "Lean Bite offer"
              )}"
              loading="lazy"
            />

            <div
              class="offer-card-overlay"
            >
              <h3
                class="offer-card-title"
              >
                ${escapeHTML(
                  offer.title ||
                    "Lean Bite Offer"
                )}
              </h3>

              <p
                class="offer-card-text"
              >
                ${escapeHTML(
                  offer.description ||
                    ""
                )}
              </p>
            </div>

          </article>
        `
      )
      .join("");

    applyImageFallbacks(
      el.offersTrack
    );
  };

  /* =========================================================
     MENU
     ========================================================= */

  const filteredMeals = () => {
    const search =
      state.searchTerm
        .trim()
        .toLowerCase();

    return getMeals().filter(
      (meal) => {
        if (
          state.activeCategory !==
            "all" &&
          meal.category !==
            state.activeCategory
        ) {
          return false;
        }

        if (!search) {
          return true;
        }

        return [
          meal.name,
          meal.description,
          meal.category,
          categoryName(
            meal.category
          ),
          meal.badge
        ]
          .join(" ")
          .toLowerCase()
          .includes(search);
      }
    );
  };

  const mealCardHTML = (meal) => {
    const nutrition =
      meal.nutrition || {};

    const nutritionHTML = [
      nutritionChip(
        "Kcal",
        nutrition.calories
      ),
      nutritionChip(
        "Protein",
        nutrition.protein,
        "g"
      ),
      nutritionChip(
        "Carbs",
        nutrition.carbs,
        "g"
      ),
      nutritionChip(
        "Fat",
        nutrition.fat,
        "g"
      )
    ]
      .filter(Boolean)
      .join("");

    return `
      <article
        class="meal-card"
        data-meal-id="${escapeHTML(
          meal.id
        )}"
        tabindex="0"
        role="button"
        aria-label="View ${escapeHTML(
          meal.name
        )}"
      >

        <div
          class="meal-card-media"
        >

          <img
            class="meal-card-image"
            data-leanbite-image
            src="${escapeHTML(
              mealImage(meal)
            )}"
            alt="${escapeHTML(
              meal.name
            )}"
            loading="lazy"
          />

          ${
            meal.badge
              ? `
                <span
                  class="meal-badge"
                >
                  ${escapeHTML(
                    meal.badge
                  )}
                </span>
              `
              : ""
          }

        </div>

        <div
          class="meal-card-body"
        >

          <div>
            <p
              class="meal-card-category"
            >
              ${escapeHTML(
                categoryName(
                  meal.category
                )
              )}
            </p>

            <h3
              class="meal-card-title"
            >
              ${escapeHTML(
                meal.name
              )}
            </h3>
          </div>

          ${
            meal.description
              ? `
                <p
                  class="meal-card-description"
                >
                  ${escapeHTML(
                    meal.description
                  )}
                </p>
              `
              : ""
          }

          ${
            nutritionHTML
              ? `
                <div
                  class="meal-card-meta"
                >
                  ${nutritionHTML}
                </div>
              `
              : ""
          }

          <div
            class="meal-card-footer"
          >

            ${priceHTML(meal)}

            <button
              class="add-button"
              type="button"
              data-add-meal="${escapeHTML(
                meal.id
              )}"
              aria-label="Add ${escapeHTML(
                meal.name
              )} to cart"
            >
              +
            </button>

          </div>

        </div>

      </article>
    `;
  };

  const renderMenu = () => {
    if (!el.menuGrid) {
      return;
    }

    const meals =
      filteredMeals();

    el.menuGrid.innerHTML =
      meals
        .map(mealCardHTML)
        .join("");

    applyImageFallbacks(
      el.menuGrid
    );

    if (el.resultsCount) {
      el.resultsCount.textContent =
        meals.length === 1
          ? "1 item"
          : `${meals.length} items`;
    }

    if (
      el.activeCategoryLabel
    ) {
      el.activeCategoryLabel.textContent =
        state.activeCategory ===
        "all"
          ? "Explore"
          : categoryName(
              state.activeCategory
            );
    }

    if (el.menuTitle) {
      el.menuTitle.textContent =
        state.activeCategory ===
        "all"
          ? "Our Menu"
          : categoryName(
              state.activeCategory
            );
    }

    if (el.emptyState) {
      el.emptyState.hidden =
        meals.length > 0;
    }
  };

  /* =========================================================
     MEAL MODAL
     ========================================================= */

  const openMealModal = (
    mealId
  ) => {
    const meal =
      getMealById(mealId);

    if (
      !meal ||
      !el.mealModal
    ) {
      return;
    }

    state.selectedMealId =
      meal.id;

    el.mealModalImage.src =
      mealImage(meal);

    el.mealModalImage.alt =
      meal.name;

    el.mealModalImage.onerror =
      () => {
        el.mealModalImage.onerror =
          null;

        el.mealModalImage.src =
          PLACEHOLDER_IMAGE;
      };

    el.mealModalCategory.textContent =
      categoryName(
        meal.category
      );

    el.mealModalName.textContent =
      meal.name || "";

    if (meal.description) {
      el.mealModalDescription.textContent =
        meal.description;

      el.mealModalDescription.hidden =
        false;
    } else {
      el.mealModalDescription.textContent =
        "";

      el.mealModalDescription.hidden =
        true;
    }

    el.mealModalPrice.textContent =
      hasPrice(meal)
        ? formatPrice(
            meal.price
          )
        : "Price coming soon";

    el.mealModalPrice.classList.toggle(
      "meal-price-pending",
      !hasPrice(meal)
    );

    const nutrition =
      meal.nutrition || {};

    const nutritionHTML = [
      nutritionChip(
        "Calories",
        nutrition.calories
      ),
      nutritionChip(
        "Protein",
        nutrition.protein,
        "g"
      ),
      nutritionChip(
        "Carbs",
        nutrition.carbs,
        "g"
      ),
      nutritionChip(
        "Fat",
        nutrition.fat,
        "g"
      )
    ]
      .filter(Boolean)
      .join("");

    el.mealModalNutrition.innerHTML =
      nutritionHTML;

    el.mealModalNutrition.hidden =
      !nutritionHTML;

    if (
      typeof el.mealModal
        .showModal ===
      "function"
    ) {
      el.mealModal.showModal();
    } else {
      el.mealModal.setAttribute(
        "open",
        ""
      );
    }

    updateBodyLock();
  };

  const closeMealModal = () => {
    if (!el.mealModal) {
      return;
    }

    if (
      typeof el.mealModal
        .close ===
        "function" &&
      el.mealModal.open
    ) {
      el.mealModal.close();
    } else {
      el.mealModal.removeAttribute(
        "open"
      );
    }

    state.selectedMealId =
      null;

    updateBodyLock();
  };

  /* =========================================================
     CART
     ========================================================= */

  const cleanCart = () => {
    state.cart =
      state.cart.filter(
        (item) =>
          Boolean(
            getMealById(
              item.id
            )
          )
      );

    saveCart();
  };
const showCartToast = (meal) => {
  if (!meal) {
    return;
  }

  let toast =
    document.getElementById(
      "cartToast"
    );

  if (!toast) {
    toast =
      document.createElement(
        "div"
      );

    toast.id =
      "cartToast";

    toast.className =
      "cart-toast";

    toast.setAttribute(
      "role",
      "status"
    );

    toast.setAttribute(
      "aria-live",
      "polite"
    );

    document.body.appendChild(
      toast
    );
  }

  toast.innerHTML = `
    <div class="cart-toast-icon">
      ✓
    </div>

    <div class="cart-toast-content">

      <p class="cart-toast-title">
        Added to cart
      </p>

      <p class="cart-toast-meal">
        ${escapeHTML(meal.name)}
      </p>

    </div>
  `;

  clearTimeout(
    window.leanBiteToastTimer
  );

  toast.classList.remove(
    "is-showing"
  );

  void toast.offsetWidth;

  toast.classList.add(
    "is-showing"
  );

  window.leanBiteToastTimer =
    setTimeout(() => {
      toast.classList.remove(
        "is-showing"
      );
    }, 2000);
};
  const addToCart = (
    mealId
  ) => {
    if (
      !getMealById(mealId)
    ) {
      return;
    }

    const item =
      state.cart.find(
        (cartItem) =>
          cartItem.id ===
          mealId
      );

    if (item) {
      item.qty += 1;
    } else {
      state.cart.push({
        id: mealId,
        qty: 1
      });
    }

    saveCart();
renderCart();

showCartToast(
  getMealById(mealId)
);

el.cartCount?.animate?.(
      [
        {
          transform:
            "scale(1)"
        },
        {
          transform:
            "scale(1.25)"
        },
        {
          transform:
            "scale(1)"
        }
      ],
      {
        duration: 260,
        easing: "ease-out"
      }
    );
  };

  const changeQty = (
    mealId,
    change
  ) => {
    const item =
      state.cart.find(
        (cartItem) =>
          cartItem.id ===
          mealId
      );

    if (!item) {
      return;
    }

    item.qty += change;

    if (item.qty <= 0) {
      state.cart =
        state.cart.filter(
          (cartItem) =>
            cartItem.id !==
            mealId
        );
    }

    saveCart();
    renderCart();
  };

  const cartCount = () =>
    state.cart.reduce(
      (total, item) =>
        total + item.qty,
      0
    );

  const cartSubtotal = () =>
    state.cart.reduce(
      (total, item) => {
        const meal =
          getMealById(
            item.id
          );

        return (
          meal &&
          hasPrice(meal)
        )
          ? total +
              Number(
                meal.price
              ) *
                item.qty
          : total;
      },
      0
    );

  const hasUnpricedItems = () =>
    state.cart.some(
      (item) => {
        const meal =
          getMealById(
            item.id
          );

        return (
          meal &&
          !hasPrice(meal)
        );
      }
    );

  const cartItemHTML = (
    item
  ) => {
    const meal =
      getMealById(
        item.id
      );

    if (!meal) {
      return "";
    }

    return `
      <div
        class="cart-item"
      >

        <img
          class="cart-item-image"
          data-leanbite-image
          src="${escapeHTML(
            mealImage(meal)
          )}"
          alt="${escapeHTML(
            meal.name
          )}"
        />

        <div>

          <p
            class="cart-item-name"
          >
            ${escapeHTML(
              meal.name
            )}
          </p>

          <span
            class="cart-item-price"
          >
            ${
              hasPrice(meal)
                ? escapeHTML(
                    formatPrice(
                      meal.price
                    )
                  )
                : "Price coming soon"
            }
          </span>

        </div>

        <div
          class="cart-qty"
        >

          <button
            type="button"
            data-cart-minus="${escapeHTML(
              meal.id
            )}"
            aria-label="Reduce quantity"
          >
            −
          </button>

          <span>
            ${item.qty}
          </span>

          <button
            type="button"
            data-cart-plus="${escapeHTML(
              meal.id
            )}"
            aria-label="Increase quantity"
          >
            +
          </button>

        </div>

      </div>
    `;
  };

  const renderCart = () => {
    cleanCart();

    const count =
      cartCount();

    const subtotal =
      cartSubtotal();

    const pending =
      hasUnpricedItems();

    if (el.cartCount) {
      el.cartCount.textContent =
        count;
    }

    if (el.cartItems) {
      el.cartItems.innerHTML =
        state.cart
          .map(
            cartItemHTML
          )
          .join("");

      applyImageFallbacks(
        el.cartItems
      );
    }

    if (el.cartEmpty) {
      el.cartEmpty.hidden =
        state.cart.length >
        0;
    }

    if (el.cartSummary) {
      el.cartSummary.hidden =
        state.cart.length ===
        0;
    }

    if (el.checkoutOpen) {
      el.checkoutOpen.disabled =
        state.cart.length ===
        0;
    }

    if (el.cartSubtotal) {
      el.cartSubtotal.textContent =
        pending &&
        subtotal === 0
          ? "Pending"
          : pending
          ? `${formatPrice(
              subtotal
            )} + pending items`
          : formatPrice(
              subtotal
            );
    }

    if (
      isOpen(
        el.checkoutModal
      )
    ) {
      renderCheckoutSummary();
    }
  };

  const openCart = () => {
    renderCart();

    el.cartDrawer?.classList.add(
      "is-open"
    );

    el.cartDrawer?.setAttribute(
      "aria-hidden",
      "false"
    );

    el.cartToggle?.setAttribute(
      "aria-expanded",
      "true"
    );

    updateBodyLock();
  };

  const closeCart = () => {
    el.cartDrawer?.classList.remove(
      "is-open"
    );

    el.cartDrawer?.setAttribute(
      "aria-hidden",
      "true"
    );

    el.cartToggle?.setAttribute(
      "aria-expanded",
      "false"
    );

    updateBodyLock();
  };

  /* =========================================================
     CHECKOUT
     ========================================================= */

  const checkoutItemHTML = (
    item
  ) => {
    const meal =
      getMealById(
        item.id
      );

    if (!meal) {
      return "";
    }

    const linePrice =
      hasPrice(meal)
        ? formatPrice(
            Number(
              meal.price
            ) *
              item.qty
          )
        : "Pending";

    return `
      <div
        class="checkout-summary-item"
      >

        <img
          class="checkout-summary-image"
          data-leanbite-image
          src="${escapeHTML(
            mealImage(meal)
          )}"
          alt="${escapeHTML(
            meal.name
          )}"
        />

        <div>

          <p
            class="checkout-summary-name"
          >
            ${escapeHTML(
              meal.name
            )}
          </p>

          <p
            class="checkout-summary-meta"
          >
            Qty:
            ${item.qty}
          </p>

        </div>

        <span
          class="checkout-summary-price"
        >
          ${escapeHTML(
            linePrice
          )}
        </span>

      </div>
    `;
  };

  const renderCheckoutSummary =
    () => {
      if (
        !el.checkoutSummaryItems
      ) {
        return;
      }

      cleanCart();

      el.checkoutSummaryItems.innerHTML =
        state.cart
          .map(
            checkoutItemHTML
          )
          .join("");

      applyImageFallbacks(
        el.checkoutSummaryItems
      );

      if (
        el.checkoutItemCount
      ) {
        el.checkoutItemCount.textContent =
          cartCount();
      }

      if (
        el.checkoutTotal
      ) {
        const subtotal =
          cartSubtotal();

        const pending =
          hasUnpricedItems();

        el.checkoutTotal.textContent =
          pending &&
          subtotal === 0
            ? "Pending"
            : pending
            ? `${formatPrice(
                subtotal
              )} + pending`
            : formatPrice(
                subtotal
              );
      }
    };

  const clearCheckoutMessage =
    () => {
      if (
        !el.checkoutMessage
      ) {
        return;
      }

      el.checkoutMessage.hidden =
        true;

      el.checkoutMessage.textContent =
        "";

      el.checkoutMessage.classList.remove(
        "is-success",
        "is-error"
      );
    };

  const showCheckoutMessage = (
    message,
    type
  ) => {
    if (
      !el.checkoutMessage
    ) {
      return;
    }

    el.checkoutMessage.textContent =
      message;

    el.checkoutMessage.hidden =
      false;

    el.checkoutMessage.classList.remove(
      "is-success",
      "is-error"
    );

    if (type) {
      el.checkoutMessage.classList.add(
        type
      );
    }
  };

  const clearErrors = () => {
    document
      .querySelectorAll(
        ".form-field.has-error"
      )
      .forEach((field) =>
        field.classList.remove(
          "has-error"
        )
      );

    document
      .querySelectorAll(
        ".field-error"
      )
      .forEach(
        (error) =>
          (error.textContent =
            "")
      );
  };

  const fieldError = (
    input,
    message
  ) => {
    if (!input) {
      return;
    }

    input
      .closest(".form-field")
      ?.classList.add(
        "has-error"
      );

    const error =
      document.querySelector(
        `[data-error-for="${input.id}"]`
      );

    if (error) {
      error.textContent =
        message;
    }
  };

  const validateCheckout =
    () => {
      clearErrors();
      clearCheckoutMessage();

      let valid = true;

      const name =
        el.customerName?.value.trim() ||
        "";

      const phone =
        el.customerPhone?.value.trim() ||
        "";

      const area =
        el.customerArea?.value.trim() ||
        "";

      const address =
        el.customerAddress?.value.trim() ||
        "";

      const phoneDigits =
        phone.replace(
          /\D/g,
          ""
        );

      if (
        name.length < 2
      ) {
        fieldError(
          el.customerName,
          "Please enter your full name."
        );

        valid = false;
      }

      if (
        phoneDigits.length <
          8 ||
        phoneDigits.length >
          15
      ) {
        fieldError(
          el.customerPhone,
          "Please enter a valid phone number."
        );

        valid = false;
      }

      if (
        area.length < 2
      ) {
        fieldError(
          el.customerArea,
          "Please enter your area or district."
        );

        valid = false;
      }

      if (
        address.length < 5
      ) {
        fieldError(
          el.customerAddress,
          "Please enter a complete delivery address."
        );

        valid = false;
      }

      if (
        !state.cart.length
      ) {
        showCheckoutMessage(
          "Your cart is empty.",
          "is-error"
        );

        valid = false;
      }

      return valid;
    };

  /* =========================================================
     ORDER PAYLOAD
     Ready for future backend / Odoo connection
     ========================================================= */

  const buildOrderPayload =
    () => ({
      source:
        "leanbite-menu-web",

      createdAt:
        new Date().toISOString(),

      customer: {
        name:
          el.customerName?.value.trim() ||
          "",

        phone:
          el.customerPhone?.value.trim() ||
          "",

        area:
          el.customerArea?.value.trim() ||
          "",

        address:
          el.customerAddress?.value.trim() ||
          "",

        notes:
          el.orderNotes?.value.trim() ||
          ""
      },

      currency:
        DATA.settings
          .currencyCode ||
        "IQD",

      items: state.cart
        .map((item) => {
          const meal =
            getMealById(
              item.id
            );

          if (!meal) {
            return null;
          }

          return {
            localProductId:
              meal.id,

            odooProductId:
              meal.odooProductId ||
              null,

            name:
              meal.name,

            quantity:
              item.qty,

            unitPrice:
              hasPrice(meal)
                ? Number(
                    meal.price
                  )
                : null,

            lineTotal:
              hasPrice(meal)
                ? Number(
                    meal.price
                  ) *
                  item.qty
                : null
          };
        })
        .filter(Boolean),

      totals: {
        itemCount:
          cartCount(),

        subtotal:
          cartSubtotal(),

        hasUnpricedItems:
          hasUnpricedItems()
      }
    });

  const openCheckout = () => {
    if (
      !el.checkoutModal ||
      !state.cart.length
    ) {
      return;
    }

    closeCart();

    clearErrors();
    clearCheckoutMessage();

    renderCheckoutSummary();

    if (
      typeof el.checkoutModal
        .showModal ===
      "function"
    ) {
      el.checkoutModal.showModal();
    } else {
      el.checkoutModal.setAttribute(
        "open",
        ""
      );
    }

    updateBodyLock();

    setTimeout(
      () =>
        el.customerName?.focus(),
      50
    );
  };

  const closeCheckout =
    () => {
      if (
        !el.checkoutModal
      ) {
        return;
      }

      if (
        typeof el.checkoutModal
          .close ===
          "function" &&
        el.checkoutModal.open
      ) {
        el.checkoutModal.close();
      } else {
        el.checkoutModal.removeAttribute(
          "open"
        );
      }

      updateBodyLock();
    };

  const submitCheckout = (
    event
  ) => {
    event.preventDefault();

    if (
      !validateCheckout()
    ) {
      return;
    }

    const payload =
      buildOrderPayload();

    /*
      Ready for backend / Odoo.

      IMPORTANT:
      Nothing is transmitted yet.
    */

    window.LEAN_BITE_LAST_ORDER =
      payload;

    console.log(
      "Lean Bite order payload ready for backend:",
      payload
    );

    showCheckoutMessage(
      "Order details are ready. Odoo submission will be connected in the backend phase.",
      "is-success"
    );
  };

  /* =========================================================
     SEARCH
     ========================================================= */

  const toggleSearch = () => {
    if (
      !el.searchPanel
    ) {
      return;
    }

    el.searchPanel.hidden =
      !el.searchPanel.hidden;

    el.searchToggle?.setAttribute(
      "aria-expanded",
      el.searchPanel.hidden
        ? "false"
        : "true"
    );

    if (
      !el.searchPanel.hidden
    ) {
      setTimeout(
        () =>
          el.menuSearch?.focus(),
        30
      );
    }
  };

  const clearSearch = () => {
    state.searchTerm = "";

    if (
      el.menuSearch
    ) {
      el.menuSearch.value =
        "";

      el.menuSearch.focus();
    }

    renderMenu();
  };

  /* =========================================================
     EVENTS
     ========================================================= */

  el.categoryNavInner?.addEventListener(
    "click",
    (event) => {
      const button =
        event.target.closest(
          "[data-category]"
        );

      if (button) {
        setActiveCategory(
          button.dataset
            .category
        );
      }
    }
  );

  el.searchToggle?.addEventListener(
    "click",
    toggleSearch
  );

  el.searchClear?.addEventListener(
    "click",
    clearSearch
  );

  el.menuSearch?.addEventListener(
    "input",
    (event) => {
      state.searchTerm =
        event.target.value ||
        "";

      renderMenu();
    }
  );

  el.menuGrid?.addEventListener(
    "click",
    (event) => {
      const add =
        event.target.closest(
          "[data-add-meal]"
        );

      if (add) {
        event.stopPropagation();

        addToCart(
          add.dataset
            .addMeal
        );

        return;
      }

      const card =
        event.target.closest(
          "[data-meal-id]"
        );

      if (card) {
        openMealModal(
          card.dataset
            .mealId
        );
      }
    }
  );

  el.menuGrid?.addEventListener(
    "keydown",
    (event) => {
      if (
        ![
          "Enter",
          " "
        ].includes(
          event.key
        )
      ) {
        return;
      }

      const card =
        event.target.closest(
          "[data-meal-id]"
        );

      if (!card) {
        return;
      }

      event.preventDefault();

      openMealModal(
        card.dataset
          .mealId
      );
    }
  );

  el.mealModalClose?.addEventListener(
    "click",
    closeMealModal
  );

  el.mealModalAdd?.addEventListener(
    "click",
    () => {
      if (
        !state.selectedMealId
      ) {
        return;
      }

      addToCart(
        state.selectedMealId
      );

      closeMealModal();
      openCart();
    }
  );

  el.mealModal?.addEventListener(
    "click",
    (event) => {
      if (
        event.target ===
        el.mealModal
      ) {
        closeMealModal();
      }
    }
  );

  el.mealModal?.addEventListener(
    "cancel",
    (event) => {
      event.preventDefault();
      closeMealModal();
    }
  );

  el.cartToggle?.addEventListener(
    "click",
    openCart
  );

  el.cartClose?.addEventListener(
    "click",
    closeCart
  );

  el.cartBackdrop?.addEventListener(
    "click",
    closeCart
  );

  el.cartItems?.addEventListener(
    "click",
    (event) => {
      const plus =
        event.target.closest(
          "[data-cart-plus]"
        );

      const minus =
        event.target.closest(
          "[data-cart-minus]"
        );

      if (plus) {
        changeQty(
          plus.dataset.cartPlus,
          1
        );
      }

      if (minus) {
        changeQty(
          minus.dataset
            .cartMinus,
          -1
        );
      }
    }
  );

  el.checkoutOpen?.addEventListener(
    "click",
    openCheckout
  );

  el.checkoutClose?.addEventListener(
    "click",
    closeCheckout
  );

  el.checkoutForm?.addEventListener(
    "submit",
    submitCheckout
  );

  el.checkoutModal?.addEventListener(
    "click",
    (event) => {
      if (
        event.target ===
        el.checkoutModal
      ) {
        closeCheckout();
      }
    }
  );

  el.checkoutModal?.addEventListener(
    "cancel",
    (event) => {
      event.preventDefault();
      closeCheckout();
    }
  );

  [
    el.customerName,
    el.customerPhone,
    el.customerArea,
    el.customerAddress
  ].forEach(
    (input) => {
      input?.addEventListener(
        "input",
        () => {
          input
            .closest(
              ".form-field"
            )
            ?.classList.remove(
              "has-error"
            );

          const error =
            document.querySelector(
              `[data-error-for="${input.id}"]`
            );

          if (error) {
            error.textContent =
              "";
          }

          clearCheckoutMessage();
        }
      );
    }
  );

  el.viewAllOffers?.addEventListener(
    "click",
    () => {
      el.offersTrack?.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    }
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key !==
        "Escape"
      ) {
        return;
      }

      if (
        isOpen(
          el.checkoutModal
        )
      ) {
        closeCheckout();
        return;
      }

      if (
        el.cartDrawer?.classList.contains(
          "is-open"
        )
      ) {
        closeCart();
        return;
      }

      if (
        isOpen(
          el.mealModal
        )
      ) {
        closeMealModal();
      }
    }
  );

  /* =========================================================
     INIT
     ========================================================= */

  renderCategories();
  renderOffers();
  renderMenu();
  renderCart();

  if (
    el.copyrightYear
  ) {
    el.copyrightYear.textContent =
      `© ${new Date().getFullYear()} ${
        DATA.settings
          .brandName ||
        "Lean Bite"
      }`;
  }

  console.log(
    `Lean Bite loaded with ${getMeals().length} available items.`
  );
})();
