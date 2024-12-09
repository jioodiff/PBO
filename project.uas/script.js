let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");

    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Hapus";
        removeButton.style.marginLeft = "10px";
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    totalElement.textContent = totalPrice.toLocaleString();
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang belanja kosong!");
        return;
    }

    alert(`Terima kasih telah berbelanja. Total: Rp ${totalPrice.toLocaleString()}`);
    cart = [];
    totalPrice = 0;
    renderCart();
}

// Dummy data untuk validasi login
const validUsername = "admin";
const validPassword = "12345";

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("login-error");

    if (username === validUsername && password === validPassword) {
        // Tambahkan kelas fade-out ke login-container
        const loginContainer = document.getElementById("login-container");
        loginContainer.classList.remove("fade-in");
        loginContainer.classList.add("fade-out");

        // Tampilkan app-container dengan animasi
        const appContainer = document.getElementById("app-container");
        appContainer.style.display = "block";
        setTimeout(() => {
            appContainer.classList.remove("fade-out");
            appContainer.classList.add("fade-in");
        }, 500); // Sesuaikan dengan durasi transisi CSS (0.5s)
    } else {
        loginError.style.display = "block";
    }
}
function logout() {
    // Tambahkan animasi keluar untuk app-container
    const appContainer = document.getElementById("app-container");
    appContainer.classList.remove("fade-in");
    appContainer.classList.add("fade-out");

    // Tampilkan kembali login-container setelah transisi selesai
    setTimeout(() => {
        appContainer.style.display = "none";

        const loginContainer = document.getElementById("login-container");
        loginContainer.style.display = "block";
        loginContainer.classList.remove("fade-out");
        loginContainer.classList.add("fade-in");
    }, 500); // Durasi animasi disesuaikan dengan CSS (0.5s)
}
function openCart() {
    const modal = document.getElementById("cart-modal");
    const cartItemsModal = document.getElementById("cart-items-modal");
    const cartTotalPrice = document.getElementById("cart-total-price");

    // Kosongkan isi keranjang sebelumnya
    cartItemsModal.innerHTML = "";

    // Tampilkan item dalam keranjang
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
        cartItemsModal.appendChild(li);
    });

    // Tampilkan total harga
    cartTotalPrice.textContent = totalPrice.toLocaleString();

    // Tampilkan modal
    modal.style.display = "block";
}
function closeCart() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = "none";
}
window.onclick = function(event) {
    const modal = document.getElementById("cart-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
