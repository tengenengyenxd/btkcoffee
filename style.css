// This acts as our "Database"
const menuData = [
    {
        name: "House Espresso",
        price: "$3.00",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=500&q=60",
        desc: "Double shot of our signature blend."
    },
    {
        name: "Caramel Latte",
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1461023058943-645751579d89?auto=format&fit=crop&w=500&q=60",
        desc: "Espresso, steamed milk, and caramel drizzle."
    },
    {
        name: "Cold Brew",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1467232002004-6a3a9d382950?auto=format&fit=crop&w=500&q=60",
        desc: "Steeped for 20 hours. Served over ice."
    },
    {
        name: "Avocado Toast",
        price: "$8.00",
        image: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d?auto=format&fit=crop&w=500&q=60",
        desc: "Fresh sourdough, smashed avocado, chili flakes."
    },
    {
        name: "Cappuccino",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=60",
        desc: "Equal parts espresso, steamed milk, and foam."
    },
    {
        name: "Croissant",
        price: "$3.50",
        image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=500&q=60",
        desc: "Buttery, flaky, and freshly baked."
    }
];

const menuContainer = document.getElementById('menu-container');

// Function to render menu to the HTML
function loadMenu() {
    menuContainer.innerHTML = menuData.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="menu-price">${item.price}</div>
        </div>
    `).join('');
}

// Run on load
document.addEventListener('DOMContentLoaded', loadMenu);
