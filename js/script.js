let allImgs = document.querySelectorAll(".wrapper-books .books .book img");

// Array To Store item
let arrayData = [1];

if (localStorage.getItem(`book`) !== null) {
  arrayData = JSON.parse(localStorage.getItem(`book`));

  window.addEventListener("DOMContentLoaded", (e) => {
    if (document.querySelector(".left-side .product")) {
      let cartItem = document.createElement("div");
      cartItem.innerHTML = JSON.parse(localStorage.getItem(`book`));
      document
        .querySelector(".book-info .left-side .cache-item")
        .append(cartItem);
    }
  });
}

// Loop on All img to click it
allImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Parent Element
    const bookContainer = e.target.parentElement;

    let productImg = bookContainer.querySelector("img").src;
    let productName = bookContainer.querySelector(".book-name").innerHTML;
    let author = bookContainer.querySelector(".author").innerHTML;
    let stars = bookContainer.querySelector(".stars").innerHTML;
    let oldPrice = bookContainer.querySelector(
      ".prices span:first-child"
    ).innerHTML;
    let newPrice = bookContainer.querySelector(
      ".prices span:nth-child(2)"
    ).innerHTML;

    // function contain HTML Element
    let productComponent = cartEle(
      productImg,
      productName,
      newPrice,
      oldPrice,
      stars,
      author
    );

    // push item to Array
    arrayData.push(productComponent);

    arrayData.shift();

    // save data in localStorage
    localStorage.setItem("book", JSON.stringify(arrayData));

    // To Direct to info book page
    setTimeout(() => {
      window.location = "/book-info.html";
    }, 1000);
  });
});

// Function To return item to save in localStorage
function cartEle(img, name, newPrice, oldPrice, stars) {
  return `
            <img  src="${img}" alt="">
                    <h4 style='color:#555;'>${name}</h4>
                    <div class="prices">
                    <span>قبل: ${oldPrice}</span>
                    <span>بعد: ${newPrice}</span>
                    <span>هتوفر: %50</span>
                  </div>
                    <button>اضف الي عربة التسوق <i class="fa-solid fa-cart-plus"></i></button>
                    <ul>
                    ${stars}
                    </ul>
                    `;
}
