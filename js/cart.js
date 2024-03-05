// Cart Icon
const addToCartBtn = document.querySelectorAll(".wrapper-books .books .book i");

// Number Of Products In Cart
let numberOfItemsInCart = document.querySelector("nav a span");

// Shopping Items Div In Shopping Cart Page
let shoppingItems = document.querySelector(".shopping-items");

// Array To receive Data In local Storage
let arrayShoppingItems;

// Button To Re-direct Payment Page
const btnBy = document.querySelector(".btn-by");

// Check if there Data to add more book
if (localStorage.getItem("cart-items") !== null) {
  arrayShoppingItems = JSON.parse(localStorage.getItem("cart-items"));
} else {
  arrayShoppingItems = [];
}

// When Click On Cart Icon To add Book in shopping cart
addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // The Book Element
    let targetBook = e.target.parentNode.parentElement.parentElement;

    // Book Items
    let bookImg = targetBook.querySelector("img").src;
    let bookName = targetBook.querySelector(".info .book-name").innerHTML;
    let newPrice = targetBook.querySelector(".prices .new-price").innerHTML;
    let oldPrice = targetBook.querySelector(".prices .old-price").innerHTML;
    let rate = targetBook.querySelector(".stars").innerHTML;

    // Pass Data To Function
    let bookData = bookElement(bookImg, bookName, newPrice, oldPrice, rate);

    // Push Data in Array
    arrayShoppingItems.push(bookData);

    // Add Data in LocalStorage
    localStorage.setItem("cart-items", JSON.stringify(arrayShoppingItems));

    // Decrease Number Of Product Items in Cart
    numberOfItemsInCart.innerHTML = JSON.parse(
      localStorage.getItem("cart-items")
    ).length;

    alert("Book Add To Shopping Cart");
  });
});

// Function Return Data as HTML Elements
function bookElement(bookImg, bookName, newPrice, oldPrice, rate) {
  return `
    <div class="cart-item">
    <img src="${bookImg}" alt="book-img"/>
    <div class="info">
    <ul>
    ${rate}
    </ul>
    <h2>${bookName}</h2>
    </div>
    <div class="prices">
    <span class="new-price">${newPrice}</span>
    <span class="old-price">${oldPrice}</span>
    <span><i class="fa-solid fa-trash"></i></span>
    </div>
    </div>
    
    `;
}

// Add Items In shopping Cart Page
if (localStorage.getItem("cart-items")) {
  let items = JSON.parse(localStorage.getItem("cart-items")).join("");
  if (shoppingItems !== null) {
    shoppingItems.innerHTML += items;
  }
}

// Check To Show Or Hide Btn
if (localStorage.getItem("cart-items") !== null) {
  btnBy?.classList?.remove("appear");
} else {
  btnBy?.classList?.add("appear");
}

// Clear All Items In Shopping Cart
if (localStorage.getItem("cart-items") !== null) {
  btnBy?.addEventListener("click", () => {
    localStorage.clear();
    console.log(4);
  });
}
