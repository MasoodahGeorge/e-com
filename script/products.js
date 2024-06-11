function CreateItem(id, name, category, image, description, price, quantity) {
    this.id = id
    this.name = name
    this.category = category
    this.image = image
    this.description = description
    this.price = price
    this.quantity = quantity
}

let item1 = new CreateItem(1, 'Floral Puffy Dress', 'Dresses', 'https://i.postimg.cc/fLDt366g/20240610-153941.jpg', 'Floral Puffy Dress Green Cream', 200.00, 1)
let item2 = new CreateItem(2, 'Floral A-line Dress', 'Dresses', 'https://i.postimg.cc/5ytXg89B/20240610-153540.jpg', 'Floral A-line Dress Pink White', 250.00, 1)
let item3 = new CreateItem(3, 'Silver Necklace', 'Accesories', 'https://i.postimg.cc/jdLWJ6FK/96189ee8aec7cb7bb07561283f784bb8-removebg-preview.png', 'Silver Necklace Purple Accesory', 60.00, 1)
let item4 = new CreateItem(4, 'Silver Bracelet', 'Accesories', 'https://i.postimg.cc/wjN7wqzG/f07114f769fa71ea52f8ede85ef3a57f-removebg-preview.png', 'Silver Bracelet Purple Accesory', 50.00, 1)
let item5 = new CreateItem(5, 'Pink Butterfly Heel', 'Shoes', 'https://i.postimg.cc/5tMjGhNN/20240610-153700.jpg', 'Pink High heel Butterfly', 250.00, 1)
let item6 = new CreateItem(6, 'Purple Butterfly Heel', 'Shoes', 'https://i.postimg.cc/qM4TPp2F/20240610-153618-removebg-preview.png', 'Purple High heel Butterfly', 300.00, 1)
let item7 = new CreateItem(7, 'Silver Bracelet', 'Accesories', 'https://i.postimg.cc/SxLmXJkk/40aaa04bd858d33712643a6ddc9206bc-removebg-preview.png', 'Silver Bracelet Pink Accesory', 50.00, 1)
let item8 = new CreateItem(8, 'Floral Puffy Dress', 'Dresses', 'https://i.postimg.cc/gJjpBsR2/20240610-155942.jpg', 'Floral Puffy Dress Green Pink Cream', 200.00, 1)
let item9 = new CreateItem(9, 'Pink Floral Heel', 'Shoes', 'https://i.postimg.cc/YSGK60wv/4b9dc57bba9283995265e1c0ef204b58-removebg-preview.png', 'Pink High heel Floral', 220.00, 1)

//display items
let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9];

localStorage.setItem('items', JSON.stringify(items))

let purchasedItems = [];

function displayItems(items) {
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    items.forEach(item => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <p>R ${item.price}</p>
                <button id="viewmore">View More</button>
                <button class="purchase" value="${item.id}">Purchase</button>
            </div>
        `;
    });

    let purchasedButtons = document.querySelectorAll('.purchase');
    purchasedButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            addToCart(event.target.value);
        });
    });
}

displayItems(items);

document.getElementById('searchButton').addEventListener('click', () => {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let categoryFilter = document.getElementById('categoryFilter').value;
    
    let filteredItems = items.filter(item => {
        let matchesSearch = item.name.toLowerCase().includes(searchInput);
        let matchesCategory = categoryFilter ? item.category === categoryFilter : true;
        return matchesSearch && matchesCategory;
    });

    displayItems(filteredItems);
});

//SPINNER
window.onload = () => {
    let spinner = document.querySelector('.spinner');
    if (items.length === 0) {
        spinner.style.display = 'block';}
//Cart
function addToCart(id) {
    let item = items.filter(object => object.id == id) //items= the array above
    purchasedItems.push(item)
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
}

purchasedButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        addToCart(event.target.value)
    })
})}