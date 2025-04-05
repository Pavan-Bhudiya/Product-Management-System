function loadOrders(){
        const orders=JSON.parse(localStorage.getItem('userOrders')) || [];
        const container=document.getElementById('ordersList');
        container.innerHTML = orders.map(order => 
            `<div class="order-item">
              <span>${order.title}</span>
              <span>${order.price}</span>
              <button onclick="deleteProduct(${product.id})">Delete</button>
            </div>`
          ).join('');
          
    
}
function logout(){
  localStorage.removeItem('user');
  window.location.href='/index.html';
}
function downloadReport(){
    const orders=JSON.parse(localStorage.getItem('userOrders')) || [];
    const csvContent=[
        'Product Name,Price',
        ...orders.map(order => '"${order.title}",${order.price}')
    ].join('\n');
    const blob= new Blob([csvContent],{
        type:'text/csv'});
        const url=window.URL.createObjectURL(blob);
        const a=document.createElement('a');
        a.href=url;
        a.download='my-orders.csv';
        a.click();
}

//Initialize
loadOrders();