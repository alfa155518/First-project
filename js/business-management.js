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
