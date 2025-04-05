let adminProducts=JSON.parse(localStorage.getItem('adminProducts')) || [];

//Add product
function addProduct(){
    const name=document.getElementById('productName').value;
    const price=document.getElementById('productPrice').value;

    adminProducts.push({
        id:Date.now(),
        title:name,
        price:parseFloat(price),
        image:'https://via.placeholder.com/200'
        });

    localStorage.setItem('adminProducts',JSON.stringify(adminProducts));
    renderProducts();
}

//Render product
function renderProducts() {
    const container = document.getElementById('adminProducts');
    container.innerHTML = adminProducts.map(product => 
      `<div class="product-card">
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <button onclick="deleteProduct(${product.id})">Delete</button>
      </div>`
    ).join('');
  }

//Delete product
function deleteProduct(){
    adminProducts=adminProducts.filter(p=>p.id !==productId);
    localStorage.setItem('adminProducts',JSON.stringify(adminProducts));
    renderProducts();
}

function logout(){
  localStorage.removeItem('user');
  window.location.href='/index.html';
}

//Load Orders
function loadOrders(){
    const orders=JSON.parse(localStorage.getItem('allOrders')) || [];
    const container=document.getElementById('allOrders');
    container.innerHTML = orders.map(order => 
        `<div class="order-item">
          <span>${order.product}</span>
          <span>${order.price}</span>
          <button onclick="deleteProduct(${product.id})">Delete</button>
        </div>`
      ).join('');
}
// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);


//Initalize
renderProducts();
loadOrders();