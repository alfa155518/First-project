// Handle menu Links

const bars = document.querySelector(".bars");
const linksContainer = document.querySelector("nav .links");
const allLinks = document.querySelectorAll("nav .links li");

// bars to remove class appear
bars.addEventListener("click", () => {
  linksContainer.classList.toggle("active-links");
});

// Links to remove class appear
allLinks.forEach((li) => {
  li.addEventListener("click", () => {
    if (linksContainer.classList.contains("active-links")) {
      linksContainer.classList.remove("active-links");
    }
  });
});

// Make Fade out To Book in business-management page

const allBook = document.querySelectorAll(".wrapper-books .books .book");

const Option = {
  rootMargin: "0px 0px -300px 0px",
};

const appearBookObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let book = entry.target;
      book.classList.add("appear");
    }
  });
}, Option);

allBook.forEach((book) => {
  appearBookObserver.observe(book);
});
