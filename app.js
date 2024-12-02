// Toggle hamburger menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbar = document.getElementById("navbar");

hamburgerMenu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// klik diluar sidebar untuk menghilangkan navbar
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// read more function
const serviceItems = document.querySelector(".services-container");
const popup = document.querySelector(".popup-box");
const popupCloseBtn = document.querySelector(".popup-close-btn");
const popupCloseIcon = document.querySelector(".popup-close-icon");

serviceItems.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() == "button") {
    const item = e.target.parentElement;
    const h3 = item.querySelector("h3").innerHTML;
    const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
    popup.querySelector("h3").innerHTML = h3;
    popup.querySelector(".popup-body").innerHTML = readMoreCont;

    popupBox();
  }
});

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

function popupBox() {
  popup.classList.toggle("open");
}
