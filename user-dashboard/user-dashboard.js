let products = [];
let orders = JSON.parse(localStorage.getItem('userOrders')) || [];

async function fetchProducts() {
  const adminProducts = JSON.parse(localStorage.getItem('adminProducts'));
  
  if (adminProducts?.length > 0) {
    products = adminProducts;
  } else {
    
    const response = await fetch('https://fakestoreapi.com/products');
    products = await response.json();
  }
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('products');
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Order Now</button>
    </div>
  `).join('');
}
function logout(){
    localStorage.removeItem('user');
    window.location.href='/index.html';
  }
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  orders.push(product);
  localStorage.setItem('userOrders', JSON.stringify(orders));
  alert('Added to orders!');
}
// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);


fetchProducts();