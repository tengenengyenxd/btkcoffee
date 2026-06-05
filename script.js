// This acts as our "Database"
const menuData = [
    {
        name: "Caramel Macchiatto",
        price: "P89.00 12oz | P99.00 16oz",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=500&q=60",
        desc: "Espresso, milk, and caramel drizzle."
    },
    {
        name: "Biscoff Frappe",
        price: "P109.00 16oz",
        image: "https://images.unsplash.com/photo-1461023058943-645751579d89?auto=format&fit=crop&w=500&q=60",
        desc: "A creamy blended latte infused with rich Biscoff cookie flavor, topped with whipped cream and Biscoff crumbs."
    },
    {
        name: "Samyang Overload",
        price: "P159.00",
        image: "https://images.unsplash.com/photo-1467232002004-6a3a9d382950?auto=format&fit=crop&w=500&q=60",
        desc: "Samyang Carbonara ramen elevated with cheesy sauce, egg, and ham—rich, spicy, and irresistibly satisfying."
    },
    {
        name: "Cookies and Cream Waffle",
        price: "P49.00 Single | P59.00 Double",
        image: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d?auto=format&fit=crop&w=500&q=60",
        desc: "A sweet treat featuring warm waffles, velvety whipped cream, crushed Oreo cookies, and luscious chocolate sauce."
    },
    {
        name: "Cheesy Fries",
        price: "P69.00",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=60",
        desc: "Perfectly seasoned fries topped with a generous drizzle of smooth and cheesy goodness."
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
