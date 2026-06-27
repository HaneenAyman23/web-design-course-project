/* ============================================================
   Smart Home — Shared Cart & Product Catalog
   Loaded on every page so the cart works the same way everywhere.
   Cart is stored in localStorage under the key "cart" as a JSON
   array of: { id, name, price, image, quantity }
   ============================================================ */

// ---- Product Catalog (single source of truth for all pages) ----
const PRODUCTS = [
    {
        id: 1,
        name: "Smart Security Camera Pro",
        price: 149.99,
        oldPrice: 199.99,
        image: "../assets/images/Smart Security Camera.jpg",
        category: "Security",
        rating: 5,
        stock: 24,
        description: "Protect your home with our 4K Smart Security Camera. Features night vision, motion detection, and real-time alerts. Works with Alexa and Google Home. Easy installation, weatherproof design.",
        features: [
            { icon: "fa-video", text: "4K Ultra HD Video" },
            { icon: "fa-moon", text: "Night Vision (up to 100ft)" },
            { icon: "fa-wifi", text: "Wi-Fi Connected" },
            { icon: "fa-shield-alt", text: "Weatherproof (IP65)" },
            { icon: "fa-bell", text: "Motion Detection Alerts" },
            { icon: "fa-microphone", text: "Two-way Audio" }
        ],
        details: {
            "Resolution": "4K Ultra HD (3840 x 2160)",
            "Field of View": "130° wide-angle",
            "Storage": "Cloud & Local SD Card Support",
            "Compatibility": "Alexa, Google Home, iOS & Android",
            "Warranty": "2-Year Limited Warranty"
        }
    },
    {
        id: 2,
        name: "Smart Thermostat",
        price: 129.99,
        oldPrice: null,
        image: "../assets/images/Thermostat.jpg",
        category: "Climate",
        rating: 4,
        stock: 18,
        description: "Save energy and stay comfortable with a thermostat that learns your schedule. Adjust the temperature from anywhere using your phone, and get monthly energy reports.",
        features: [
            { icon: "fa-temperature-low", text: "Auto-Schedule Learning" },
            { icon: "fa-mobile-alt", text: "Remote App Control" },
            { icon: "fa-leaf", text: "Energy-Saving Mode" },
            { icon: "fa-wifi", text: "Wi-Fi Connected" }
        ],
        details: {
            "Compatibility": "Most 24V HVAC systems",
            "Connectivity": "Wi-Fi 2.4GHz",
            "Display": "Color touchscreen",
            "Warranty": "2-Year Limited Warranty"
        }
    },
    {
        id: 3,
        name: "Smart LED Light Bulbs (4 Pack)",
        price: 49.99,
        oldPrice: 69.99,
        image: "../assets/images/Led Blubs.jpg",
        category: "Lighting",
        rating: 4,
        stock: 50,
        description: "Set the mood with 16 million colors and dimmable warm-to-cool white light. Control by app, voice, or schedule — no hub required.",
        features: [
            { icon: "fa-palette", text: "16 Million Colors" },
            { icon: "fa-sliders-h", text: "Dimmable, No Hub Needed" },
            { icon: "fa-microphone-alt", text: "Voice Control Ready" },
            { icon: "fa-clock", text: "Schedules & Routines" }
        ],
        details: {
            "Pack Size": "4 bulbs",
            "Base": "E26/E27",
            "Lifespan": "25,000 hours",
            "Warranty": "1-Year Limited Warranty"
        }
    },
    {
        id: 4,
        name: "Smart Door Lock",
        price: 189.99,
        oldPrice: null,
        image: "../assets/images/Door Lock.jpg",
        category: "Security",
        rating: 5,
        stock: 12,
        description: "Keyless entry with PIN codes, fingerprint, or your phone. Get instant alerts whenever your door is locked or unlocked, and grant temporary access to guests.",
        features: [
            { icon: "fa-fingerprint", text: "Fingerprint & PIN Entry" },
            { icon: "fa-mobile-alt", text: "Remote Lock/Unlock" },
            { icon: "fa-bell", text: "Real-Time Entry Alerts" },
            { icon: "fa-battery-three-quarters", text: "6-Month Battery Life" }
        ],
        details: {
            "Entry Methods": "App, PIN, Fingerprint, Key",
            "Compatibility": "Alexa, Google Home",
            "Material": "Zinc Alloy, Weatherproof",
            "Warranty": "2-Year Limited Warranty"
        }
    },
    {
        id: 5,
        name: "Smart Speaker",
        price: 99.99,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        category: "Audio",
        rating: 4,
        stock: 30,
        description: "Rich, room-filling sound paired with a built-in voice assistant. Play music, control your other smart home devices, and get answers — all hands-free.",
        features: [
            { icon: "fa-volume-up", text: "360° Room-Filling Sound" },
            { icon: "fa-microphone-alt", text: "Built-in Voice Assistant" },
            { icon: "fa-house-user", text: "Smart Home Hub" },
            { icon: "fa-wifi", text: "Wi-Fi & Bluetooth" }
        ],
        details: {
            "Connectivity": "Wi-Fi, Bluetooth 5.0",
            "Power": "AC Powered",
            "Compatibility": "Works with most music apps",
            "Warranty": "1-Year Limited Warranty"
        }
    },
    {
        id: 6,
        name: "Robot Vacuum",
        price: 299.99,
        oldPrice: 349.99,
        image: "../assets/images/Robot Vacuum.jpg",
        category: "Cleaning",
        rating: 5,
        stock: 15,
        description: "Powerful suction with smart mapping that learns your home's layout. Schedule cleanings from your phone and let it empty back to its dock automatically.",
        features: [
            { icon: "fa-map", text: "Smart Room Mapping" },
            { icon: "fa-mobile-alt", text: "App & Voice Control" },
            { icon: "fa-clock", text: "Scheduled Cleaning" },
            { icon: "fa-charging-station", text: "Auto Recharge & Resume" }
        ],
        details: {
            "Run Time": "Up to 120 minutes",
            "Bin Capacity": "0.6L",
            "Surfaces": "Carpet, hardwood, tile",
            "Warranty": "1-Year Limited Warranty"
        }
    },
    {
        id: 7,
        name: "Smart Plug 4-Pack",
        price: 39.99,
        oldPrice: null,
        image: "../assets/images/Smart Plug 4-Pack.jpg",
        category: "Power",
        rating: 4,
        stock: 60,
        description: "Turn any outlet into a smart outlet. Control lamps, fans, and appliances from your phone or with your voice, and set schedules to save energy.",
        features: [
            { icon: "fa-plug", text: "Works with Any Outlet" },
            { icon: "fa-mobile-alt", text: "App & Voice Control" },
            { icon: "fa-clock", text: "Custom Schedules" },
            { icon: "fa-bolt", text: "Energy Usage Tracking" }
        ],
        details: {
            "Pack Size": "4 plugs",
            "Max Load": "15A / 1800W",
            "Connectivity": "Wi-Fi 2.4GHz",
            "Warranty": "1-Year Limited Warranty"
        }
    },
    {
        id: 8,
        name: "Smart Smoke Detector",
        price: 89.99,
        oldPrice: null,
        image: "../assets/images/Smart Smoke Detector.jpg",
        category: "Safety",
        rating: 5,
        stock: 20,
        description: "Get instant phone alerts for smoke or carbon monoxide — even when you're away from home. Self-testing and easy to install in minutes.",
        features: [
            { icon: "fa-bell", text: "Instant Phone Alerts" },
            { icon: "fa-smog", text: "Smoke & CO Detection" },
            { icon: "fa-check-circle", text: "Self-Test Diagnostics" },
            { icon: "fa-battery-three-quarters", text: "10-Year Battery" }
        ],
        details: {
            "Detects": "Smoke & Carbon Monoxide",
            "Power": "10-Year Sealed Battery",
            "Connectivity": "Wi-Fi 2.4GHz",
            "Warranty": "10-Year Limited Warranty"
        }
    }
];

