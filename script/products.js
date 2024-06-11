function CreateItem(id, name, category, image, description, price, quantity) {
    this.id = id
    this.name = name
    this.category = category
    this.image = image
    this.description = description
    this.price = price
    this.quantity = quantity
}

let item1 = new CreateItem(1, 'Long Dress', 'Dresses', 'https://i.postimg.cc/fLDt366g/20240610-153941.jpg', 'pink fit and flare dress', 200.00, 1)
let item2 = new CreateItem(2, 'Short Dress', 'Dresses', 'https://i.postimg.cc/5ytXg89B/20240610-153540.jpg', 'pink off shoulder short dress', 250.00, 1)
let item3 = new CreateItem(3, 'Hair Clip', 'Accesories', 'https://i.postimg.cc/jdLWJ6FK/96189ee8aec7cb7bb07561283f784bb8-removebg-preview.png', 'pink floral hair clip accesory', 60.00, 1)
let item4 = new CreateItem(4, 'Scrunchie', 'Accesories', 'https://i.postimg.cc/wjN7wqzG/f07114f769fa71ea52f8ede85ef3a57f-removebg-preview.png', 'pink scrunchie hair tie', 20.00, 1)
let item5 = new CreateItem(5, 'Perfume', 'Shoes', 'https://i.postimg.cc/5tMjGhNN/20240610-153700.jpg', 'Amazing Pink Perfume', 300.00, 1)
let item6 = new CreateItem(6, 'Perfume', 'Shoes', 'https://i.postimg.cc/qM4TPp2F/20240610-153618-removebg-preview.png', 'Amazing Pink Perfume', 300.00, 1)
let item7 = new CreateItem(7, 'Hair Clip', 'Accesories', 'https://i.postimg.cc/SxLmXJkk/40aaa04bd858d33712643a6ddc9206bc-removebg-preview.png', 'pink floral hair clip accesory', 60.00, 1)
let item8 = new CreateItem(8, 'Scrunchie', 'Dresses', 'https://i.postimg.cc/gJjpBsR2/20240610-155942.jpg', 'pink scrunchie hair tie', 20.00, 1)
let item9 = new CreateItem(9, 'Perfume', 'Shoes', 'https://i.postimg.cc/YSGK60wv/4b9dc57bba9283995265e1c0ef204b58-removebg-preview.png', 'Amazing Pink Perfume', 300.00, 1)

//display items
let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9];

localStorage.setItem('items', JSON.stringify(items))

let purchasedItems = [];

let productGrid = document.querySelector('.product-grid')

items.forEach(item => {
    productGrid.innerHTML += `
        <div class="product-card">
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
            <p>R ${item.price}</p>
            <button id="viewmore">View More</button>
            <button class="purchase" value="${item.id}">Purchase</button>
        </div>
    `
})

let purchasedButtons = document.querySelectorAll('.purchase')

function addToCart(id) {
    let item = items.filter(object => object.id == id) //items= the array above
    purchasedItems.push(item)
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
}

purchasedButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        addToCart(event.target.value)
    })
})