const bars = document.querySelector(".bars");
const linksContainer = document.querySelector("nav .links");
const allLinks = document.querySelectorAll("nav .links li");

bars.addEventListener("click", () => {
  linksContainer.classList.toggle("active-links");
});

allLinks.forEach((li) => {
  li.addEventListener("click", () => {
    if (linksContainer.classList.contains("active-links")) {
      linksContainer.classList.remove("active-links");
    }
  });
});

// ************* Home Page Section ***********
// Home Page To Change image
let homePage = document.querySelector(".main .home-page");

// Imgs Path
const arrayImg = [
  "home-1.jpg",
  "home-2.webp",
  "home-3.webp",
  "home-4.webp",
  "home-5.webp",
];

// Every 3 Seconds img Change
if (homePage) {
  setInterval(() => {
    let randomNumber = Math.floor(Math.random() * arrayImg.length);
    homePage.style.backgroundImage =
      `url("images/` + arrayImg[randomNumber] + `")`;
  }, 3000);
}

// *********** Products Section *************

// Images To Know Info
let allImgs = document.querySelectorAll(".wrapper-books .books .book img");

// Option Of Lazy Loading
const Option = {
  rootMargin: "0px 0px -200px 0px",
};

// Make Lazy Loading
const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const imgTarget = entry.target;
      imgTarget.setAttribute("src", imgTarget.dataset.src);
    }
  });
}, Option);

// Target Observer On Img
allImgs.forEach((img) => {
  imgObserver.observe(img);
});

/*  Start Shopping Cart */

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
      window.location = "book-info.html";
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
                    <a href="payment-page.html"><button>
                    اضف الي عربة التسوق <i class="fa-solid fa-cart-plus"></i>
                  </button></a>
                    <ul>
                    ${stars}
                    </ul>
                    `;
}

/*  End Shopping Cart */

// Scroll To Top
const scrollToTop = document.querySelector(".arrow-up");

// Add Or Remove Scroll To Top
if (scrollToTop) {
  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 900) {
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.display = "none";
    }
  });
}

// Go Top
scrollToTop?.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