function findProduct(id) {
    return PRODUCTS.find(p => p.id === Number(id));
}

// ---- Cart Storage Helpers ----
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('cart')) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId, quantity = 1) {
    const product = findProduct(productId);
    if (!product) return;

    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart(cart);
    showAlert(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== Number(productId));
    saveCart(cart);
}

function setCartItemQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(i => i.id === Number(productId));
    if (!item) return;

    quantity = Math.max(1, Math.min(10, Number(quantity) || 1));
    item.quantity = quantity;
    saveCart(cart);
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = cart.length === 0 ? 0 : (subtotal > 100 ? 0 : 9.99);
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total };
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartBadge();
}

// ---- UI Helpers (shared across pages) ----
function updateCartBadge() {
    const totalItems = getCartCount();
    document.querySelectorAll('.cart-count, #cartCount').forEach(el => {
        el.textContent = totalItems;
        if (el.classList.contains('cart-count')) {
            el.style.display = totalItems > 0 ? 'block' : 'none';
        }
    });
}

function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
    alertDiv.style.zIndex = '9999';
    alertDiv.style.minWidth = '300px';
    alertDiv.innerHTML = `
        <strong>${type === 'success' ? 'Success!' : 'Info!'}</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => alertDiv.remove(), 150);
    }, 3000);
}

// Run on every page load
document.addEventListener('DOMContentLoaded', updateCartBadge);
