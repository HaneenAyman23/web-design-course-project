# web-design-course-project
# 🏠 Smart Home — E-Commerce Website

A fully responsive, multi-page e-commerce website for smart home devices (security cameras, thermostats, smart locks, LED bulbs, and more), built with **HTML5, CSS3, Bootstrap 5, and JavaScript**.

🔗 **Live Demo:** [https://web-design-course-project.vercel.app/]
📂 **Repository:** [https://github.com/HaneenAyman23/web-design-course-project]

---

## 📋 Project Overview

This project was built to fulfill the requirements of a final assignment demonstrating practical skills in HTML, CSS, and Bootstrap by building a complete e-commerce flow — from browsing products to checkout and order confirmation.

---

## ✅ Core Pages

| # | Page | File | Description |
|---|------|------|-------------|
| 1 | Home | `index.html` | Hero banner, featured products, category highlights, newsletter signup |
| 2 | Products | `products.html` | All products with **category filtering and price/name sorting** |
| 3 | Product Detail | `product-detail.html` | Dynamic product view (`?id=`) with quantity selector and "Add to Cart" |
| 4 | Shopping Cart | `cart.html` | Live cart items, quantity controls, item removal, and order summary |
| 5 | Checkout | `checkout.html` | Shipping/payment form with real order summary, validation, and order placement |
| 6 | User Profile | `profile.html` | Account info, order history, and saved items — tabbed interface |

## 🎁 Bonus Pages

- **About Us** — `about.html`
- **FAQs** — `faqs.html`
- **Order Confirmation** — `order-confirmation.html`

## ⚡ JavaScript Features (Bonus)

- **Unified cart engine** (`cart.js`) shared by every page — one consistent product catalog and one consistent cart data model in `localStorage`
- **Persistent cart** that actually carries items across Home → Products → Product Detail → Cart → Checkout
- **Live cart counter** in the navbar, kept in sync everywhere
- **Category filter + sort** (price/name) on the Products page
- **Dynamic Product Detail page** — renders title, price, stock, features, and specs based on the `?id=` in the URL
- **Quantity controls & item removal** on the Cart page, with auto-recalculated totals (subtotal, shipping, tax, total)
- **Checkout form validation** — blocks order placement until required fields are filled and the cart isn't empty, then clears the cart and redirects to a confirmation page populated with the real order
- **Saved Items / wishlist tab** on the Profile page with "Move to Cart"
- **Tabbed profile page** for switching between account info, order history, saved items, and settings
- On-page toast alerts instead of default browser `alert()` for key actions (e.g. "Product added to cart!")
- **Vercel Analytics** snippet included in the `<head>` of every page

---

## 🛠 Tech Stack

- **HTML5** — semantic markup across all pages
- **CSS3** — custom theme (`style.css`) with CSS variables for the color palette, plus per-page custom styles
- **Bootstrap 5.3** — layout, navbar, grid, and responsive components (loaded via CDN)
- **Font Awesome 6.4** — icons (loaded via CDN)
- **Google Fonts** — Space Grotesk (headings) / Manrope (body)
- **Vanilla JavaScript** — shared cart logic (`cart.js`), form interactions, filtering/sorting, tab switching (no frameworks)

---

## 📁 Project Structure

```
Web_Design_Project/
├── index.html
├── about.html
├── faqs.html
├── products.html
├── product-detail.html
├── cart.html
├── checkout.html
├── order-confirmation.html
├── profile.html
├── style.css
├── cart.js
├── Door Lock.jpg
├── Led Blubs.jpg
├── Robot Vacuum.jpg
├── Smart Plug 4-Pack.jpg
├── Smart Security Camera.jpg
├── Smart Smoke Detector.jpg
└── Thermostat.jpg

---

## 🎨 Design — "Control Panel" UI

This isn't a default Bootstrap-blue theme — it's a deliberate visual identity built around the subject matter: a **dark "device control panel" chrome** (navbar + footer) wrapping a bright, calm showroom, with a single warm **ember/amber glow** as the accent color, meant to evoke the glow of a smart device powering on. A cool **teal "signal"** color is reserved for connectivity/status indicators (in-stock pills, online states), separate from the warm action color — borrowed straight from how real smart-home apps (Hue, Nest, Ring) use color to mean something, not just decorate.

- **Typography** — `Space Grotesk` for headings (a little technical, a little geometric — fits "smart" hardware), `Manrope` for body text. Every page now actually renders with these fonts; previously several pages quietly fell back to Arial, and even the pages that *loaded* custom fonts never applied them anywhere.
- **One shared design system** (`style.css`) drives every page — colors, type, buttons, cards, forms, and motion are all defined once as CSS custom properties, instead of seven pages each carrying their own copy-pasted, slightly-different inline styles.
- **A real navbar + footer on every page** — Cart, Checkout, Profile, and Order Confirmation were previously orphaned pages with no site navigation at all (just a "← Back" link). They now share the same dark nav and footer as the rest of the site, so the whole thing feels like one product instead of four bolted-on prototypes.
- **Product cards** with a category tag, a status pill ("● In Stock" / "● Low Stock"), strike-through pricing on sale items, and a soft glow behind the product photo on hover.
- **A real hero moment** on the homepage — dark panel, dual ambient glow, an "eyebrow" status badge, and category chips — instead of a generic gradient banner.
- **Accessibility carried through** — visible focus rings, a "Skip to main content" link, `prefers-reduced-motion` support, and text/border colors checked for contrast (a bright accent color that works great on a button can fail completely as body text, so the system uses a darker variant for text/links and the brighter one for fills).
- **Small interaction details** — buttons lift and glow on hover/press, removing a cart item shows an "Undo" toast instead of a blocking browser `confirm()`, and a tinted text-selection + slim branded scrollbar round it out.

### Bugs found and fixed along the way
- The home page's featured-product images were being force-stretched to 450px tall via a stray `.hh` class, distorting non-square photos
- Featured-product prices on the homepage didn't match the actual prices charged at checkout
- Two Google Fonts were being downloaded on every page load and never once used in any CSS rule
- A leftover custom `.container` class on 5 pages silently conflicted with Bootstrap's grid container, which would have broken the new navbar's layout if left in place

---

## 🐛 Other Fixes Applied in Earlier Passes

- Renamed all files to clean, lowercase, hyphenated names (no more spaces or typos like "Detialed") and fixed every link to match
- Unified the cart so Home, Products, and Product Detail all add to the **same** cart — previously each page used an incompatible data format and items never actually showed up in the Cart page
- Cart page now renders real cart contents instead of two hardcoded demo items
- Checkout's "Place Order" button no longer skips validation — it now blocks on empty fields/empty cart, clears the cart, and hands real order data to the confirmation page
- Removed broken links (`cart.html`, `product-detail.html?id=`) and broken asset references (missing `css/` files, missing favicon)
- Removed a stray, non-functional review form left in Product Detail page
- Added missing Bootstrap JS bundle on the FAQ page (mobile nav menu wasn't opening)
- Added category filter + price/name sort to the Products page (was a mandatory requirement)
- Added a "Saved Items" tab to the Profile page (was listed as a requirement but missing)

---

## 👤 Author

Built by **Haneen** as a final project assignment (HTML, CSS & Bootstrap).

---

## 📄 License

This project is for educational purposes.
